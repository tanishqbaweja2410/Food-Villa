// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>
//         This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
//       </p>
//     </div>
//   );
// };

// export default About;

import Illustration1 from '../assets/img/Order food-pana.svg';
import Illustration2 from '../assets/img/Take Away-pana.svg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>We are a food delivery company that connects customers with their favorite restaurants. We strive to provide a seamless and convenient experience for both customers and restaurants.</p>
      <img src={Illustration1} alt="illustration of a person ordering food" className="illustration"/>
      <p>Our team is dedicated to ensuring that every order is delivered on time and to the satisfaction of our customers.</p>
      <img src={Illustration2} alt="illustration of a delivery person" className="illustration"/>
    </div>
  );
}

export default AboutUs;

