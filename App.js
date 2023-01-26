import React from "react";
import ReactDOM from "react-dom/client";

// <--------------- nested structure using React.createElement() ------------------------->
// const title = React.createElement(
//   "div",
//   {
//     class: "title",
//   },
//   [
//     React.createElement("h1", { id: "h1", key: "Large" }, "I'm a h1 tag"),
//     React.createElement("h2", { id: "h2", key: "Medium" }, "I'm a h2 tag"),
//     React.createElement("h3", { id: "h3", key: "Small" }, "I'm a h3 tag"),
//   ]
// );

// <--------------- same structure using JSX ------------------------->
// const title = (
//   <div className="title">
//     <h1 id="h1" key="Large">
//       I'm a h1 tag
//     </h1>
//     <h2 id="h2" key="Medium">
//       I'm a h2 tag
//     </h2>
//     <h3 id="h3" key="Small">
//       I'm a h3 tag
//     </h3>
//   </div>
// );

// <--------------- functional component of the same structure ------------------------->
// const Title = () => (
//   <div className="title">
//     <h1 id="h1" key="Large">
//       I'm a h1 tag
//     </h1>
//     <h2 id="h2" key="Medium">
//       I'm a h2 tag
//     </h2>
//     <h3 id="h3" key="Small">
//       I'm a h3 tag
//     </h3>
//   </div>
// );

// <--------------- Composition Of Components ------------------------->
// const TeacherInfo = () => {
//   return (
//     <div>
//       <h1>Akshay Saini</h1>
//       <TeacherImg>
//       </TeacherImg>
//     </div>
//   );
// };

// <--------------- Header ------------------------->
const Header = () => {
  return (
    <header className="container">
      <Logo />
      <SearchBar />
      <UserIcon />
    </header>
  );
};

const Logo = () => {
  return (
    <img
      className="logo"
      src="https://namastedev.com/namaste-react-live/assets/img/small-logo.png"
    />
  );
};

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search" />
      <button type="submit">Search</button>
    </form>
  );
};

const UserIcon = () => {
  return <img className="user-icon" src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png" alt="user" />;
};

// <--------------- Rendering ------------------------->
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
