const Title = ({ children, className }) => {
  return (
    <h2 className={`${className} text-[3rem] lg:text-[4rem] font-bold`}>
      {children}
    </h2>
  );
};

export default Title;
