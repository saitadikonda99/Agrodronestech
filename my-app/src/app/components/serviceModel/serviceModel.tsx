import React from 'react'
import Image from 'next/image'
import './serviceModel.css'
import { MdClose } from "react-icons/md";

interface ServiceModelProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    image: string;
    features?: string[];
}

const ServiceModel = ({ isOpen, onClose, title, description, image, features }: ServiceModelProps) => {
    if (!isOpen) return null;

    return (
        <div className="serviceModel-overlay">
            <div className="serviceModel">
                <div className="serviceModel-header">
                    <h2>{title}</h2>
                    <button onClick={onClose} className="close-button">
                        <MdClose />
                    </button>
                </div>
                <div className="serviceModel-content">
                    <div className="serviceModel-image">
                        <Image 
                            src={image}
                            alt={title}
                            width={600}
                            height={400}
                            objectFit="cover"
                        />
                    </div>
                    <div className="serviceModel-description">
                        <p>{description}</p>
                        <div className="serviceModel-details">
                            <h3>Key Features:</h3>
                            <ul>
                                {features?.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceModel
