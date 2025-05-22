import '../styles/globals.css';
import Head from 'next/head';
import { CartProvider } from '../context/CartContext';
import Cart from '../components/Cart';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>US Brand - Premium American-Made Clothing</title>
        <meta name="description" content="Stylish, comfortable clothing made in the USA with innovative manufacturing and supply chain technology." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <Component {...pageProps} />
        <Cart />
      </CartProvider>
    </>
  );
}

export default MyApp; 