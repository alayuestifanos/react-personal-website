import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page/home-page";
import AboutPage from "./pages/about-page/about-page";
import ContactPage from "./pages/contact-page/contact-page";
import ProjectPage from "./pages/projects-page/project-page";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import SideBar from "./components/sidebar/sidebar";

function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="*" element />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
