import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";

const topBrandList = [
    {
        id: 1,
        time: "35min",
        title: "McDonald's",
        cover: 
            "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp"
    },
    {
        id: 2,
        time: "30min",
        title: "Domino's Pizza",
        cover: 
            "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp"
    },
    {
        id: 3,
        time: "10min",
        title: "Burger King",
        cover: 
            "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp"
    },
    {
        id: 4,
        time: "47min",
        title: "KFC",
        cover: 
            "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp"
    },
    {
        id: 5,
        time: "12min",
        title: "Subway",
        cover: 
            "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp"
    },
    {
        id: 6,
        time: "25min",
        title: "Haldiram's",
        cover: 
            "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp"
    },
    {
        id: 7,
        time: "32min",
        title: "Bikkgane Biryani",
        cover: 
            "https://b.zmtcdn.com/data/brand_creatives/logos/4bf3cd23b591c0292aba5fe476fadbef_1625160389.png?output-format=webp"
    },

];

var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};

const TopBrands = () => {
    return(
        <div className="top-brands max-width">
            <div className="collection-title">Top brands for you</div>
            <Slider {...settings}>
                {topBrandList.map((brand)=>{
                    return <div>
                        <div className="top-brands-cover">
                            <img src={brand.cover} className="top-brands-image" alt={brand.title}/>
                        <div className="top-brands-title absolute-center">{brand.title}</div>
                        <div className="delivery-time absolute-center">{brand.time}</div>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
} 

export default TopBrands;