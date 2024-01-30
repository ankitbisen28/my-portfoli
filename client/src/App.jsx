import { Navbar } from "./Components/Navbar";
import { About } from "./Pages/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticlePage } from "./Pages/ArticlePage";
import { ArticleDetail } from "./Pages/ArticleDetail";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
