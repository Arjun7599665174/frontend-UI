import { useState } from "react";

const Header = ({ title, setPage }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    setShowMenu(false);
    setPage("login");
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-4 md:px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">
          {title}
        </h1>
        <p className="text-sm text-slate-500">In Web</p>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-semibold">
            AS
          </div>

          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-slate-800">Arjun</p>
            <p className="text-xs text-slate-500">Owner</p>
          </div>

          <span className="text-slate-500">⌄</span>
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-3 w-36 bg-white border border-slate-200 rounded-xl shadow-lg z-50">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-xl"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;