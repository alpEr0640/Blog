import { RouterProvider } from "react-router";
import { Header } from "./components/components/layout/header";
import { Footer } from "./components/components/layout/footer";
import { router } from "./routes/router";

export function AppLayout() {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <RouterProvider router={router} />
        </main>
      <Footer />
      </div>
  );
}
