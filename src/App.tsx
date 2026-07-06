import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";
import "@/lib/i18n";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" storageKey="portfolio-theme">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
