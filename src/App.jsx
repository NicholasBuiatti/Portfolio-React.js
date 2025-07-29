import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import Footer from "./components/Footer";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen" id="sfondoGlobale">
        <Router>
          <div className="bg-[#111] text-white">
            <Navbar />
          </div>
          <AppRouter />
          <div className="bg-[#F5F5F5]">
            <Footer />
          </div>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
