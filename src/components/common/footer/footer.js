import React from "react";
import "./footer.css";

const icons = [
    {
        id:1,
        img:"https://cdn-icons-png.flaticon.com/128/6422/6422202.png",
        title:"Linkedin"
    },
    {
        id:2,
        img:"https://cdn-icons-png.flaticon.com/128/6424/6424084.png",
        title:"GitHub"
    },
    {
        id:3,
        img:"https://cdn-icons-png.flaticon.com/128/6422/6422204.png",
        title:"Pinterest"
    },
    {
        id:4,
        img:"https://cdn-icons-png.flaticon.com/128/6422/6422210.png",
        title:"Twitter"
    },
]

const Footer = () => {
    return(
        <div>
        <div className="footer-separator"></div>
            <div className="footer absolute-center">
                <div className="max-width">
                    <div className="footer-wrapper">
                        <div className="left">
                            <div className="List-1">
                                <div className="List-Heading">ABOUT ME</div>
                                <div className="List-content">
                                    <p>Who is Me ?</p>
                                    <p>Blog</p>
                                    <p>Report</p>
                                    <p>Information</p>
                                    <p>Statictics</p>
                                </div>
                            </div>
                            <div className="List-2">
                                <div className="List-Heading">CONTACT ME</div>
                                <div className="List-content">
                                    <p>Want to Contact me ?</p>
                                    <p>E-mail</p>
                                    <p>Contact Info</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">   
                            <div className="icons-heading">SOCIAL LINKS : </div>
                            <div className="icons">
                                {icons.map((icon)=>{
                                    return (
                                        <div>
                                            <img src={icon.img} alt={icon.title} className="icons-images" />
                                        </div>
                                    )
                                })}
                            </div> 
                        </div>
                    </div>
                    <div className="footer-text">
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
                        This project is created only for educational purpose and the JSON data used here is fetched from Zomato itself and does not belongs to me.
                    </div>
                    <div className="absolute-center footer-bottom">
                        2019-2023 © Chandigarh University™ , Sahil Lamba
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;