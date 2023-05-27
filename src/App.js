import NavBar from "./Components/Navbar";
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";

//Page
import HomePage from "./Pages/Home/HomePage.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";
import ProjectPage from "./Pages/Projects/ProjectPage.jsx";
import ResumePage from "./Pages/Resume/ResumePage.jsx";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
