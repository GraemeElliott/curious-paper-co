import React from "react";
import Header from "../../components/partials/header/header";
import Footer from "../../components/partials/footer/footer";
import "./products.scss";
import ProductsDirectory from "../../components/products-directory/products-directory";

const ProductsPage = () => {
  return (
    <div>
        <Header />
        <ProductsDirectory />
        <Footer />
    </div>
  );
};

export default ProductsPage;