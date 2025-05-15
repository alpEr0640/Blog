import { RouterErrorBoundary } from "@/components/components/layout/error-boundary";
import { createBrowserRouter } from "react-router";
import { paths } from "./paths";
import { Anasayfa } from "@/pages/anasayfa";
import NotFoundPage from "@/pages/error/not-found";

export const router = createBrowserRouter([
  {
    ErrorBoundary: RouterErrorBoundary,
    children: [
      { path: paths.root.path, element: <Anasayfa /> },
      { children: [{ path: "*", element: <NotFoundPage /> }] },
    ],
  },
]);
