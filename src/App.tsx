import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutUS from "@/pages/AboutUS";
import Service from "@/pages/Service";
import Careers from "@/pages/Career";
import ContactUS from "@/pages/ContactUS";
import TeamsandConditions from "./components/TeamsandConditions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/About" component={AboutUS} />
      <Route path="/Services" component={Service} />
      <Route path="/Career" component={Careers} />
      <Route path="/Contact" component={ContactUS} />
      <Route path="/Teams" component={TeamsandConditions} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
