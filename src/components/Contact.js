import contactIllustration from "../assets/img/Contact-Us-Vector-Illustration-Part-02-1.jpg"

const Contact = () => {
    return (
      <div>
        <div className="menu" style={{"height": ""}}>
          <h1 className="heading" style={{"padding": "75px 0", "letterSpacing": "3px", "fontSize": "36px", }}>We would love to hear from you!</h1>
        </div>
        <img src={contactIllustration} alt="illustration" style={{"width": "50%", "padding" : "0", "marginLeft": "25%"}} />
      </div>
    );
  };
  
  export default Contact;

