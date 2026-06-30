import {
  Bell,
  Moon,
  Search,
  ChevronDown,
} from "lucide-react";

const Header = ({ title }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          {title}
        </h1>

        <p className="text-sm text-slate-500">
          In Web 
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <button className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
          <Search size={20} />
        </button>

        {/* Dark Mode */}
        <button className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
          <Moon size={20} />
        </button>

        {/* Notification */}
        <div className="relative">
          <button className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
            <Bell size={20} />
          </button>

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
            
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-11 h-11 rounded-xl bg-slate-800 text-white flex items-center justify-center font-semibold">
            AS
          </div>

          <div className="hidden md:block">
            <h4 className="text-sm font-semibold text-slate-800">
              Arjun
            </h4>

            <p className="text-xs text-slate-500">
              Owner
            </p>
          </div>

          <ChevronDown size={18} className="text-slate-500" />

        </div>

      </div>

    </header>
  );
};

export default Header;