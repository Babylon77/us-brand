import { useRef, useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

export default function Cart() {
  const { 
    cartItems, 
    cartOpen, 
    setCartOpen, 
    removeFromCart, 
    updateQuantity, 
    totalPrice, 
    itemCount,
    clearCart
  } = useCart();
  
  const cartRef = useRef();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);

  // Handle click outside to close cart
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    }

    if (cartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartOpen, setCartOpen]);

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [cartOpen]);

  // Function to handle checkout
  const handleCheckout = async () => {
    try {
      setCheckoutLoading(true);
      setCheckoutError(null);
      
      // For demo purposes, we'll simulate a successful checkout
      // In a real application, you'd make an API call to your server
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Instead of using Stripe, redirect to success page for demo
      window.location.href = `/success?session_id=demo_${Date.now()}`;
      
      // Clear the cart after successful checkout
      clearCart();
      
    } catch (error) {
      console.error('Error during checkout:', error);
      setCheckoutError('There was a problem processing your checkout. Please try again.');
    } finally {
      setCheckoutLoading(false);
    }
  };

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div 
          ref={cartRef} 
          className="w-screen max-w-md transform transition ease-in-out duration-300"
        >
          <div className="h-full flex flex-col bg-white shadow-xl">
            {/* Cart header */}
            <div className="px-4 py-6 bg-primary-700 sm:px-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-white">Shopping Cart ({itemCount} items)</h2>
                <button
                  type="button"
                  className="text-white hover:text-gray-200"
                  onClick={() => setCartOpen(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Cart items */}
            <div className="flex-1 py-6 px-4 sm:px-6 overflow-auto">
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Start shopping to add items to your cart
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setCartOpen(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                        <img
                          src={item.imageSrc}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">{item.price}</p>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center">
                            <button
                              type="button"
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                            <span className="mx-2 text-gray-700">{item.quantity}</span>
                            <button
                              type="button"
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-primary-600 hover:text-primary-500"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cart footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                
                {checkoutError && (
                  <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded">
                    {checkoutError}
                  </div>
                )}
                
                <div className="mt-6">
                  <button
                    onClick={handleCheckout}
                    disabled={checkoutLoading}
                    className={`w-full btn btn-primary ${checkoutLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {checkoutLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : 'Checkout'}
                  </button>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{' '}
                    <button
                      type="button"
                      className="text-primary-600 font-medium hover:text-primary-500"
                      onClick={() => setCartOpen(false)}
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 