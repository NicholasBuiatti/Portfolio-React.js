import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import Footer from "./components/Footer";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col relative min-h-screen">
          <motion.div
            className="bg-[#111] text-white"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
          </motion.div>
          <div className="flex-1 bg-gray-100">
            <AppRouter />
          </div>
          <div className="bg-[#F5F5F5] items-end">
            <Footer />
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
