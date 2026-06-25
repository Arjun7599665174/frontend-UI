const Card = ({ title, value }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="text-gray-600">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default Card;