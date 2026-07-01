import Input from "./Input";
import Button from "./Button";

const Form = ({
  title,
  subtitle,
  fields = [],
  onSubmit,
  onCancel,
  buttonText = "Save",
  loading = false,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 md:p-6">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
          )}
        </div>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-slate-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        )}
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.full ? "md:col-span-2 xl:col-span-3" : ""}
          >
            {field.type === "select" ? (
              <div>
                {field.label && (
                  <label className="block mb-1 text-sm font-medium text-slate-700">
                    {field.label}
                  </label>
                )}

                <select
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  required={field.required}
                  className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500 ${
                    field.error ? "border-red-400" : "border-slate-300"
                  }`}
                >
                  <option value="">{field.placeholder || "Select option"}</option>

                  {(field.options || []).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                {field.error && (
                  <p className="text-xs text-red-500 mt-1">{field.error}</p>
                )}
              </div>
            ) : field.type === "textarea" ? (
              <div>
                {field.label && (
                  <label className="block mb-1 text-sm font-medium text-slate-700">
                    {field.label}
                  </label>
                )}

                <textarea
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={4}
                  className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500 resize-none ${
                    field.error ? "border-red-400" : "border-slate-300"
                  }`}
                />

                {field.error && (
                  <p className="text-xs text-red-500 mt-1">{field.error}</p>
                )}
              </div>
            ) : (
              <Input
                label={field.label}
                type={field.type || "text"}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                placeholder={field.placeholder}
                error={field.error}
                required={field.required}
              />
            )}
          </div>
        ))}

        <div className="md:col-span-2 xl:col-span-3 flex flex-col sm:flex-row justify-end gap-3 mt-2">
          {onCancel && (
            <Button type="button" variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
          )}

          <Button type="submit" loading={loading}>
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;