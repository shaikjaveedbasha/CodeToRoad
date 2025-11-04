import React from "react";

import goaImg from './assets/Goa Beach Escape-image.jpg';
import manaliImg from './assets/Manali Adventure Trip-image.jpg';
import jaipurImg from './assets/Royal Jaipur Tour-image.webp';
import keralaImg from './assets/Kerala Backwater Bliss-image.jpg';
import ootyImg from './assets/Ooty Hill Retreat-image.webp';
import andamanImg from './assets/Andaman Island Getaway-image.jpg';
import ladakh from './assets/ladakh-Leh-Ladakh Adventure Ride.jpg';
import tajmahal from './assets/Taj Mahal Heritage Visit.webp';
import rishikesh from './assets/Rishikesh-1-1-scaled.jpg';
import darjeeling from './assets/Darjeeling Tea Valley Retreat.jpg';
import jammukashmir from './assets/Kashmir-Paradise-Tour.webp';
import mumbai from './assets/Mumbai City Lights Tour.jpg'

const Destination = () => {
    const destinations = [
        {
            id: 1,
            name: "Goa Beach Escape",
            image: goaImg,
            description:
                "Golden beaches, coconut trees, and nightlife await you in India's favorite coastal paradise.",
            duration: "2 Days / 1 Night",
            location: "Goa, India",
        },
        {
            id: 2,
            name: "Manali Adventure Trip",
            image: manaliImg,
            description:
                "Escape to the Himalayas for paragliding, mountain treks, and snow-covered beauty.",
            duration: "3 Days / 2 Nights",
            location: "Manali, Himachal Pradesh",
        },
        {
            id: 3,
            name: "Royal Jaipur Tour",
            image: jaipurImg,
            description:
                "Explore the pink city's royal heritage, palaces, and colorful markets.",
            duration: "2 Days / 1 Night",
            location: "Jaipur, Rajasthan",
        },
        {
            id: 4,
            name: "Kerala Backwater Bliss",
            image: keralaImg,
            description:
                "Cruise through Kerala’s serene backwaters on a traditional houseboat.",
            duration: "3 Days / 2 Nights",
            location: "Alleppey, Kerala",
        },
        {
            id: 5,
            name: "Ooty Hill Retreat",
            image: ootyImg,
            description:
                "Enjoy misty mornings, tea gardens, and scenic hill views in Ooty.",
            duration: "2 Days / 1 Night",
            location: "Ooty, Tamil Nadu",
        },
        {
            id: 6,
            name: "Andaman Island Getaway",
            image: andamanImg,
            description:
                "Relax on crystal-clear beaches, explore coral reefs, and unwind in tropical bliss.",
            duration: "4 Days / 3 Nights",
            location: "Andaman & Nicobar Islands",
        },
        {
            id: 7,
            name: "Leh-Ladakh Adventure Ride",
            image: ladakh,
            description:
                "Ride through rugged mountain passes, serene lakes, and monasteries in the Himalayas. A dream trip for adventure lovers.",
            duration: "6 Days / 5 Nights",
            location: "Leh-Ladakh, Jammu & Kashmir",
        },
        {
            id: 8,
            name: "Taj Mahal Heritage Visit",
            image: tajmahal,
            description:
                "Witness the eternal symbol of love — the Taj Mahal. Explore the Mughal architecture and heritage of Agra.",
            duration: "1 Day Trip",
            location: "Agra, Uttar Pradesh",
        },
        {
            id: 9,
            name: "Rishikesh Spiritual Escape",
            image: rishikesh,
            description:
                "Experience peace by the Ganges, try river rafting, and attend the divine Ganga Aarti in Rishikesh.",
            duration: "3 Days / 2 Nights",
            location: "Rishikesh, Uttarakhand",
        },
        {
            id: 10,
            name: "Darjeeling Tea Valley Retreat",
            image: darjeeling,
            description:
                "Enjoy the scenic Himalayan views, toy train rides, and fresh tea gardens in the Queen of Hills.",
            duration: "2 Days / 1 Night",
            location: "Darjeeling, West Bengal",
        },
        {
            id: 11,
            name: "Kashmir Paradise Tour",
            image: jammukashmir,
            description:
                "Sail on Dal Lake, visit tulip gardens, and enjoy the breathtaking views of snow-covered mountains.",
            duration: "5 Days / 4 Nights",
            location: "Srinagar, Jammu & Kashmir",
        },
        {
            id: 12,
            name: "Mumbai City Lights Tour",
            image: mumbai,
            description:
                "Explore the city that never sleeps — Marine Drive, Gateway of India, Bollywood, and more.",
            duration: "2 Days / 1 Night",
            location: "Mumbai, Maharashtra",
        },

    ];

    return (
        <section className="py-5 bg-light" id="destinations">
            <div className="container text-center">
                <h2 className="fw-bold text-primary mb-3">Top Destinations</h2>
                <p className="text-muted mb-5">
                    Discover the most beautiful places across India — from beaches to
                    mountains and royal palaces.
                </p>

                <div className="row g-4 detsination">
                    {destinations.map((place) => (
                        <div key={place.id} className="col-md-4 col-sm-6">
                            <div className="card shadow-sm h-100 ">
                                <img src={place.image} className="w-100 h-100" alt={place.name} />
                                <div className="card-body text-start">
                                    <h5 className="fw-bold text-primary">{place.name}</h5>
                                    <p className="small text-muted mb-1">
                                        {place.location}
                                    </p>
                                    <p className="text-muted small">{place.description}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className=" text-success">
                                            {place.duration}
                                        </span>
                                        <button className="btn btn-outline-primary">Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destination;
