import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Courses />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
