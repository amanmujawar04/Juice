import React, { useState } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Partner from "./components/Partner";
import FeaturedWork from "./components/FeaturedWork";
import Capablity from "./components/Capablity";
import BlogGrid from "./components/BlogGrid";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div style={{ display: loading ? "none" : "block" }}>
        <Header />
        <MainContent />
        <Partner />
        <FeaturedWork />
        <Capablity />
        <BlogGrid />
        <Footer />
      </div>
    </>
  );
}

export default App;