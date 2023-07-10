import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// ------------------ Composing Components ------------------------------->

const About = lazy(() => import("./components/About"));
const Help = lazy(() => import("./components/Help"));

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <LoginForm />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Help />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
  },
]);

// ------------------ Rendering ------------------------------->
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
