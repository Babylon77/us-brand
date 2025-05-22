import Layout from '../components/Layout';
import Link from 'next/link';

export default function Manufacturing() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-center">Our Manufacturing Approach</h1>
          <p className="text-primary-100 text-center mt-4 text-xl max-w-3xl mx-auto">
            Reinventing clothing production with American innovation, AI, robotics, and ethical practices
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="mb-6">Reshoring with Smart Innovation</h2>
            <p className="text-lg text-gray-700">
              US Brand is dedicated to bringing clothing manufacturing back to America, but with a modern approach that leverages cutting-edge technology. By combining human craftsmanship with advanced robotics, AI, and automation, we're creating a new model for domestic production that's both economically viable and produces superior results while minimizing environmental impact.
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Modern manufacturing facility" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">The Problem with Traditional Manufacturing</h3>
                <p className="mb-4">
                  For decades, clothing production has moved overseas in search of cheaper labor. This has resulted in:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Loss of American jobs and manufacturing expertise</li>
                  <li>Reduced quality control and oversight</li>
                  <li>Extended supply chains prone to disruption</li>
                  <li>Questionable labor and environmental practices</li>
                  <li>Massive inventory waste with an estimated 30% of produced garments discarded</li>
                  <li>High carbon footprint from global shipping</li>
                  <li>Products designed for cost rather than fit and quality</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI & Robotics in Manufacturing */}
          <section className="mb-16">
            <h2 className="mb-6">AI & Robotics: Transforming Apparel Manufacturing</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Following the lead of industry innovators like Levi's and Softwear Automation, we're integrating cutting-edge AI and robotics technologies into our production process. These technologies are revolutionizing how clothing is made:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-700">Collaborative Robots (Cobots)</h3>
                  <p className="text-gray-700">
                    Advanced robots that work alongside human workers, assisting with repetitive tasks like sewing and fabric handling. This allows our team to focus on more complex tasks requiring creativity and expertise.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-700">Machine Vision Technology</h3>
                  <p className="text-gray-700">
                    Like autonomous vehicles, our manufacturing systems use cameras and sensors to recognize fabric distortion and make real-time adjustments during production, ensuring perfect stitching every time.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-700">AI-Powered Supply Chain</h3>
                  <p className="text-gray-700">
                    Real-time data visibility across our entire supply network allows us to match supply to demand instantly, reducing lead times and material waste while improving efficiency.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-700">On-Demand Manufacturing</h3>
                  <p className="text-gray-700">
                    With our "Click, Make, Ship" model, we produce garments only after they're ordered, eliminating excess inventory waste and enabling true sustainable production.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Benefits of Our Tech-Powered Approach</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="text-primary-600 text-4xl font-bold mb-2">
                    90%
                  </div>
                  <p className="text-gray-700">
                    Reduction in production waste compared to traditional manufacturing
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="text-primary-600 text-4xl font-bold mb-2">
                    75%
                  </div>
                  <p className="text-gray-700">
                    Shorter lead times from design to delivery
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="text-primary-600 text-4xl font-bold mb-2">
                    100%
                  </div>
                  <p className="text-gray-700">
                    Transparent, traceable supply chain from source to customer
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Solution */}
          <section className="mb-16">
            <h2 className="mb-6">Our Solution: Technology-Enabled Production</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4">Key Components of Our Approach</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="text-primary-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Advanced Robotics</h4>
                  <p className="text-sm text-gray-600">
                    Precision cutting, sewing, and quality control processes automated for consistency and efficiency.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="text-primary-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Digital Patterning</h4>
                  <p className="text-sm text-gray-600">
                    Computer-optimized patterns that maximize fabric usage and create better fits for real bodies.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="text-primary-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Real Body Data</h4>
                  <p className="text-sm text-gray-600">
                    Using 3D body scans of real customers to create designs that fit the modern American man.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              By utilizing these technologies, we're able to produce clothing in the United States that is:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-lg mb-3">Higher Quality</h4>
                <p>
                  Our robotic systems ensure precise, consistent construction with quality checks at every stage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-lg mb-3">Better Fitting</h4>
                <p>
                  Designed using real body data and AI pattern optimization for comfort across body types.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-lg mb-3">More Sustainable</h4>
                <p>
                  Less waste, shorter shipping distances, and better production planning reduce environmental impact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-lg mb-3">Competitively Priced</h4>
                <p>
                  Automation offsets higher labor costs, keeping our pricing accessible without sacrificing quality.
                </p>
              </div>
            </div>
          </section>

          {/* Sustainable Manufacturing */}
          <section className="mb-16">
            <h2 className="mb-6">Sustainable Manufacturing: Beyond Just Marketing</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Sustainability is built into every aspect of our manufacturing process, not just added as an afterthought:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">On-Demand Production</h3>
                    <p className="text-gray-600">Following CreateOne's model, we produce garments only after they're sold, completely eliminating inventory waste that accounts for an estimated 30% of all clothing produced.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Precision Cutting & Material Optimization</h3>
                    <p className="text-gray-600">Our AI-powered pattern layouts and robotic cutting systems maximize fabric usage, reducing waste by up to 15% compared to traditional methods.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Carbon-Conscious Materials</h3>
                    <p className="text-gray-600">Like Walmart's partners at Rubi Laboratories, we're exploring innovative materials created from captured carbon emissions to further reduce our environmental footprint.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Transparent Supply Chain</h3>
                    <p className="text-gray-600">Every garment comes with complete traceability from raw materials to delivery, allowing customers to verify our sustainable practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <h2 className="mb-6">Our Production Process</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 pr-8 md:text-right">
                      <h3 className="text-xl font-bold text-primary-700">Design & Development</h3>
                      <p className="mt-2">Creating garments optimized for both style and manufacturing efficiency using AI-powered design tools.</p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-0.5">
                      <div className="h-8 w-8 rounded-full border-4 border-primary-600 bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 pl-8">
                      <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Design process" className="rounded-lg shadow-sm" />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 pr-8 md:text-right order-last md:order-first">
                      <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Material selection" className="rounded-lg shadow-sm" />
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-0.5">
                      <div className="h-8 w-8 rounded-full border-4 border-primary-600 bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 pl-8 order-first md:order-last">
                      <h3 className="text-xl font-bold text-primary-700">Material Selection</h3>
                      <p className="mt-2">Sourcing premium, sustainable materials from US suppliers whenever possible, including innovative fabrics made from recycled or carbon-captured materials.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 pr-8 md:text-right">
                      <h3 className="text-xl font-bold text-primary-700">Precision Cutting</h3>
                      <p className="mt-2">Computer-controlled cutting systems that minimize waste and ensure consistency, guided by AI optimization.</p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-0.5">
                      <div className="h-8 w-8 rounded-full border-4 border-primary-600 bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 pl-8">
                      <img src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Automated cutting" className="rounded-lg shadow-sm" />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 pr-8 md:text-right order-last md:order-first">
                      <img src="https://images.unsplash.com/photo-1512348233767-38a0c69e0ca1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Robotic sewing" className="rounded-lg shadow-sm" />
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-0.5">
                      <div className="h-8 w-8 rounded-full border-4 border-primary-600 bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 pl-8 order-first md:order-last">
                      <h3 className="text-xl font-bold text-primary-700">Advanced Construction</h3>
                      <p className="mt-2">Combining precision robotics (Sewbots) with skilled human craftsmanship for superior results, using machine vision to ensure perfect stitching.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 pr-8 md:text-right">
                      <h3 className="text-xl font-bold text-primary-700">Quality Assurance</h3>
                      <p className="mt-2">Automated and human inspection at every stage to ensure excellence, with AI systems identifying even the smallest defects.</p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-0.5">
                      <div className="h-8 w-8 rounded-full border-4 border-primary-600 bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 pl-8">
                      <img src="https://images.unsplash.com/photo-1581091007718-0c35df6ee06a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Quality control" className="rounded-lg shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Path to Automation */}
          <section className="mb-12">
            <h2 className="mb-6">Our Path to Fully Autonomous Manufacturing</h2>
            <p className="text-lg text-gray-700 mb-8">
              While our vision is to create a highly automated production facility, we're taking a pragmatic, phased approach similar to leading innovators in the industry:
            </p>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Phase One: Partnership Model</h3>
                    <p className="mt-2">
                      We're collaborating with existing US manufacturers, investing in specific automation tools to improve their processes while establishing our market presence. This approach allows us to implement AI-driven supply chain management and selective robotic production methods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Phase Two: Hybrid Production</h3>
                    <p className="mt-2">
                      As we scale, we'll establish our own production facility focused on key manufacturing steps with Sewbot technology for cutting and sewing, while continuing to partner for other components. Our facility will feature collaborative robots working alongside skilled craftspeople.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Phase Three: Autonomous Production</h3>
                    <p className="mt-2">
                      Our ultimate goal is a highly automated, end-to-end production facility capable of efficient on-demand manufacturing with customization options. This will operate on a "Click, Make, Ship" model, producing garments only after they're sold to eliminate inventory waste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to see how this approach makes business sense?</h3>
            <p className="mb-6 text-xl">
              Our innovative manufacturing strategy isn't just better for America and the environment—it's also a smart business model.
            </p>
            <Link href="/business-plan" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Explore Our Business Plan
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 