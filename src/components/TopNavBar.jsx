import { useState } from "react";
import { Bell, ChevronDown, Search, Menu } from "lucide-react";

function TopNavBar({ toggleSidebar }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      <button
        className="md:hidden"
        onClick={toggleSidebar}
        title="Toggle Sidebar"
      >
        <Menu className="text-green-600 w-6 h-6" />
      </button>
      <div className="relative w-96">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-green-600" />
        <input
          type="text"
          placeholder="Search Products..."
          className="border rounded-lg pl-10 pr-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-200"
        />
      </div>

      <div className="flex items-center gap-6 relative">
        <div className="relative">
          <Bell className="tex-gray-400 w-6 h-6" />
        </div>

        <div className="w-8 h-8 rounded border-2 border-green-600 bg-white flex items-center justify-center">
          <span className="text-lg font-bold">👩‍💻</span>
        </div>
        <div
          className="relative cursor-pointer select-none"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="text-xl font-bold flex items-center gap-1">
            <ChevronDown className="w-4 h-4" />
            Bill
          </span>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 min-w-max bg-white border rounded shadow-lg z-10">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default TopNavBar;
