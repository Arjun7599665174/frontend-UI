import Card from "./Card";
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
  columns = "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  children,
}) => {
  return (
    <Card className="rounded-2xl p-5 md:p-6">
      {(title || subtitle || onCancel) && (
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            {title && (
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="text-sm text-slate-500 mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="text-2xl text-slate-500 hover:text-red-500 transition"
            >
              ✕
            </button>
          )}
        </div>
      )}

      <form onSubmit={onSubmit}>
        <div className={`grid ${columns} gap-4`}>
          {fields.map((field) => (
            <div
              key={field.name}
              className={field.full ? "md:col-span-2 xl:col-span-3" : ""}
            >
              {field.type === "select" ? (
                <>
                  {field.label && (
                    <label className="block mb-1 text-sm font-medium text-slate-700">
                      {field.label}
                    </label>
                  )}

                  <select
                    {...field}
                    className={`w-full h-11 border rounded-lg px-3 outline-none focus:ring-2 focus:ring-sky-500 ${
                      field.error
                        ? "border-red-400"
                        : "border-slate-300"
                    }`}
                  >
                    <option value="">
                      {field.placeholder || "Select"}
                    </option>

                    {(field.options || []).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  {field.error && (
                    <p className="text-xs text-red-500 mt-1">
                      {field.error}
                    </p>
                  )}
                </>
              ) : field.type === "textarea" ? (
                <>
                  {field.label && (
                    <label className="block mb-1 text-sm font-medium text-slate-700">
                      {field.label}
                    </label>
                  )}

                  <textarea
                    {...field}
                    rows={4}
                    className={`w-full border rounded-lg px-3 py-2 resize-none outline-none focus:ring-2 focus:ring-sky-500 ${
                      field.error
                        ? "border-red-400"
                        : "border-slate-300"
                    }`}
                  />

                  {field.error && (
                    <p className="text-xs text-red-500 mt-1">
                      {field.error}
                    </p>
                  )}
                </>
              ) : (
                <Input
                  {...field}
                  type={field.type || "text"}
                  error={field.error}
                  wrapperClassName="mb-0"
                />
              )}
            </div>
          ))}

          {children}
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          {onCancel && (
            <Button
              type="button"
              variant="secondary"
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}

          <Button
            type="submit"
            loading={loading}
          >
            {buttonText}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;