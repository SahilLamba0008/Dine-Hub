import React from "react";
import "./nightLife.css";
import Collection from "../common/collection/collection";
import Filters from "../common/filters/filters";
import { nightLife } from "../../data/nightLife";
import ExploreSection from "../common/exploreSection/exploreSection";

const collectionList = [
    {
        id:1,
        title:"22 Finest MicroBreweries",
        cover:"https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
        place:"22 Places",
    },
    {
        id:2,
        title:"19 Best Bars & Pubs",
        cover:"https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
        place:"19 Places",
    },
];

const nightLifeFilters = [
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
        title: "Distance",
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    },
    {
        id:4,
        title: "Pubs & Bars",
    },
];

const nightLifeList = nightLife;

const NightLife = () => {
    return(
        <div>
            <Collection list={collectionList}/>
            <div className="max-width">
                <Filters filterList={nightLifeFilters}/>
            </div>
            <ExploreSection list={nightLifeList} collectionName="Nightlife Restaurants in Delhi"/>

        </div>
    )
}

export default NightLife;