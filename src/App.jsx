import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Row from "./components/Section/Row/Row";
import Content from "./components/Section/Content/Content";
import Image from "./components/Section/Image/Image";
import Title from "./components/Text/Title/Title";
import Paragraph from "./components/Text/Paragraph/Paragraph";
import heroImage from "./assets/img/img 1.svg";
import aboutImage from "./assets/img/img 2.svg";
import contactImage from "./assets/img/img 6.svg";
import BoxContainer from "./components/Box/BoxContainer/BoxContainer";
import { courses } from "./data/data";
import { plans } from "./data/data";
import Accordion from "./components/Accordion/Accordion";
import { faq } from "./data/data";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      {/** Header */}
      <Header />
      {/** Hero */}
      <Section id="#">
        <Row>
          <Content>
            <Title>Hero</Title>
            <Paragraph>
              Donec sollicitudin laoreet velit vel dapibus. In dignissim et
              libero et ultricies. Proin id viverra metus. Phasellus luctus
              justo sit amet nisl auctor, ac dapibus nunc molestie. Proin semper
              vulputate magna sit amet placerat. Sed in suscipit est. Mauris
              nunc urna, tincidunt sed odio nec, tempus condimentum enim.
            </Paragraph>
            <Paragraph>
              Morbi ac ipsum id libero dictum pretium at ut magna. Integer eu
              nunc ac tellus posuere dignissim. Nulla eu diam hendrerit, laoreet
              risus et, pulvinar est. Maecenas mattis nec elit et porta. Fusce
              euismod posuere ligula ut luctus. Suspendisse non laoreet lacus,
              sit amet dapibus diam. Fusce eleifend eros ac urna scelerisque
              pellentesque.
            </Paragraph>
          </Content>
          <Image
            src={heroImage}
            imageSource="https://storyset.com/education"
            imageSourceText="Education illustrations by Storyset"
          />
        </Row>
      </Section>
      {/** About */}
      <Section id="about">
        <Row>
          <Content>
            <Title>About</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              urna sapien, maximus non tortor sed, placerat viverra urna.
              Phasellus eget risus ac ex faucibus egestas. Donec a metus
              rhoncus, faucibus ex aliquam, scelerisque diam. Nullam at tellus
              vitae lectus semper euismod. Mauris a metus eu arcu fermentum
              aliquam. Pellentesque sed ligula ut felis feugiat condimentum.
              Proin eu ultricies nisi.
            </Paragraph>
            <Paragraph>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Quisque nec eleifend purus. Duis
              felis ex, feugiat eu tellus a, facilisis mattis diam. Mauris ut
              ipsum pellentesque, fringilla nisl quis, commodo tellus. Duis
              finibus odio at elementum vulputate. Phasellus gravida iaculis
              dolor a pretium.
            </Paragraph>
          </Content>
          <Image
            src={aboutImage}
            imageSource="https://storyset.com/education"
            imageSourceText="Education illustrations by Storyset"
          />
        </Row>
      </Section>
      {/** Courses */}
      <Section id="courses">
        <Title>Courses</Title>
        <BoxContainer data={courses} bg="bg-pink-600" />
      </Section>
      {/** Plans */}
      <Section id="plans">
        <Title>Plans</Title>
        <BoxContainer data={plans} bg="bg-rose-700" />
      </Section>
      {/** FAQ */}
      <Section id="faq">
        <Title>FAQ</Title>
        <Accordion data={faq} />
      </Section>
      {/** Contact */}
      <Section id="contact" bg="url(/react-responsive-website/bg/bg.png)">
        <form
          action=""
          className="w-11/12 md:w-3/5 mt-[2rem] text-center text-black relative"
        >
          <input
            type="text"
            placeholder="E-mail"
            className="block w-full my-[1.5rem] p-[2rem] border-0 border-b outline-none"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="block w-full my-[1.5rem] p-[2rem] border-0 border-b outline-none"
          ></textarea>
          <button className="text-white text-[2rem] py-[1rem] px-[2rem] bg-pink-800">
            Contact us
          </button>
          <a
            href="https://storyset.com/education"
            className="absolute top-0 right-0"
          >
            Education illustrations by Storyset
          </a>
        </form>
      </Section>
      <Footer></Footer>
    </div>
  );
};

export default App;
