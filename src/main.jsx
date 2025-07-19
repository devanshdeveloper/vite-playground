import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes";
import Providers from "./shared/components/providers";
import ProgressLayout from "./shared/components/layout/ProgressLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
      {/* <ProgressLayout /> */}
        <Suspense fallback={<ProgressLayout />}>
          <AppRoutes />
        </Suspense>
      </Providers>
    </BrowserRouter>
  </StrictMode>
);
