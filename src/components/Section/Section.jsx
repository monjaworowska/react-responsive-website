const Section = ({ id, className = "", children, bg }) => {
  return (
    <section
      id={id}
      className={`${className} 
      px-[9%]
      flex
      flex-col
      items-center
      justify-center 
      lg:min-h-screen
      pt-[10rem]
      pb-[2rem]`}
      style={{
        backgroundImage: bg,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </section>
  );
};

export default Section;
