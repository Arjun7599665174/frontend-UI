const Card = ({
  title,
  value,
  children,
  className = "",
  titleClassName = "",
  valueClassName = "",
}) => {
  return (
    <div
      className={`bg-white p-5 rounded-xl shadow border border-slate-100 ${className}`}
    >
      {children ? (
        children
      ) : (
        <>
          <h3 className={`text-gray-600 ${titleClassName}`}>
            {title}
          </h3>

          <p className={`text-2xl font-bold mt-2 ${valueClassName}`}>
            {value}
          </p>
        </>
      )}
    </div>
  );
};

export default Card;