const Content = ({ id, className = "", children }) => {
  return (
    <div id={id} className={`${className} flex-[1_1_40rem]`}>
      {children}
    </div>
  );
};
export default Content;
