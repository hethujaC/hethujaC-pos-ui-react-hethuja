import { useState } from "react";
import { FaHome, FaSignOutAlt, FaQuestionCircle } from "react-icons/fa";
import {
  Boxes,
  PackageSearch,
  UserCog,
  Warehouse,
  ClipboardMinus,
  Users,
  Package,
  Settings,
} from "lucide-react";

const menu = [
  { key: "Sales", icon: PackageSearch },
  { key: "Products", icon: Boxes },
  { key: "Utilities", icon: UserCog },
  { key: "Stocks", icon: Warehouse },
  { key: "Reports", icon: ClipboardMinus },
  { key: "Users", icon: Users },
  { key: "Suppliers", icon: Package },
  { key: "Settings", icon: Settings },
];

function Sidebar() {
  const [activeItem, setActiveItem] = useState("");

  return (
    <aside className=" bg-white h-full border-r flex flex-col md:relative md:translate-x-0 md:w-56 w-64">
      <div className="text-2xl font-bold p-6 text-center w-full">
        POS
        <br />
        NAME
      </div>
      <div
        className="flex items-center gap-3 px-6 py-3 cursor-pointer border-b
        bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-full w-40 ml-5"
      >
        <span className="text-xl">
          <FaHome />
        </span>
        <span>Home</span>
      </div>
      <nav className="flex-1">
        {menu.map(({ key, icon: Icon }) => {
          const isActive = activeItem === key;

          return (
            <div
              key={key}
              onClick={() => setActiveItem(key)}
              className={`flex items-center gap-3 px-6 py-3 cursor-pointer border-b-2  w-40 ml-5
                ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <span className="text-xl">
                <Icon />
              </span>
              <span>{key}</span>
            </div>
          );
        })}
      </nav>
      <div className="p-6 mt-auto">
        <div className="flex items-center gap-3 text-red-600 font-bold cursor-pointer">
          <FaSignOutAlt /> Exit
        </div>
        <div className="flex items-center gap-3 text-gray-400 mt-3 cursor-pointer">
          <FaQuestionCircle /> Help
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
