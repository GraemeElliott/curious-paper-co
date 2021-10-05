import React from "react";
import Header from '../../components/partials/header/header';
import Footer from "../../components/partials/footer/footer";

import Categories from "../../components/homepage/categories/categories";

const Index = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <Categories />
            <Footer />

            

        </div>
    );
};

export default Index;