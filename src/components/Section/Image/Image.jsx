const Image = ({ src, className = "", imageSource, imageSourceText }) => {
  return (
    <div className={`${className} flex-[1_1_40rem] relative`}>
      <img src={src} className="w-full" alt="" />
      <a href={imageSource} className="absolute bottom-0 right-0">
        {imageSourceText}
      </a>
    </div>
  );
};

export default Image;
