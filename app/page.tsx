
import Hero from "./components/hero/Hero";
import Featured from "./components/featured/Featured";
import Ads from "./components/ads/Ads";
import Products from "./components/products/Products";
import Testimonial from "./components/testimonial/Testimonial";
import Faq from "./components/faq/Faq";
import ProductListSection from "./components/productListSection/ProductListSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Ads />
      {/* <Products /> */}
      <ProductListSection />
      <Testimonial />
      <Faq />
    </>
  );
}
