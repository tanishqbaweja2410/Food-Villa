import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen font-montser">
        <div
          className="h-[260px] w-full bg-no-repeat bg-contain bg-[50%]"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87')",
          }}
        ></div>
        <h2 className="text-3xl font-semibold text-gray-700 my-5">
          Page not found
        </h2>
        <p className="text-sm font-proximanova text-gray-500 leading-6 text-center px-4 w-11/12">
          Uh-oh! Looks like the page you are trying to access, doesn't exist.
          Please start afresh.
        </p>
        <Link to={"/"}>
          <button className="w-full py-3 px-6 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 mt-5">
            GO HOME
          </button>
        </Link>
      </div>
    </>
  );
};

export default Error;