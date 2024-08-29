const Row = ({ id, className = "", children }) => {
  return (
    <div id={id} className={`${className} flex flex-wrap gap-8 items-center`}>
      {children}
    </div>
  );
};

export default Row;
