import React from "react";
import Header from '../../components/partials/header/header';
import Footer from "../../components/partials/footer/footer";

import HomepageMainContent from "../../components/homepage/main-content/main-content";

const Index = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <HomepageMainContent />
            <Footer />

            

        </div>
    );
};

export default Index;