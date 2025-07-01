import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/poppins"; // defaults to 400
import "@fontsource/poppins/600.css"; // optional bold weight
import "@fontsource/poppins/700.css"; // optional extra bold

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
