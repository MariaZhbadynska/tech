import React from "react";
import ProductTabs from "../../Components/ProductsList/ProductTabs";
import Footer from "../../Components/footer/footer";
import Nav from "../../Components/Nav/Nav";
import HomeTopContent from "../../Components/homeTopContent/homeTopContent";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <HomeTopContent />
      <ProductTabs />
      <Footer />
    </div>
  );
}
