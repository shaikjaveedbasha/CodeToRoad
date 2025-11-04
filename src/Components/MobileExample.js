
import React, { Component } from "react";

class MobileExample extends Component {
    render() {
        return (
            <div className="mobile">
                <figure>
                    <img src={this.props.image} alt="" ></img>
                    <figcaption>
                        <h2>{this.props.name}</h2>
                        <p>price:{this.props.price}</p>
                    </figcaption>
                </figure>

            </div>
        )
    }
}

export default MobileExample









