import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

// Simple login context that persists user + token to localStorage.
// Usage:
// const { user, token, login, logout, isAuthenticated } = useLogin();

const STORAGE_KEY = "login_data_v1";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	// load from localStorage if present
	useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				setUser(parsed.user ?? null);
				setToken(parsed.token ?? null);
			}
		} catch (err) {
			// malformed data; clear it
			console.warn("LoginContext: failed to parse stored login data", err);
			localStorage.removeItem(STORAGE_KEY);
		}
	}, []);

	// helper to persist
	const persist = (u, t) => {
		const payload = { user: u ?? null, token: t ?? null };
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
		} catch (err) {
			console.warn("LoginContext: failed to persist login data", err);
		}
	};

	// login accepts either (userObj, token) or a single object { user, token }
	const login = (a, b) => {
		let u = null;
		let t = null;
		if (a && typeof a === "object" && a.user !== undefined) {
			u = a.user;
			t = a.token ?? null;
		} else {
			u = a ?? null;
			t = b ?? null;
		}

		setUser(u);
		setToken(t);
		persist(u, t);
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		try {
			localStorage.removeItem(STORAGE_KEY);
		} catch (err) {
			console.warn("LoginContext: failed to remove login data", err);
		}
	};

	const isAuthenticated = Boolean(token || user);

	const value = {
		user,
		token,
		login,
		logout,
		isAuthenticated,
	};

	return (
		<LoginContext.Provider value={value}>{children}</LoginContext.Provider>
	);
};

// convenience hook
export const useLogin = () => {
	const ctx = useContext(LoginContext);
	if (ctx === null) {
		throw new Error("useLogin must be used within a LoginContextProvider");
	}
	return ctx;
};

export default LoginContextProvider;
