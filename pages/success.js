import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Success() {
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { session_id } = router.query;

  useEffect(() => {
    // Only run this effect when we have a session_id
    if (!session_id) return;

    // In a real application, you'd fetch the session details from your API
    // For this demo, we'll just simulate a successful payment
    const timer = setTimeout(() => {
      setSessionData({
        customer: {
          name: 'John Doe',
          email: 'john@example.com',
        },
        amount_total: 12500, // $125.00
        shipping: {
          address: {
            city: 'San Francisco',
            state: 'CA',
          },
        },
        created: new Date().toISOString(),
      });
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [session_id]);

  return (
    <Layout>
      <div className="bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-center">Order Confirmation</h1>
          <p className="text-primary-100 text-center mt-4 text-xl max-w-3xl mx-auto">
            Thank you for your purchase!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mb-4"></div>
              <p className="text-lg text-gray-600">Processing your order...</p>
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 bg-green-50 border-b border-green-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
                    <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-800">Order Complete!</h2>
                    <p className="text-green-600">Your payment was successful</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">Order Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Order Number</p>
                      <p className="font-medium">{session_id?.substring(0, 8) || '12345678'}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Date</p>
                      <p className="font-medium">
                        {sessionData?.created
                          ? new Date(sessionData.created).toLocaleDateString()
                          : new Date().toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Total</p>
                      <p className="font-medium">
                        ${sessionData?.amount_total ? (sessionData.amount_total / 100).toFixed(2) : '125.00'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Payment Method</p>
                      <p className="font-medium">Credit Card</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">Customer Information</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Name</p>
                      <p className="font-medium">{sessionData?.customer?.name || 'John Doe'}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Email</p>
                      <p className="font-medium">{sessionData?.customer?.email || 'john@example.com'}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Shipping Address</p>
                      <p className="font-medium">
                        {sessionData?.shipping?.address?.city || 'San Francisco'},{' '}
                        {sessionData?.shipping?.address?.state || 'CA'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Estimated Delivery</p>
                      <p className="font-medium">3-5 business days</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-600 mb-4">
                    We've sent a confirmation email with all the details of your order.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/" className="btn btn-primary">
                      Return to Home
                    </Link>
                    <Link href="/products" className="btn btn-outline">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
} 