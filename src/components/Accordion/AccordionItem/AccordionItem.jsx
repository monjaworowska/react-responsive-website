import { FiArrowDownCircle } from "react-icons/fi";

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="text-[2rem] mt-[1rem]" onClick={onClick}>
      <p className="py-[1rem] px-[1rem] bg-slate-700 relative w-full">
        {item.title}
        {isOpen ? null : (
          <FiArrowDownCircle className="absolute top-[25%] right-2" />
        )}
      </p>
      <p
        className={`${
          isOpen ? "block" : "hidden"
        } py-[1rem] px-[1rem] bg-pink-800 w-full`}
      >
        {item.desc}
      </p>
    </div>
  );
};

export default AccordionItem;
