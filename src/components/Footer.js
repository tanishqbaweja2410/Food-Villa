import Logo from "../assets/img/Yellow_Illustration_Catering_Logo__1_-removebg-preview.png";

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#f5f5f5]">
      <img src={Logo} className="w-24 h-24 object-contain mr-4" alt="logo" />
      <div className="flex items-start">
        {/* <h3 className="footer-info-name">Made with ❤️ by Tanishq</h3> */}
        <p className="text-base mb-2 font-semibold">© 2023 Food Villa</p>
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
