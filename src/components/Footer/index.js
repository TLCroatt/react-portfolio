import React from "react";
import "./style.css"

function Footer() {
    return (
        <footer className="text-center fixed-bottom footer">
            <div className="footer">
                <p className="col-sm-12 copyright">
                    &copy; 2020 Trisha Croatt
                </p>
                <p><span>Photo by <a href="https://unsplash.com/@thmsvrbrggn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Thomas Verbruggen</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>
            </div>
        </footer>
    )
}

export default Footer;