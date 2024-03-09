
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Featured from "./components/featured/Featured";
import Ads from "./components/ads/Ads";
import Products from "./components/products/Products";
import Testimonial from "./components/testimonial/Testimonial";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Ads />
      {/* <Features /> */}
      <Products />
      <Testimonial />
      <Faq />
    </>
  );
}
