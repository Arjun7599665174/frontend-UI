import { ChevronDown, ChevronRight } from "lucide-react";

const SidebarItem = ({
  item,
  isOpen,
  activePage,
  setPage,
  openDropdown,
  setOpenDropdown,
}) => {
  const Icon = item.icon;
  const isActive = activePage === item.page;
  const hasChildren = item.children?.length > 0;
  const dropdownActive = openDropdown === item.title;

  const handleClick = () => {
    if (hasChildren) {
      setOpenDropdown(dropdownActive ? "" : item.title);
      return;
    }

    setPage(item.page);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full flex items-center rounded-xl transition-all duration-200
        ${isOpen ? "justify-between px-4 py-3" : "justify-center px-2 py-3"}
        ${
          isActive
            ? "bg-cyan-100 text-cyan-700"
            : "text-slate-500 hover:bg-cyan-50 hover:text-cyan-700"
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon size={20} />

          {isOpen && (
            <span className="text-sm font-medium whitespace-nowrap">
              {item.title}
            </span>
          )}
        </div>

        {isOpen && item.badge && (
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {item.badge}
          </span>
        )}

        {isOpen && hasChildren && (
          <span>
            {dropdownActive ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </span>
        )}
      </button>

      {isOpen && hasChildren && dropdownActive && (
        <div className="ml-8 mt-2 space-y-1">
          {item.children.map((child) => {
            const ChildIcon = child.icon;
            const childActive = activePage === child.page;

            return (
              <button
                key={child.page}
                onClick={() => setPage(child.page)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm
                ${
                  childActive
                    ? "bg-cyan-100 text-cyan-700"
                    : "text-slate-500 hover:bg-cyan-50 hover:text-cyan-700"
                }`}
              >
                <ChildIcon size={16} />
                {child.title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;