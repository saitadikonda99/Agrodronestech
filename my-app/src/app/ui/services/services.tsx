"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import './services.css'
import { MdArrowOutward } from "react-icons/md";
import ServiceModel from '@/app/components/serviceModel/serviceModel';

// Services data array
const servicesData = [
    {
        id: 1,
        title: "Drone Spraying",
        shortDescription: "Efficient crop spraying using advanced drone technology.",
        fullDescription: "Efficient crop spraying using advanced drone technology for precise application of pesticides and fertilizers. Our drones ensure even coverage while minimizing waste and environmental impact.",
        image: "/services/DroneSpraying.jpeg",
        features: [
            "Precision spraying technology",
            "Coverage mapping",
            "Variable rate application",
            "Real-time monitoring",
            "Weather-adaptive operations"
        ]
    },
    {
        id: 2,
        title: "Field Monitoring",
        shortDescription: "Real-time field data to optimize farming.",
        fullDescription: "Advanced field monitoring systems that provide real-time data on soil conditions, crop health, and environmental factors. Our technology helps farmers make informed decisions to optimize their farming practices and increase yields.",
        image: "/services/service1.jpg",
        features: [
            "Soil health analysis",
            "Crop growth tracking",
            "Weather monitoring",
            "Pest detection",
            "Yield prediction"
        ]
    },
    {
        id: 3,
        title: "AI Crop Analysis",
        shortDescription: "Analyze crop health using AI-driven insights.",
        fullDescription: "State-of-the-art artificial intelligence technology that analyzes crop health, predicts potential issues, and provides actionable insights. Our AI systems help identify diseases, pest infestations, and nutrient deficiencies before they become serious problems.",
        image: "/services/service1.jpg",
        features: [
            "Disease detection",
            "Growth pattern analysis",
            "Yield optimization",
            "Nutrient management",
            "Automated reporting"
        ]
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState<(typeof servicesData)[0] | null>(null);

    return (
        <div className="ServicesComponent">
            <div className="ServicesComponent-in">
                <div className="services-one">
                    <h1>Our Services</h1>
                </div>
                <div className="services-two">
                    <h1>Farming Solutions For Optimal</h1>
                    <h1>Yield And Sustainability</h1>
                </div>
                <div className="services-three">
                    {servicesData.map((service) => (
                        <ServicesCard
                            key={service.id}
                            title={service.title}
                            description={service.shortDescription}
                            image={service.image}
                            onClick={() => setSelectedService(service)}
                        />
                    ))}
                </div>
            </div>
            <ServiceModel 
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                title={selectedService?.title || ''}
                description={selectedService?.fullDescription || ''}
                image={selectedService?.image || ''}
                features={selectedService?.features || []}
            />
        </div>
    )
}

type ServicesCardProps = {
    title: string;
    description: string;
    image: string;
    onClick?: () => void;
}

const ServicesCard = ({ title, description, image, onClick }: ServicesCardProps) => {
    return (
        <div className="servicesCard" onClick={onClick}>
            <div className="servicesCard-in">
                <div className="servicesCard-one">
                    <div className="servicesCard-one-one">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="servicesCard-one-two">
                        <MdArrowOutward />
                    </div>
                </div>
                <div className="servicesCard-two">
                    <Image 
                        src={image}
                        alt={title}
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services