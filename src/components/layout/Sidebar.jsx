import { useState } from "react";
import { Menu, Waves } from "lucide-react";
import { sidebarData } from "../../data/sidebarData";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ page, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  return (
    <aside
      className={`min-h-screen bg-white border-r border-slate-200 shadow-sm transition-all duration-300
      ${isOpen ? "w-64" : "w-20"}`}
    >
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center text-white">
            <Waves size={24} />
          </div>

          {isOpen && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 leading-tight">
                In Web Techn...
              </h2>
              <p className="text-xs text-slate-500">Payroll System</p>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-slate-100 text-slate-600"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="px-3 mt-4 space-y-2">
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

      <div className="absolute bottom-5 left-0 w-full px-3">
        <div
          className={`flex items-center rounded-xl bg-cyan-50 text-slate-700
          ${isOpen ? "gap-3 px-4 py-3" : "justify-center py-3"}`}
        >
          <div className="h-9 w-9 rounded-full bg-cyan-200 flex items-center justify-center font-semibold">
            AS
          </div>

          {isOpen && (
            <div>
              <h4 className="text-sm font-semibold">Aarav Sharma</h4>
              <p className="text-xs text-slate-500">Owner</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;