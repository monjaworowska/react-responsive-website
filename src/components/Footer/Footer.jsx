import Title from "../Text/Title/Title";
import Paragraph from "../Text/Paragraph/Paragraph";

const Footer = () => {
  return (
    <footer className="px-[9%] py-[2rem] gap-[2rem] flex flex-wrap">
      <div className="flex-[1_1_40rem]">
        <Title>Contact</Title>
        <Paragraph>Address: Hometown 123/1b, SomeCountry</Paragraph>
        <Paragraph>Phone: +(123)19245903</Paragraph>
        <Paragraph>E-mail: email@domain.com</Paragraph>
      </div>
      <div className="flex-[1_1_40rem]">
        <Title>Info</Title>
        <Paragraph>
          Nullam at tellus vitae lectus semper euismod. Mauris a metus eu arcu
          fermentum aliquam. Pellentesque sed ligula ut felis feugiat
          condimentum. Proin eu ultricies nisi.
        </Paragraph>
        <Paragraph>
          Mauris ut ipsum pellentesque, fringilla nisl quis, commodo tellus.
          Duis finibus odio at elementum vulputate. Phasellus gravida iaculis
          dolor a pretium.
        </Paragraph>
      </div>
      <div className="flex-[1_1_40rem]">
        <h2 className="text-[2rem]">
          <span className="font-bold">&copy;</span> <span>Mon</span>
          <span className="font-bold">&</span>
          <span>Jaw</span> <span className="font-bold">2024</span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
