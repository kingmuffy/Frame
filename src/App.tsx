import React, {useState, useEffect} from "react";
import {motion, useScroll, useMotionValueEvent} from "framer-motion";

import Footer from "./components/Footer";
import Photos from "./components/Photos";
import Faq from "./components/Faq";
import PageHeader from "./components/PageHeader";
import Banner from "./components/banner";
import "./App.css";

function App() {
  return (
    <div className="max-w-[1440px]">
      <PageHeader />
      <Banner />
      <Photos />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
