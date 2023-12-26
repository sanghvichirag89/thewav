// //! This is the data to fill the testimonials section....Any change made here will directly reflect in the testimonials sections of the
//! different pages....

// Images for the testimonial section is here....
import myCaptainCustomer from "../../images/customers/1653827231157.jpeg";
import rengeCustomer from "../../images/customers/renge.jpeg";
import seekhoCustomer from "../../images/customers/seekho.jpeg";
import snaptrudeCustomer from "../../images/customers/snaptrude.gif";
import UnacademyCustomer from "../../images/Testimonials/customer.png";

//* LOGOS :::::
import Cilver from "../../images/Testimonials/Logos/cilver.svg";
import Endless from "../../images/Testimonials/Logos/endless.svg";
import IronWood from "../../images/Testimonials/Logos/ironwood.svg";
import MyCaptain from "../../images/Testimonials/Logos/mycaptain.svg";
import SnapTrude from "../../images/Testimonials/Logos/snaptrude.svg";
import Suspire from "../../images/Testimonials/Logos/suspire.svg";
import UnboxingArt from "../../images/Testimonials/Logos/unboxingart.svg";
import Renge from "../../images/Hero/Logos/Dark/Logo2.svg";
import Seekho from "../../images/Hero/Logos/Dark/Logo9.svg";

const testimonials = [
  {
    id: 1,
    name: "MyCaptain",
    logo: MyCaptain,
    percentage1: "5-7x",
    text1: "ROAS",
    percentage2: "2x",
    text2: "Higher CTR",
    percentage3: "68%",
    text3: "Reduction in CAC",
    percentagesWidth: 350,
    paragraph:
      "We had a great experience working with Siddhant and his team at TheWav, they are quick to response, take ownership and bring some great ideas and growth hacks to the table. They were able to bring better results than most big agencies, we explored. I would highly recommend TheWav for Performance Marketing for early and growth stage start-ups.",
    customerImage: myCaptainCustomer,
    customerName: "Ruhan Naqash",
    customerAbout: "Co-founder at MyCaptain, Forbes India 30 Under 30",
  },
  {
    id: 2,
    name: "Renge",
    logo: Renge,
    percentage1: "100%",
    text1: "Increase in Growth",
    percentage2: "63%",
    text2: "Increase in CTR",
    percentage3: "40%",
    text3: "Reduction in CAC",
    percentagesWidth: 350,
    paragraph:
      "It's been a pleasure working with Siddhant and his team! The Wav takes a keen interest in understanding your business, and helping you grow. They have great knowledge, are very accessible and it's evident to see how passionate they are about their work. Wish you all the best Team Wav! ",
    customerImage: rengeCustomer,
    customerName: "Sheena Uppal",
    customerAbout: "Founder and Creative Director, Renge",
  },
  {
    id: 3,
    name: "Seekho",
    logo: Seekho,
    percentage1: "146%",
    text1: "Increase in Growth",
    percentage2: "22%",
    text2: "Increase in CTR",
    percentage3: "55%",
    text3: "Reduction in CAC",
    percentagesWidth: 350,
    paragraph:
      "I am extremely happy with the work done by TheWav for Seekho. As the marketing head, I was very impressed with their ability to experiment with different strategies to help us reach our goals.The team was very responsive and always available to answer any questions or concerns I had. They were able to adapt to our changing needs and provided valuable insights that helped us improve our marketing efforts.",
    customerImage: seekhoCustomer,
    customerName: "Saurav Fialok",
    customerAbout: "Marketing Lead, Seekho (Backed by Sequoia)",
  },
  {
    id: 4,
    name: "SnapTrude",
    logo: SnapTrude,
    percentage1: "5x",
    text1: "Increase in Growth",
    percentage2: "52%",
    text2: "Increase in CTR",
    percentage3: "110%",
    text3: "Reduction in CAC",
    percentagesWidth: 350,
    paragraph:
      "Siddhant has excellent knowledge of paid platforms and flawless campaign execution skills. His agency was quite prompt and responsive in helping us  over achieve lead- gen targets from Facebook ad campaign. I would love to work with him, again. ",
    customerImage: snaptrudeCustomer,
    customerName: "Smita Srivastava",
    customerAbout: "Ex- Head of Marketing, Snaptrude (Backed by Accel)",
  },
];

export default testimonials;
