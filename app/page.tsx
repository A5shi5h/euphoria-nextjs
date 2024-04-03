"use client";

import { ImagesSliderDemo } from "./home";
import {Navbar} from "./navbar";
import { LayoutGridDemo } from "./gallery";
import About from "./about";
import Feedback from "./feedback";
import { ThreeDCardDemo } from "./owner";
import Footer from "./footer";

export default function Page() {
  return (
    <>
    <section>
      <Navbar/>
    </section>
     <main>
       <ImagesSliderDemo/>
     </main>
     <section>
      <LayoutGridDemo/>
     </section>
     <section>
      <About/>
     </section>
     <section>
      <Feedback/>
     </section>
     <section>
      <ThreeDCardDemo/>
     </section>
     <footer>
      <Footer/>
     </footer>
    </>
  );
}
