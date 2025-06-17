import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNavBar from "./components/TopNavbar";
import ProductsPage from "./pages/ProductsPage";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <TopNavBar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 overflow-y-auto">
          <ProductsPage />
        </main>
      </div>
    </div>
  );
}
export default App;
