import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FoodContextProvider } from "./Context/FoodContextProvider";
import { LoginContextProvider } from "./Context/LoginContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <FoodContextProvider>
          <App />
        </FoodContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  </StrictMode>
);
