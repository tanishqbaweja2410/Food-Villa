// const heading = React.createElement("h1", {}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Nesting => we will try to implement this
// <div>
//     <h1>Akshay Saini</h1>
//     <div>
//         <h2>Teacher</h2>
//         <div>
//             <img src="" alt="">
//             <p></p>
//         </div>
//     </div>
// </div>
const name = React.createElement("h1", {id: "name"}, "Akshay Saini");
const designation = React.createElement("h2", {id: "teacher"}, "Teacher");
const profilePic = React.createElement("img", {src: "https://yt3.ggpht.com/ytc/AMLnZu-cSoO0e2Shro4sYkaKYCumlgllLCTYYNf7bk7G_g=s900-c-k-c0x00ffffff-no-rj"}, null);
const work = React.createElement("p", {id: "work"}, "Creator of Namaste JS");
const about = React.createElement("div", {id: "about"}, [profilePic, work]);
const info = React.createElement("div", {id: "info"}, [designation, about]);
const container = React.createElement("div", {id: "container"}, [name, info]);
root.render(container);

