const DetailItem = ({
  label,
  value,
  className = "",
  labelClassName = "",
  valueClassName = "",
}) => {
  return (
    <div className={className}>
      <p
        className={`text-xs font-semibold uppercase tracking-wide text-slate-400 ${labelClassName}`}
      >
        {label}
      </p>

      <p
        className={`mt-1 text-sm font-medium text-slate-800 break-words ${valueClassName}`}
      >
        {value || "Not Available"}
      </p>
    </div>
  );
};

export default DetailItem;