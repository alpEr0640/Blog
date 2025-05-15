import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { Header } from "./components/components/layout/header";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </StrictMode>
);
