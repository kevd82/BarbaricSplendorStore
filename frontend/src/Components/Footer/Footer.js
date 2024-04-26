import React from 'react'
import "./Footer.css";
import footer_logo from "../Assets/logo_footer.png";
import instagram_icon from "../Assets/instagram_icon.png";
import facebook_icon from "../Assets/facebook_icon.png"; 

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />       
            </div>  
            
        
            <div className="footer-social-icons">
                
                    <img src={instagram_icon} alt=""/>
                    <img src={facebook_icon} alt=""/>
                <div/>
                <div className="footer-copyright">
                    <p>Copyright @ 2024 - All Rights Reserved.</p>
                    <p>Logo by Gilead.</p>
                    <p>Clipart by Gilead.</p>
                </div>
                <div className="footer-logo">
                <img src={footer_logo} alt="" />       
                </div>  
            </div>
        </div>
    )
}

export default Footer;
