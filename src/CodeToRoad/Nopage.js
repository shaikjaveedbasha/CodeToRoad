import React from "react";
import Errorimg from './assets/404_animation.gif'
const Nopage = () => {
    return (
        <div className="container p-5 text-center">
            <img src={Errorimg} className="w-75" alt="error-image" />
        </div>
    )
}
export default Nopage