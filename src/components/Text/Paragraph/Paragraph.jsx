const Paragraph = ({ children, className }) => {
  return <p className={`${className} text-[2rem] indent-[2rem]`}>{children}</p>;
};

export default Paragraph;
