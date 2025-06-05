import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SqueezePage from "./pages/SqueezePage";
import ConfirmationPage from "./pages/ConfirmationPage";
import BrowseDesigns from "./pages/BrowseDesigns";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Scroll to the top of the page when the app loads or route changes within BrowserRouter context
    // For a single page app without explicit router-level scroll handling, this ensures top on initial load.
    // If using React Router with scroll management, a more sophisticated approach might be needed for route changes.
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/claim-free-website" element={<SqueezePage />} />
            <Route path="/thank-you" element={<ConfirmationPage />} />
            <Route path="/browse-designs" element={<BrowseDesigns />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
