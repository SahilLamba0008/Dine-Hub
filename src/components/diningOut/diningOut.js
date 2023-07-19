import React from "react";
import './diningOut.css';
import Collection from "../common/collection/collection";
import Filters from "../common/filters/filters";
import { dineOut } from "../../data/dineOut";
import ExploreSection from "../common/exploreSection/exploreSection";

const collectionList = [
    {
        id:1,
        title:"10 Unique Dining Experiences",
        cover:"https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
        place:"10 Places",
    },
    {
        id:2,
        title:"13 Best Koren Restaurants",
        cover:"https://b.zmtcdn.com/data/collections/57f7f839a8594abf4764d47d67151f68_1687954533.png",
        place:"13 Places",
    },
    {
        id:3,
        title:"21 Best Insta-worthy Places",
        cover:"https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png",
        place:"10 Places",
    },
    {
        id:4,
        title:"10 Celeb Loved Places",
        cover:"https://b.zmtcdn.com/data/collections/8941ea1049484a5864e7a2aaf7e60f61_1688041977.png",
        place:"10 Places",
    },
    {
        id:5,
        title:"24 Great Cafes",
        cover:"https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg",
        place:"24 Places",
    },
    {
        id:6,
        title:"26 Serene Rooftop Places",
        cover:"https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
        place:"26 Places",
    },
    {
        id:7,
        title:"21 Romantic Dining Places",
        cover:"https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg",
        place:"21 Places",
    },
];

const diningFilters = [
    {
        id:1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"/>,
        title: "Filters"
    },
    {
        id:2,
        title: "Rating: 4.0+",
    },
    {
        id:3,
        title: "Safe and Hygienic",
    },
    {
        id:4,
        title: "Pure Veg",
    },
    {
        id:5,
        title: "Delivery Time",
        icon: <i className="fi fi-rr-app-sort absolute-center"/>,
    },
    {
        id:6,
        title: "Great Offers",
    },
];

const diningList = dineOut;

const DiningOut = () => {
    return(
        <div>
            <Collection list={collectionList}/>
            <div className="max-width">
                <Filters filterList={diningFilters}/>
            </div>
            <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Delhi"/>
        </div>
    )
}

export default DiningOut;