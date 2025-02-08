// import React from "react";
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel";
// import Login from "./components/Login"; // Import your Login component

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Carousel/>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel/>
    </div>
  );
};

export default App;
