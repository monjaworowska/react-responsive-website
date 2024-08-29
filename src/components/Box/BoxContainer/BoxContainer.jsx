import BoxItem from "../BoxItem/BoxItem";

const BoxContainer = ({ data, bg }) => {
  return (
    <div className="flex items-stretch justify-center flex-wrap">
      {data.map((item) => (
        <BoxItem key={item.id} item={item} bg={bg} />
      ))}
    </div>
  );
};

export default BoxContainer;
