import React, { useState } from "react";
import Header from "../../components/common/header/header";
import TabOptions from "../../components/common/tabOptions/tabOptions";
import Footer from "../../components/common/footer/footer";
import Delivery from "../../components/Delivery/Delivery";
import DiningOut from "../../components/diningOut/diningOut";
import NightLife from "../../components/NightLife/nightLife";
import HeroSection from "../../components/common/HeroSection/HeroSection";

const HomePage = () => {

    const [activeTab,setActiveTab] = useState("Delivery");

    return(
        <div>
            <HeroSection />
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {/* This decides which screen to render  */}
            {getCorrectScreen(activeTab)}    
            <Footer />
        </div>
    )
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />;
        case "Dining Out":
            return <DiningOut />;
        case "Night Life":
            return <NightLife />;
        default :
            return <Delivery />;
    }
}
export default HomePage;