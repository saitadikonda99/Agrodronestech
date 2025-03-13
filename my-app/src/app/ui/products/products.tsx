import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './products.css'

export const products = () => {

   const products = [
    {
        title: 'Quadcopters',
        description: 'High-precision spraying drone for Small farms.',
        image: '/products/Hexacopter_10L.png'
    },
    {
        title: 'Hexacopters',
        description: 'High-precision spraying drone for large farms.',
        image: '/products/Quadcopter_16L.png'
    },
    {
        title: 'Seed Spreaders',
        description: 'Advanced Seed Spreader Drone.',
        image: '/products/Hexacopter_16L.png'
    }
   ]

  return (
        <div className="ProductsComponent">
            <div className="ProductsComponent-in">
                <div className="products-one">
                    <h1>Our Products</h1>
                </div>
                <div className="products-two">
                    <div className="products-two-in">
                        {products.map((product, index) => (
                            <ProductCard 
                                key={index}
                                title={product.title}
                                description={product.description}
                                image={product.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="products-three">
                    <Link href='/products'>View all products →</Link>
                </div>
            </div>
        </div>
  )
}

export default products


type ProductsCardProps = {
    title: string;
    description: string;
    image: string;
}

const ProductCard = ({ title, description, image }: ProductsCardProps) => {
    return (
        <div className="productCard">
            <div className="productCard-in">
                <div className="productCard-one">
                    <Image 
                        src={image}
                        alt={title}
                        width={400}
                        height={400}
                    />
                </div>
                <div className="productCard-two">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>  
            </div>
        </div>
    )
}
