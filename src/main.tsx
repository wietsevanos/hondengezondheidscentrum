import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HomePage } from "@/routes/index";
import { DienstenPage } from "@/routes/diensten";
import { VisiePage } from "@/routes/visie";
import { ReviewsPage } from "@/routes/reviews";
import { ContactPage } from "@/routes/contact";
import { NotFoundPage } from "@/routes/not-found";

const queryClient = new QueryClient();

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <RootLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/diensten" element={<DienstenPage />} />
              <Route path="/visie" element={<VisiePage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </RootLayout>
        </HashRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
