// app/services/page.tsx
"use client";

import React from 'react';
import Header from '../Header/page';
import Footer from '../Footer/page';
import Image from 'next/image';
import { FaRoad, FaTruck, FaUserTie, FaBuilding, FaCity, FaTools, FaCogs, FaShieldAlt, FaClock, FaCheckCircle, FaHandshake } from 'react-icons/fa';

const Service = () => {
  const services = [
    {
      title: 'Road Construction',
      icon: FaRoad,
      description: 'Comprehensive road construction services including highways, rural roads, and urban road networks with advanced technology.',
      
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      image: '/services/road-construction.jpg'
    },
    {
      title: 'Material Trading',
      icon: FaTruck,
      description: 'Reliable supply of premium construction materials including petroleum products, cement, steel, and aggregates.',
     
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      image: '/services/material-trading.jpg'
    },
    {
      title: 'Expert Consultancy',
      icon: FaUserTie,
      description: 'Professional consultancy services for project planning, management, and technical expertise.',
      color: 'from-indigo-600 to-blue-600',
      bgColor: 'from-indigo-50 to-blue-50',
      image: '/services/consultancy.jpg'
    },
  ];

  const serviceProcess = [
    {
      step: '01',
      title: 'Consultation & Planning',
      description: 'Initial discussion to understand requirements and project scope',
      icon: '💬',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Design & Engineering',
      description: 'Detailed design development and engineering calculations',
      icon: '📐',
      color: 'from-emerald-500 to-green-500'
    },
    {
      step: '03',
      title: 'Material Procurement',
      description: 'Sourcing quality materials from trusted suppliers',
      icon: '📦',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '04',
      title: 'Construction & Execution',
      description: 'On-site construction with quality control measures',
      icon: '🏗️',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      step: '05',
      title: 'Quality Inspection',
      description: 'Rigorous quality checks and compliance verification',
      icon: '🔍',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      step: '06',
      title: 'Project Handover',
      description: 'Final delivery with documentation and support',
      icon: '🏁',
      color: 'from-teal-500 to-cyan-500'
    },
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: '50+ experienced engineers and technicians',
      icon: FaUserTie,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Quality Assurance',
      description: 'ISO certified quality management system',
      icon: FaShieldAlt,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      title: 'Timely Delivery',
      description: '98% on-time project completion rate',
      icon: FaClock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Modern Equipment',
      description: 'State-of-the-art machinery and technology',
      icon: FaCogs,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Client Support',
      description: '24/7 customer support and maintenance',
      icon: FaTools,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100'
    },
    {
      title: 'Transparent Pricing',
      description: 'Competitive and clear pricing structure',
      icon: FaCheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0%)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-8 shadow-lg">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  OUR SERVICES
                </span>
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Construction Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                From concept to completion, we deliver excellence in every project with advanced technology and expert craftsmanship
              </p>
              
              {/* Decorative Elements */}
              <div className="flex justify-center gap-4 mt-12">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-700">CORE SERVICES</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Specialized</span> Services
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored construction services designed to meet your specific project requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-transparent shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}>
                      <service.icon className="text-3xl text-white" />
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center transform rotate-0 group-hover:rotate-45 transition-transform duration-500 shadow-md`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  
                

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-emerald-700">OUR PROCESS</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Systematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Approach</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ensuring quality, efficiency, and client satisfaction at every stage
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline - Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-emerald-600 hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {serviceProcess.map((process, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12 lg:mt-24'}`}
                >
                  <div className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-4 lg:flex-col lg:items-start">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center text-lg font-bold text-white shadow-lg`}>
                          {process.step}
                        </div>
                      </div>
                      <div className="lg:w-full">
                        <div className="text-4xl mb-2">{process.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{process.title}</h3>
                        <p className="text-gray-600 text-sm">{process.description}</p>
                      </div>
                    </div>
                    
                    {/* Hover Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${process.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>

                  {/* Timeline Dot */}
                  <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r ${process.color} shadow-lg hidden lg:block`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-700">WHY CHOOSE US</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Building Trust Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Excellence</span>
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                At Shiv Enterprises, we combine expertise, technology, and dedication to deliver 
                construction solutions that stand the test of time. Our commitment to quality and 
                client satisfaction sets us apart in the industry.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className={`p-3 ${item.bgColor} rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-emerald-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-6">🏆</div>
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">Trusted Partner</h3>
                      <p className="text-gray-600 font-medium">For 5+ Years</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Proven Expertise
                  </div>
                  <div className="absolute bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Client First
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl transform rotate-3 animate-float">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-xs opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span className="text-sm font-medium text-purple-700">SERVICE COVERAGE</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Serving Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">India</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction services covering urban, rural, and industrial projects nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
              <div className="text-6xl mb-6">🏙️</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Urban Projects</h3>
              <p className="text-gray-600 mb-4">
                Specialized services for metropolitan areas including smart city development, 
                urban infrastructure, and commercial complexes.
              </p>
             
              
              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative bg-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
              <div className="text-6xl mb-6">🏘️</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Rural Development</h3>
              <p className="text-gray-600 mb-4">
                Focused on rural infrastructure development including roads, bridges, and 
                community facilities for sustainable growth.
              </p>
              
              
              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative bg-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
              <div className="text-6xl mb-6">🏭</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Industrial Projects</h3>
              <p className="text-gray-600 mb-4">
                Expertise in industrial construction including factories, warehouses, 
                and industrial park development.
              </p>
              
              
              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full mb-8 shadow-lg">
              <FaHandshake className="text-blue-600" />
              <span className="text-blue-700 font-semibold">GET STARTED TODAY</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Construction Project?</span>
            </h2>
            
            <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
              Contact us for a free consultation and detailed proposal for your construction needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a
                      href="tel:+918563019297"
                    > 
              <button className="group px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 text-white font-bold rounded-xl hover:rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 shadow-lg">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +91 85630 19297
              </button>
              </a>
              
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
                <div className="h-1 w-0 mx-auto mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Free</div>
                <div className="text-gray-600 text-sm">Consultation</div>
                <div className="h-1 w-0 mx-auto mt-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-purple-600 mb-2">15 Days</div>
                <div className="text-gray-600 text-sm">Project Planning</div>
                <div className="h-1 w-0 mx-auto mt-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animation for floating effect */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Service;