import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./style.css"


function Footer() {

    return (
        <footer className="text-center fixed-bottom footer">
            <div className="footer">
                <p className="social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" onClick={() => window.open("https://www.linkedin.com/in/trisha-croatt84/")}/> 
                        <FontAwesomeIcon icon={faGithub} size="2x" onClick={() => window.open("https://github.com/TLCroatt")}/>
                        <FontAwesomeIcon icon={faTwitter} size="2x" onClick={() => window.open("https://twitter.com/CroattTrisha")}/>
                </p>
                <p className="col-sm-12 copyright">
                    &copy; 2020 Trisha Croatt
                </p>
                <p className="photo-cred"><span>Photo by <a href="https://unsplash.com/@thmsvrbrggn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Thomas Verbruggen</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> | Conact <span>Photo by <a href="https://unsplash.com/@dsmacinnes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Danielle MacInnes</a> on <a href="https://unsplash.com/s/photos/contact?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>
            </div>
        </footer>
    )
}

export default Footer;