const Input = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border px-3 py-2 rounded-lg outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Input;