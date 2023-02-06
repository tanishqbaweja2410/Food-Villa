// const Footer = () => {
//     return <h4>Footer</h4>;
//   };

//   export default Footer;
import Logo from "../assets/img/Yellow_Illustration_Catering_Logo__1_-removebg-preview.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Logo} className="footer-logo" alt="logo" />
      <div className="footer-info">
        {/* <h3 className="footer-info-name">Made with ❤️ by Tanishq</h3> */}
        <p className="footer-info-copyright">© 2023 Food Villa</p>
      </div>
      <div className="footer-social-icons">
        <a href="#" className="footer-social-icon">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#" className="footer-social-icon">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#" className="footer-social-icon">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
