import React from "react";

const Footer = () => {
    return (
        <footer className="Container-fluid p-5 bg-black">
            <div className="container ">
                <div className="row gy-4">
                    <div className="col-md-6 col-lg-3"><h2 className="text-xl font-bold text-success mb-4">CodeToRoad</h2>
                        <p className="text-sm leading-relaxed text-white">
                            CodeToRoad is your ultimate weekend travel companion. We help you
                            discover short getaways, hidden gems, and road trips — perfect for a
                            2-day escape from routine. From coding all week to hitting the road
                            on weekends, we inspire you to explore more, worry less.
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h2 className="text-lg font-semibold text-success mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Destinations</a></li>
                            <li><a href="#" className="hover:text-white">Plan Your Trip</a></li>
                            <li><a href="#" className="hover:text-white">Gallery</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 text-white">
                        <h2 className="text-lg font-semibold text-success mb-4">Contact Us</h2>
                        <p className="text-sm">📍 Hyderabad, India</p>
                        <p className="text-sm">📧 shaikjav3@gmail.com</p>
                        <p className="text-sm">📱 +91 9676110541 </p>
                        <div className="flex space-x-3 mt-3">
                            <a href="#" className="hover:text-white">Facebook</a>
                            <a href="#" className="hover:text-white">Instagram</a>
                            <a href="#" className="hover:text-white">X</a>
                            <a href="#" className="hover:text-white">YouTube</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h2 className="text-lg font-semibold text-success mb-4">Follow the Journey</h2>
                        <div className="d-flex gap-3">
                            <a href="" className="text-light fs-5"><i class="bi bi-instagram"></i></a>
                            <a href="" className="text-light fs-5"><i class="bi bi-youtube"></i></a>
                            <a href="" className="text-light fs-5"><i class="bi bi-linkedin"></i></a>
                            <a href="" className="text-light fs-5"><i class="bi bi-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4 border-light"></hr>
            <div className="row ">
                <div className="ab-0 text-center text-white border-light">
                    © 2025 CodeToRoad. All Rights Reserved. <br />
                    Built with ❤️ using React.
                </div>
            </div>
        </footer>

    );
};

export default Footer;
