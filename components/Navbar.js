import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Vision', href: '/vision' },
  { name: 'Products', href: '/products' },
  { name: 'Manufacturing', href: '/manufacturing' },
  { name: 'Business Plan', href: '/business-plan' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCartOpen, itemCount } = useCart();

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">US Brand</span>
            <span className="text-2xl font-display font-bold text-primary-700">US BRAND</span>
          </Link>
        </div>
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            className="mr-4 relative text-gray-700 hover:text-primary-600"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary-600 rounded-full">
                {itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
          <button
            type="button"
            className="mr-4 relative text-gray-700 hover:text-primary-600"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary-600 rounded-full">
                {itemCount}
              </span>
            )}
          </button>
          <Link href="/contact" className="btn btn-primary text-sm">
            Get Started
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">US Brand</span>
                <span className="text-2xl font-display font-bold text-primary-700">US BRAND</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 px-4">
                <Link
                  href="/contact"
                  className="block w-full text-center btn btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 