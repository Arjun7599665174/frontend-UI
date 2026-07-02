import Card from "./Card";
import DetailItem from "./DetailItem";

const DetailSection = ({ title, items }) => {
  return (
    <Card>
      <h3 className="text-sm font-bold text-slate-500 mb-4">
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <DetailItem
            key={item.label}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>
    </Card>
  );
};

export default DetailSection;