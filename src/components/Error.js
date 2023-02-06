import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
        <div className="errorContainer">
            <div className="errorImg"></div>
            <h2>Page not found</h2>
            <p>Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start afresh.</p>
            <button><Link to={"/"} style={{textDecorationColor: "white"}}>GO HOME</Link></button>
        </div>
        </>
    );
}

export default Error;