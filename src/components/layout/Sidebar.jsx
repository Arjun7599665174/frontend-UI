import { useState } from "react";
import { Menu } from "lucide-react";
import { sidebarData } from "../../data/sidebarData";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ page, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  return (
  <aside
  className={`sticky top-0 h-screen flex-shrink-0 bg-white border-r border-slate-200 shadow-sm transition-all duration-300
    ${isOpen ? "w-64" : "w-20"}`}

    >
      <div
        className={`px-4 py-5 flex items-center ${
          isOpen ? "justify-between" : "justify-center"
        }`}
      >
        {isOpen && (
          <span className="text-sm font-semibold text-slate-700">
            Menu
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="px-3 mt-3 space-y-2">
        {sidebarData.map((item) => (
          <SidebarItem
            key={item.page}
            item={item}
            isOpen={isOpen}
            activePage={page}
            setPage={setPage}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;