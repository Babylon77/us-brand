import Layout from '../components/Layout';
import Link from 'next/link';

export default function Vision() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-center">Our Vision</h1>
          <p className="text-primary-100 text-center mt-4 text-xl max-w-3xl mx-auto">
            Revolutionizing American clothing manufacturing with innovation, robotics, AI, and sustainable practices
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="mb-6">The Future of American-Made Clothing</h2>
            <p className="text-lg text-gray-700">
              At US Brand, we envision a future where high-quality, comfortable clothing is made right here in America using cutting-edge technology and ethical manufacturing practices. We're committed to bringing manufacturing back to the United States, creating jobs, and reducing our environmental footprint through revolutionary approaches to production.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Our mission is to leverage advanced robotics, AI-powered systems, and streamlined supply chains to produce clothing that fits real bodies better than anything else on the market, while keeping prices reasonable and accessible.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Following the examples of industry leaders like Levi's and Walmart, we're investing in technologies that will transform how clothing is designed, produced, and delivered - creating a more sustainable and efficient manufacturing ecosystem.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="mb-6">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">American Innovation</h3>
                <p>Utilizing cutting-edge technology like AI and robotics to revolutionize garment manufacturing with precision, efficiency, and minimal waste.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Superior Comfort</h3>
                <p>Creating clothing designed specifically for real bodies, using 3D body scanning and AI pattern optimization to ensure maximum comfort for all shapes and sizes.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Ethical Production</h3>
                <p>Maintaining fair labor practices and environmentally conscious manufacturing processes that reduce carbon footprint and eliminate waste.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Accessible Quality</h3>
                <p>Making premium clothing accessible through innovative manufacturing, AI-optimized supply chains, and on-demand production that eliminates excess inventory.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6">Our Manufacturing Strategy</h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Technology-Driven Approach</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li className="text-gray-700">
                    <span className="font-medium">Phase 1: Partnership Model</span>
                    <p className="mt-1">Initially partnering with existing US manufacturers to implement AI-powered supply chain management and robotics for specific production steps, establishing our brand and market presence.</p>
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Phase 2: Hybrid Manufacturing</span>
                    <p className="mt-1">Investing in our own specialized robotics equipment for critical production steps like cutting and sewing, while still leveraging partners for other aspects of the supply chain.</p>
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Phase 3: Autonomous Factory</span>
                    <p className="mt-1">Developing a highly automated, tech-driven factory with collaborative robots (cobots) and AI systems that optimize efficiency, quality, and sustainability - similar to innovations implemented by industry leaders.</p>
                  </li>
                </ol>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">Our ultimate goal is to create a manufacturing environment that combines robotic precision with human creativity, producing on-demand clothing that exceeds expectations in fit, comfort, and durability while minimizing waste and environmental impact.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6">Technological Innovation</h2>
            <div className="prose prose-lg max-w-none">
              <p>We're embracing several cutting-edge technologies that will transform our manufacturing process:</p>
              <ul>
                <li>
                  <strong>AI-Powered Supply Chain:</strong> Following Levi's example, we'll implement AI systems that provide real-time visibility across our supply chain, matching supply to demand and reducing lead times.
                </li>
                <li>
                  <strong>Robotic Manufacturing:</strong> Integrating advanced robotics (Sewbots) for precision cutting, sewing, and quality inspection, allowing for higher quality, more consistent products.
                </li>
                <li>
                  <strong>Digital Pattern Technology:</strong> Using AI to optimize garment patterns that maximize fabric usage and create better fits for real bodies.
                </li>
                <li>
                  <strong>On-Demand Production:</strong> Creating a "Click, Make, Ship" model that produces garments only after they're sold, eliminating excess inventory and waste.
                </li>
                <li>
                  <strong>Carbon Capture Technology:</strong> Exploring innovative materials created from captured carbon emissions, similar to Walmart's partnerships with sustainable manufacturers.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6">Why Now Is The Time</h2>
            <div className="prose prose-lg max-w-none">
              <p>Several key factors have converged to make this the perfect moment for our vision:</p>
              <ul>
                <li>Renewed interest in domestic manufacturing and reshoring</li>
                <li>Advancements in robotics and AI making US manufacturing more competitive</li>
                <li>Growing consumer demand for ethically produced, high-quality basics</li>
                <li>Supply chain vulnerabilities exposed by recent global events</li>
                <li>Increasing preference for brands with transparent, sustainable practices</li>
                <li>Successful implementation of similar technologies by industry leaders</li>
              </ul>
              <p>By capitalizing on these trends and technological advancements, US Brand is positioned to lead a new era in American clothing manufacturing.</p>
            </div>
          </section>

          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl text-primary-800 mb-4">Ready to learn more about our plan?</h3>
            <Link href="/business-plan" className="btn btn-primary inline-block">
              View Business Plan
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 