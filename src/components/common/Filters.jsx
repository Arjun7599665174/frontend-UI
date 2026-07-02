import Input from "./Input";

const Filters = ({
  search,
  setSearch,
  searchPlaceholder = "Search...",
  filters,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 mb-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Search
          </label>

          <Input
            name="search"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Dropdowns */}
        {filters.map((filter) => (
          <div key={filter.name}>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              {filter.label}
            </label>

            <select
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
              className="w-full h-12 border border-slate-300 rounded-lg px-4 bg-white outline-none focus:ring-2 focus:ring-sky-500"
            >
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;