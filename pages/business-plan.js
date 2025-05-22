import { useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Chart, registerables } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register ChartJS components
Chart.register(...registerables);

export default function BusinessPlan() {
  // Revenue Projection Data
  const revenueData = {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    datasets: [
      {
        label: 'Projected Revenue (in thousands)',
        data: [500, 1200, 2800, 5500, 9000],
        backgroundColor: 'rgba(12, 74, 110, 0.2)',
        borderColor: 'rgba(12, 74, 110, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(12, 74, 110, 1)',
        tension: 0.3,
      },
    ],
  };

  // Market Segments Data
  const marketData = {
    labels: ['T-Shirts', 'Henleys', 'Polos', 'Button Downs', 'Other Products'],
    datasets: [
      {
        label: 'Revenue Distribution (%)',
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(14, 165, 233, 0.7)',
          'rgba(12, 74, 110, 0.7)',
          'rgba(125, 211, 252, 0.7)',
          'rgba(56, 189, 248, 0.7)',
          'rgba(186, 230, 253, 0.7)',
        ],
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  const marketOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-center">Business Plan</h1>
          <p className="text-primary-100 text-center mt-4 text-xl max-w-3xl mx-auto">
            Our roadmap to revolutionizing American clothing manufacturing through AI, robotics, and sustainable practices
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="mb-6">Executive Summary</h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <p className="text-lg text-gray-700">
                US Brand is creating a new model for American clothing manufacturing by leveraging advanced technology, robotics, AI-powered supply chains, and on-demand production to create premium men's basics that fit real bodies better than anything currently on the market—all at competitive prices while eliminating traditional inventory waste.
              </p>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-primary-600">$9M</p>
                  <p className="text-sm text-gray-600">Projected Revenue (Year 5)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-primary-600">42%</p>
                  <p className="text-sm text-gray-600">Gross Margin (Year 5)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-primary-600">$2.5M</p>
                  <p className="text-sm text-gray-600">Initial Investment</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-primary-600">3.2yr</p>
                  <p className="text-sm text-gray-600">Path to Profitability</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                US Brand aims to capitalize on several converging market trends:
              </p>
              <ul>
                <li>Increasing consumer preference for American-made products</li>
                <li>Growing demand for premium basics with superior fit and comfort</li>
                <li>Challenges with offshore supply chains exposed by recent global events</li>
                <li>Advancements in manufacturing technology making domestic production more viable</li>
                <li>Demonstrated success of direct-to-consumer brands targeting men's basics</li>
                <li>Rising consumer preference for sustainable, environmentally-conscious brands</li>
                <li>Successful implementation of AI and robotics by industry leaders like Levi's and Walmart</li>
              </ul>
              <p>
                With a phased approach to scaling manufacturing capabilities and a strong focus on building brand loyalty through exceptional product quality, US Brand is positioned to become a leader in the premium men's basics category while pioneering sustainable manufacturing practices.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6">Technology-Driven Advantage</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Our Technological Edge</h3>
              <p className="text-lg text-gray-700 mb-6">
                Following the success of industry innovators like Levi's and Softwear Automation, our business model is built on leveraging cutting-edge technology to transform traditional manufacturing:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-700 mb-3">AI-Powered Supply Chain</h4>
                  <p className="text-gray-700 mb-4">
                    Like Levi's partnership with o9 Solutions, we'll implement an AI-powered supply chain platform that provides:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Real-time visibility across our entire supply network</li>
                    <li>Reduced lead times by 75%</li>
                    <li>Optimized material procurement and resource allocation</li>
                    <li>Significant reduction in material liabilities</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-700 mb-3">Robotic Manufacturing</h4>
                  <p className="text-gray-700 mb-4">
                    Integrating Sewbot technology similar to Softwear Automation's approach provides:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Consistent, high-quality production at scale</li>
                    <li>Labor cost competitiveness with overseas manufacturing</li>
                    <li>Flexibility to produce small batches efficiently</li>
                    <li>Enhanced quality control through machine vision</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-700 mb-3">On-Demand Production</h4>
                  <p className="text-gray-700 mb-4">
                    Following CreateOne's model of producing garments after they're sold:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Elimination of 30% inventory waste</li>
                    <li>Improved cash flow with reduced inventory costs</li>
                    <li>Ability to test new designs with minimal risk</li>
                    <li>Reduced environmental impact</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary-700 mb-3">Sustainable Materials Innovation</h4>
                  <p className="text-gray-700 mb-4">
                    Like Walmart's partnership with Rubi Laboratories:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Exploration of carbon-capture technologies for materials</li>
                    <li>Premium sustainable fabrics at competitive costs</li>
                    <li>Reduced carbon footprint across the product lifecycle</li>
                    <li>Marketing advantage with environmentally-conscious consumers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6">Market Analysis</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Target Market</h3>
                <p className="mb-4">
                  Our primary demographic is men aged 30-55 who:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Value quality and durability over fast fashion</li>
                  <li>Prefer comfortable, well-fitting clothes</li>
                  <li>Aren't as slim as typical fashion models</li>
                  <li>Have disposable income for premium basics</li>
                  <li>Care about where and how their clothing is made</li>
                  <li>Are increasingly concerned about environmental impact</li>
                </ul>
                <p>
                  This represents approximately 38 million men in the United States, with an estimated annual spending of over $40 billion on casual and business casual clothing.
                </p>
              </div>
              <div className="h-80">
                <h3 className="text-xl font-bold mb-4">Product Mix</h3>
                <Bar data={marketData} options={marketOptions} />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Competitive Landscape</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Competitor</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strengths</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weaknesses</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Our Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">True Classic</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Strong marketing, brand recognition</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Overseas manufacturing, standard sizing, inventory waste</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">US-made, AI-optimized fit, on-demand production</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Traditional Retailers</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Retail presence, scale</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Lower quality, poor fit consistency, excess inventory</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Superior quality, consistent fit, zero inventory waste</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Premium Brands</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">High quality, prestige</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">High prices, fashion focus over fit, traditional manufacturing</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Better value, real-body focus, advanced technology</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Key Market Insights</h3>
              <div className="prose prose-lg max-w-none">
                <ul>
                  <li>78% of men report dissatisfaction with how their t-shirts fit after washing</li>
                  <li>67% of men are willing to pay more for clothing made in the USA</li>
                  <li>The premium men's basics market has grown at a CAGR of 12.4% since 2018</li>
                  <li>Direct-to-consumer brands in the men's basics category have seen 200%+ growth during the pandemic</li>
                  <li>Online shopping for men's basics has increased 85% in the last three years</li>
                  <li>73% of consumers say they would pay more for sustainable products</li>
                  <li>Companies adopting AI in their supply chain see an average of 15% reduction in costs</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6">Business Model</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Revenue Streams</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">1</div>
                    <div className="ml-3">
                      <p className="font-medium">Direct-to-Consumer Sales (80%)</p>
                      <p className="text-gray-600">Primary revenue through our website with subscription options for basics, produced on-demand after purchase.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">2</div>
                    <div className="ml-3">
                      <p className="font-medium">Retail Partnerships (15%)</p>
                      <p className="text-gray-600">Select premium retailers and specialty stores, using our rapid, on-demand production.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">3</div>
                    <div className="ml-3">
                      <p className="font-medium">Corporate Bulk Orders (5%)</p>
                      <p className="text-gray-600">Custom branded products for businesses and organizations, leveraging our flexible manufacturing.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Pricing Strategy</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <p className="font-medium">Premium T-Shirts</p>
                      <p className="font-bold">$35-45</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <p className="font-medium">Long Sleeve Henleys</p>
                      <p className="font-bold">$45-55</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <p className="font-medium">Polo Shirts</p>
                      <p className="font-bold">$55-65</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <p className="font-medium">Button Down Shirts</p>
                      <p className="font-bold">$75-95</p>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <p className="font-medium">Subscription Box (3 items)</p>
                      <p className="font-bold">$120/quarter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">Manufacturing Strategy</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 mb-6">
                  Our technologically-advanced manufacturing approach evolves over three strategic phases:
                </p>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h4 className="text-lg font-bold mb-2">Phase 1: Partnership & Technology Integration (Years 1-2)</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Partner with existing US manufacturers to implement robotic systems for specific production steps</li>
                      <li>Deploy AI-powered supply chain management similar to Levi's model</li>
                      <li>Begin on-demand production systems to eliminate inventory risk</li>
                      <li>Establish brand presence and customer base</li>
                      <li><strong>Investment:</strong> $800K - Technology integration and partner setup</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h4 className="text-lg font-bold mb-2">Phase 2: Hybrid Manufacturing Facility (Years 2-3)</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Establish our own production facility with Sewbot technology for key processes</li>
                      <li>Implement full machine vision and quality control systems</li>
                      <li>Expand on-demand production capacity</li>
                      <li>Integrate carbon-captured sustainable materials</li>
                      <li><strong>Investment:</strong> $1.2M - Facility setup and robotics acquisition</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h4 className="text-lg font-bold mb-2">Phase 3: Full Automation & Scaling (Years 4-5)</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Complete end-to-end automated production facility</li>
                      <li>Fully integrated "Click, Make, Ship" on-demand model</li>
                      <li>Advanced AI optimization of all processes</li>
                      <li>Custom sizing options using body scan data</li>
                      <li><strong>Investment:</strong> $500K - Technology refinement and scaling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6">Sustainability Impact</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Beyond environmental benefits, our sustainable approach delivers significant business advantages:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-3">Financial Impact</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>30% reduced capital requirements with zero inventory</li>
                    <li>Improved cash flow through on-demand production</li>
                    <li>Lower markdown losses (industry average: 20-30%)</li>
                    <li>Ability to test new products with minimal risk</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-3">Operational Benefits</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Greater flexibility in design iterations</li>
                    <li>No seasonal inventory challenges</li>
                    <li>Reduced space requirements for warehousing</li>
                    <li>Ability to scale production as needed</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-3">Marketing Advantage</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Authentic sustainability story</li>
                    <li>Premium positioning based on real value</li>
                    <li>Appeal to growing eco-conscious segment</li>
                    <li>Transparent practices build brand trust</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">Environmental Impact Projection</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <p className="font-medium">Eliminated Clothing Waste</p>
                  <p className="font-bold">12,000+ garments by Year 5</p>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <p className="font-medium">Fabric Waste Reduction</p>
                  <p className="font-bold">15% vs. traditional cutting</p>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <p className="font-medium">Carbon Footprint Reduction</p>
                  <p className="font-bold">60% vs. offshore manufacturing</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">Water Usage Reduction</p>
                  <p className="font-bold">25% with optimized processes</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6">Financial Projections</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Revenue Growth</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Line data={revenueData} options={{ maintainAspectRatio: false }} height={300} />
              </div>
              <p className="text-sm text-gray-600 mt-2">Projected revenue growth over 5 years based on increasing production capacity and market penetration.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Key Financial Metrics</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <p className="font-medium">Initial Investment</p>
                      <p className="font-bold">$2.5 Million</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <p className="font-medium">Break-Even Point</p>
                      <p className="font-bold">Month 22</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <p className="font-medium">Gross Margin (Year 1)</p>
                      <p className="font-bold">32%</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <p className="font-medium">Gross Margin (Year 5)</p>
                      <p className="font-bold">42%</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-medium">5-Year ROI</p>
                      <p className="font-bold">285%</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Cost Structure Advantage</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="mb-4">Our technology-driven approach provides significant advantages in cost structure:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>No inventory carrying costs (typical retailers: 20-30% of inventory value annually)</li>
                    <li>Labor costs offset by automation (30-40% lower than traditional US manufacturing)</li>
                    <li>Material waste reduction (15% savings vs. industry average)</li>
                    <li>Energy-efficient operations (25% lower utilities cost per unit)</li>
                    <li>No markdowns or clearance losses (industry average: 12-15% of revenue)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6">Implementation Timeline</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="relative">
                    <div className="md:flex items-center">
                      <div className="md:w-1/2 pr-8 md:text-right">
                        <h3 className="text-xl font-bold text-primary-700">Months 1-6</h3>
                        <div className="mt-2">
                          <p className="font-medium">Technology & Partnership Setup</p>
                          <ul className="text-sm text-gray-600 mt-1 list-disc pl-6 md:pl-0 md:list-none">
                            <li>Partner with US manufacturers</li>
                            <li>Implement initial AI supply chain system</li>
                            <li>Launch e-commerce platform</li>
                            <li>Initial product line development</li>
                          </ul>
                        </div>
                      </div>
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-0.5">
                        <div className="h-8 w-8 rounded-full border-4 border-primary-600 bg-white"></div>
                      </div>
                      <div className="mt-4 md:mt-0 md:w-1/2 pl-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-xl font-bold text-primary-700">$400K</p>
                          <p className="text-sm text-gray-600">Initial investment for partnership setup and technology integration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:flex items-center">
                      <div className="md:w-1/2 pr-8 md:text-right order-last md:order-first">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-xl font-bold text-primary-700">$600K</p>
                          <p className="text-sm text-gray-600">Marketing and scaling for market growth</p>
                        </div>
                      </div>
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-0.5">
                        <div className="h-8 w-8 rounded-full border-4 border-primary-600 bg-white"></div>
                      </div>
                      <div className="mt-4 md:mt-0 md:w-1/2 pl-8 order-first md:order-last">
                        <h3 className="text-xl font-bold text-primary-700">Months 7-18</h3>
                        <div className="mt-2">
                          <p className="font-medium">Market Growth & Technology Refinement</p>
                          <ul className="text-sm text-gray-600 mt-1 list-disc pl-6">
                            <li>Scale marketing and customer acquisition</li>
                            <li>Refine on-demand production processes</li>
                            <li>Expand product line with customer feedback</li>
                            <li>Begin planning for hybrid facility</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:flex items-center">
                      <div className="md:w-1/2 pr-8 md:text-right">
                        <h3 className="text-xl font-bold text-primary-700">Months 19-36</h3>
                        <div className="mt-2">
                          <p className="font-medium">Hybrid Manufacturing Facility</p>
                          <ul className="text-sm text-gray-600 mt-1 list-disc pl-6 md:pl-0 md:list-none">
                            <li>Establish own production facility</li>
                            <li>Install Sewbot technology for core processes</li>
                            <li>Implement full machine vision systems</li>
                            <li>Launch sustainable materials initiative</li>
                          </ul>
                        </div>
                      </div>
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-0.5">
                        <div className="h-8 w-8 rounded-full border-4 border-primary-600 bg-white"></div>
                      </div>
                      <div className="mt-4 md:mt-0 md:w-1/2 pl-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-xl font-bold text-primary-700">$1.2M</p>
                          <p className="text-sm text-gray-600">Investment for facility setup and robotics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:flex items-center">
                      <div className="md:w-1/2 pr-8 md:text-right order-last md:order-first">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-xl font-bold text-primary-700">$300K</p>
                          <p className="text-sm text-gray-600">Technology refinement and advanced AI integration</p>
                        </div>
                      </div>
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-0.5">
                        <div className="h-8 w-8 rounded-full border-4 border-primary-600 bg-white"></div>
                      </div>
                      <div className="mt-4 md:mt-0 md:w-1/2 pl-8 order-first md:order-last">
                        <h3 className="text-xl font-bold text-primary-700">Months 37-60</h3>
                        <div className="mt-2">
                          <p className="font-medium">Full Automation & Scaling</p>
                          <ul className="text-sm text-gray-600 mt-1 list-disc pl-6">
                            <li>Implement fully integrated "Click, Make, Ship" model</li>
                            <li>Launch custom sizing with 3D body scan data</li>
                            <li>Scale production capacity</li>
                            <li>Expand retail partnerships</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl text-primary-800 mb-4">Ready to join our vision?</h3>
            <p className="mb-6 text-lg">
              Together, we can revolutionize American clothing manufacturing, creating jobs while building a sustainable, profitable business.
            </p>
            <Link href="/contact" className="btn btn-primary inline-block">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 