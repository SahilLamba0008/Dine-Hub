import React from "react";
import "./deliveryCollections.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";
import DeliveryItem from "./deliveryItem/deliveryItem";

const deliveryItems=[
    {
        id:1,
        title:"Chole Bhature",
        cover:"https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg"
    },
    {
        id:2,
        title:"Dosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
        id:3,
        title:"Noodles",
        cover:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
    },
    {
        id:4,
        title:"North Indian",
        cover:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    },
    {
        id:5,
        title:"Thali",
        cover:"https://img-global.cpcdn.com/recipes/ce884d070a8abf57/1200x630cq70/photo.jpg"
    },
    {
        id:6,
        title:"Pizza",
        cover:"https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id:7,
        title:"Burger",
        cover:"https://images.pexels.com/photos/6605397/pexels-photo-6605397.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    
    {
        id:8,
        title:"Cake",
        cover:"https://images.pexels.com/photos/6341564/pexels-photo-6341564.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id:9,
        title:"Rolls",
        cover:"https://images.pexels.com/photos/14639388/pexels-photo-14639388.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id:10,
        title:"Briyani",
        cover:"https://media.istockphoto.com/id/1303098890/photo/briyani-rice-with-chicken-and-some-veggie.jpg?b=1&s=612x612&w=0&k=20&c=cEHFT8XpIiIHrjo6FJmwQV72pUofFKYU_A4DqwehaYU="
    },
    {
        id:11,
        title:"Chicken",
        cover:"https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
]

var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const DeliveryCollections = () => {
    return(
        <div className="delivery-collection">
            <div className="max-width">
                <div className="collection-title">Eat what makes you happy</div>
                <Slider {...settings}>
                    {deliveryItems.map((item)=>{
                        return <DeliveryItem item={item} />
                    })}
                </Slider>
            </div>            
        </div>
    )
}

export default DeliveryCollections;