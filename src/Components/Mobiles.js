import React, { Component } from "react";
import MobileExample from "./MobileExample";

class Mobiles extends Component {
    data = [
        {
            name: 'iPhone 17 Pro',
            price: '₹1,49,999',
            image: 'https://m.media-amazon.com/images/I/71JGCn1z1TL._SL1500_.jpg',
        },
        {
            name: 'iPhone 17 Pro',
            price: '₹1,49,999',
            image: 'https://m.media-amazon.com/images/I/618vU2qKXQL._SX679_.jpg',
        },
        {
            name:'iphone 16',
            price:'₹66,999',
            image:'https://m.media-amazon.com/images/I/61eYPkT2zZL._SL1500_.jpg'
        },
        {
            name:'iphone 15',
            price:'₹59,999',
            image:'https://m.media-amazon.com/images/I/71nvkHnPpZL._SL1500_.jpg'
        },
    ]
    render() {
        return (
            <div className="mobiles">
                <h2>Letest Mobiles</h2>
                {
                    this.data.map((mobile,index) => {
                       return(
                         <MobileExample key={index} name={mobile.name} price={mobile.price} image={mobile.image} />
                       )
                    })
                }
            </div>
        )
    }
}

export default Mobiles















