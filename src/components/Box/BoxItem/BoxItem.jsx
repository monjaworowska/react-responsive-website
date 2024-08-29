const BoxItem = ({ item, bg }) => {
  return (
    <div
      className={`${bg} w-[30rem] m-[2rem] flex items-center justify-center flex-col gap-[2.5rem] relative`}
    >
      <img
        src={item.img}
        alt="image"
        className="w-full h-[30rem] object-cover"
      />
      <a href={item.imgSource} className="absolute top-0 right-1">
        {item.imgSourceText}
      </a>
      <h4 className="text-[2rem] hover:tracking-wider">{item.title}</h4>
      <p className="text-[1.2rem] p-[2rem]">{item.desc}</p>
    </div>
  );
};

export default BoxItem;
