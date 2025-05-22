import Layout from '../components/Layout';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Premium T-Shirt',
    price: 35,
    description: 'Our signature t-shirt, made with premium cotton and perfect fit technology.',
    imageSrc: './images/premium-tshirt.webp',
    features: ['100% US-sourced cotton', 'Perfect fit for real bodies', 'Reinforced stitching', 'Wrinkle-resistant']
  },
  {
    id: 2,
    name: 'Woven Trim Henley',
    price: 45,
    description: 'A modern take on the classic henley, featuring our signature woven trim.',
    imageSrc: './images/Woven-Trim-HEnley-Gray.webp',
    features: ['Breathable fabric blend', 'Precision cut for comfort', 'Button placket detail', 'Perfect for layering']
  },
  {
    id: 3,
    name: 'Performance Polo',
    price: 55,
    description: 'Engineered for comfort and durability, perfect for any occasion.',
    imageSrc: './images/Polo-Shirt.webp',
    features: ['Performance fabric', 'Stays tucked all day', 'Wrinkle and fade resistant', 'Perfect collar structure']
  },
  {
    id: 4,
    name: 'Untucked Button Down',
    price: 75,
    description: 'Designed to be worn untucked, with a modern, relaxed fit.',
    imageSrc: './images/Untucked.webp',
    features: ['Precision tailored length', 'Premium fabric blend', 'Perfect fit for all body types', 'Versatile design']
  },
];

export default function Products() {
  const { addToCart } = useCart();

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-center">Our Products</h1>
          <p className="text-primary-100 text-center mt-4 text-xl max-w-3xl mx-auto">
            Designed for real men with comfort, quality, and style as our priorities
          </p>
        </div>
      </div>

      {/* Product Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Clothing That Fits Real Bodies</h2>
          <p className="text-lg text-gray-700">
            Our clothing is designed with real men in mind - not fashion models. We use advanced body scanning and robotics to create garments that fit comfortably, look great, and last longer.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Every product in our line is crafted with premium materials, expert construction, and thoughtful details to ensure exceptional quality and comfort.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={product.imageSrc} alt={product.name} />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <p className="text-lg font-medium text-primary-600">{product.price}</p>
                    </div>
                    <p className="mt-2 text-gray-600">{product.description}</p>
                    <ul className="mt-4 space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="h-5 w-5 text-primary-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex space-x-3">
                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary text-sm"
                      >
                        Add to Cart
                      </button>
                      <Link href={product.href} className="btn btn-outline text-sm">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-6">Coming Soon</h2>
          <p className="text-center text-lg text-gray-700 mb-8">
            Our product line will continue to expand. Here's what we're working on next:
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Performance Wear</h3>
              <p>Technical fabrics with comfort and style for your active lifestyle.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Outerwear</h3>
              <p>Jackets and coats designed to look great on every body type.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Custom Sizing</h3>
              <p>Scan-to-order garments made specifically for your measurements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Note */}
      <div className="bg-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Made in the USA</h2>
            <p className="text-xl">
              All of our products are proudly manufactured in America with advanced technology and ethical practices.
            </p>
            <div className="mt-8">
              <Link href="/manufacturing" className="btn border-white text-white hover:bg-primary-600">
                Learn About Our Manufacturing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 