import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import AppRoutes from "./AppRoutes";
import Auth0ProviderNavigation from "./auth/Auth0Provider";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderNavigation>
        <AppRoutes />
      </Auth0ProviderNavigation>
    </Router>
  </StrictMode>
);
