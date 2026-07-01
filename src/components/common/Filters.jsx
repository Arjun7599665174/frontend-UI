import Input from "./Input";

const Filters = ({ search, setSearch, filters }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 grid gap-3 md:grid-cols-3">
      <Input
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filters.map((filter) => (
        <select
          key={filter.name}
          value={filter.value}
          onChange={(e) => filter.onChange(e.target.value)}
          className=" w-full h-12 border border-slate-300 rounded-lg px-4 outline-none"
        >
          <option value="" disabled>{filter.label}</option>
          {filter.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default Filters;