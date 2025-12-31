"use client";

import React from 'react';
import Header from '../Header/page';
import Footer from '../Footer/page';
import Image from 'next/image';

const Portfolio = () => {
  // Portfolio data
  const portfolioCategories = [
    {
      id: 'highways',
      title: 'Rural Development',
      count: 25,
      icon: '🛣️',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-100 to-cyan-100',
      textColor: 'text-blue-700',
      image: '/portfolio/highway-bg.jpg'
    },
    {
      id: 'industrial',
      title: 'Industrial Complexes',
      count: 1,
      icon: '🏭',
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-100 to-red-100',
      textColor: 'text-orange-700',
      image: '/portfolio/industrial-bg.jpg'
    },
    
  ];

  // Our Work - Completed Projects
  const ourWorkProjects = [
    {
      id: 1,
      title: 'Rewa',
      // category: 'Highway Expansion',
      location: 'Madhya Pradesh',
      year: '2023',
      description: '6-lane widening of 50km stretch with advanced safety features and tunnel improvements',
      scope: 'Roads, drainage, utilities planning',
      image: '/project1.png'
    },
    {
      id: 2,
      title: 'Sidhi',
      // category: 'Urban Expressway',
      location: 'Madahya Pradesh',
      year: '2022',
      description: '19km rural road',
      scope: 'Roads, drainage, utilities planning',
      image: '/project2.2.png'
    },
    {
      id: 3,
      title: 'Satna',
      // category: 'Greenfield Expressway',
      location: 'Madhya Pradesh',
      year: '2023',
      description: '25km high-speed rural road',
      scope: 'Roads, drainage, utilities planning',
      image: '/project3.3.jpeg'
    },
    {
      id: 4,
      title: 'Vidisha ',
      // category: 'Metro Rail',
      location: 'Madaya Pradesh',
      year: '2024',
      description: '22km high-speed rural road',
      scope: 'Roads, drainage, and utilities planning',
      image: '/project4..jpeg'
    },
    {
      id: 5,
      title: 'Kydganj Prayagraj',
      // category: 'Highway Expansion',
      location: 'Prayagraj, Uttar Pradesh',
      year: '2022',
      description: 'Complete PWD Limation and development of Kydganj area',
      scope: 'Roads, drainage, utilities planning',
      image: '/project5.png'
    },
  ];

  // Machinery & Plants
  const machineryEquipment = [
    {
      id: 1,
      name: 'Dumfer',
      type: 'Production Equipment',
      quantity: 10,
      features: ['Computerized control', 'Automatic weighing', 'Dust control system'],
      image: '/machine/dumfer.jpg',
      icon: '🏭',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      name: 'Hot Mixing Plant',
      type: 'Tunneling Equipment',
      quantity: 1,
      features: ['EPB shield type', 'Automatic guidance', 'Segment erector'],
      image: '/machine/hot mixer plant.jpeg',
      icon: '🚇',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      name: 'JCB',
      type: 'Lifting Equipment',
      quantity: 3,
      features: ['Hydraulic system', 'Safety limiters', 'Remote control'],
      image: '/machine/jcb.jpeg',
      icon: '🏗️',
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 4,
      name: 'Road Roller',
      type: 'Road Construction',
      quantity: 2,
      features: ['Automatic leveling', 'Heated screed', 'Track system'],
      image: '/machine/road rollwe.jpg',
      icon: '🛣️',
      color: 'from-emerald-600 to-green-600'
    },
    {
      id: 5,
      name: 'Stone Crusher',
      type: 'Aggregate Production',
      quantity: 1,
      features: ['Track mounted', 'Multi-stage crushing', 'Dust suppression'],
      image: '/machine/stone cruser.jpg',
      icon: '⛏️',
      color: 'from-teal-600 to-cyan-600'
    },
    {
      id: 6,
      name: 'Loader',
      type: 'Concrete Placement',
      quantity: 2,
      features: ['Boom length 42m', 'Remote operation', 'Easy maintenance'],
      image: '/machine/loader.jpg',
      icon: '🚰',
      color: 'from-indigo-600 to-blue-600'
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Vidisha',
      category: 'National Highway',
      location: 'Madhya Pradesh',
      duration: '5 Months',
      budget: '₹4 Cr',
      status: 'Completed',
      statusColor: 'bg-emerald-500',
      textColor: 'text-emerald-600',
      description: '22km high-speed rural road',
      technologies: ['Advanced Pavement', 'Smart Toll System', 'Eco-friendly Materials'],
      image: '/project4..jpeg',
      imageFallback: '🛣️',
      stats: {
        length: '22 km'
      }
    },
 
  ];

  const projectStats = [
    { number: '50', label: 'Total Projects', suffix: '+', color: 'from-blue-500 to-cyan-500' },
    { number: '98', label: 'Success Rate', suffix: '%', color: 'from-emerald-500 to-green-500' },
    { number: '5', label: 'Years Experience', suffix: '+', color: 'from-purple-500 to-pink-500' },
    { number: '30', label: 'Expert Engineers', suffix: '+', color: 'from-orange-500 to-yellow-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0%)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-8 shadow-lg">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  PORTFOLIO
                </span>
              </span>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600">
                  Our Work
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Showcasing <span className="text-blue-600 font-semibold">5+ years</span> of excellence in building India&apos;s infrastructure
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {projectStats.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    <span>{stat.number}</span>
                    <span className="opacity-80">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                  <div className={`h-1 w-0 mx-auto mt-4 bg-gradient-to-r ${stat.color} rounded-full group-hover:w-12 transition-all duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-600 animate-pulse">Explore Projects</span>
            <div className="w-6 h-10 border-2 border-blue-600/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-700">PROJECT CATEGORIES</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Expertise</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diverse portfolio across various infrastructure domains
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                className="group relative overflow-hidden bg-white rounded-xl text-center border border-gray-200 hover:border-transparent transition-all duration-500 hover:scale-105 h-48 shadow-lg hover:shadow-2xl"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.bgColor}`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className={`font-semibold mb-2 text-lg ${category.textColor}`}>{category.title}</h3>
                  <div className="text-2xl font-bold text-gray-900 drop-shadow-sm">{category.count}+</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work - Completed Projects Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-emerald-700">COMPLETED PROJECTS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Success Stories</span>
            </h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              A showcase of successfully delivered infrastructure projects across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourWorkProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50"></div>
                  
                  {/* Image with fallback */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {project.year}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                     
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{project.description}</p>

                  {/* Scope of Work */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Scope of Work:</h4>
                    <p className="text-gray-600 text-sm">{project.scope}</p>
                  </div>

                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery & Plants Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              <span className="text-sm font-medium text-orange-700">MACHINERY & PLANTS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              State-of-the-Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Equipment</span>
            </h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Modern machinery and plants that power our construction excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {machineryEquipment.map((machine) => (
              <div
                key={machine.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-red-100/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">{machine.icon}</div>
                  </div>
                  
                  {/* Machine Image */}
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Quantity Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    {machine.quantity} Units
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold mb-3">
                      {machine.type}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{machine.name}</h3>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900">Features:</h4>
                    <ul className="space-y-2">
                      {machine.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-700">FEATURED PROJECTS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Landmark <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Achievements</span>
            </h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Selected projects that showcase our engineering excellence and innovation
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Project Image Side */}
                  <div className="relative h-64 lg:h-full lg:min-h-[500px] overflow-hidden">
                    {/* Background with gradient overlay */}
                    <div className="absolute inset-0">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.category === 'National Highway' ? 'from-blue-100' : 
                                                                          project.category === 'Metro Rail' ? 'from-indigo-100' :
                                                                          project.category === 'Industrial Complex' ? 'from-amber-100' :
                                                                          project.category === 'Bridge Construction' ? 'from-emerald-100' :
                                                                          project.category === 'Commercial Building' ? 'from-purple-100' :
                                                                          'from-teal-100'} to-white`}></div>
                      
                      {/* Placeholder with project icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl opacity-10">{project.imageFallback}</div>
                      </div>
                      
                      {/* Project Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={project.id <= 2}
                      />
                    </div>
                    
                    {/* Project Status */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className={`px-4 py-2 bg-gradient-to-r ${project.category === 'National Highway' ? 'from-blue-600 to-cyan-600' :
                                                                     project.category === 'Metro Rail' ? 'from-indigo-600 to-blue-600' :
                                                                     'from-emerald-600 to-green-600'} text-white rounded-full text-sm font-semibold shadow-lg`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Project Stats Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <div className="grid grid-cols-1 gap-4">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 shadow-lg">
                            <div className="text-xl font-bold text-gray-900 mb-1">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Project Details Side */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className={`inline-block px-4 py-2 ${project.category === 'National Highway' ? 'bg-blue-100 text-blue-700' :
                                                                     project.category === 'Metro Rail' ? 'bg-indigo-100 text-indigo-700' :
                                                                     project.category === 'Industrial Complex' ? 'bg-amber-100 text-amber-700' :
                                                                     'bg-emerald-100 text-emerald-700'} rounded-xl text-sm font-semibold mb-4 border ${project.category === 'National Highway' ? 'border-blue-200' :
                                                                     project.category === 'Metro Rail' ? 'border-indigo-200' :
                                                                     project.category === 'Industrial Complex' ? 'border-amber-200' :
                                                                     'border-emerald-200'}`}>
                          {project.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">{project.title}</h3>
                        <div className="flex items-center text-gray-600 mb-6">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-8 leading-relaxed text-lg">{project.description}</p>

                    {/* Project Info Cards */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors shadow-sm">
                        <div className="text-sm text-gray-600 mb-2">Duration</div>
                        <div className="text-2xl font-bold text-gray-900">{project.duration}</div>
                      </div>
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:border-emerald-300 transition-colors shadow-sm">
                        <div className="text-sm text-gray-600 mb-2">Budget</div>
                        <div className="text-2xl font-bold text-gray-900">{project.budget}</div>
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span className="text-sm font-medium text-purple-700">BY THE NUMBERS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Quantifying Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Impact</span>
            </h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Measurable contributions to India's infrastructure development
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { number: '250', label: 'Kilometers of Roads Built', suffix: ' km', icon: '🛣️', color: 'from-blue-500 to-cyan-500' },
              { number: '100', label: 'Jobs Created', suffix: ' +', icon: '👥', color: 'from-orange-500 to-red-500' },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
                <div className="relative bg-white rounded-2xl p-8 text-center border border-gray-200 group-hover:border-transparent shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="text-5xl mb-6">{stat.icon}</div>
                  <div className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <span>{stat.number}</span>
                    <span >{stat.suffix}</span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-50 border border-yellow-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
              <span className="text-sm font-medium text-yellow-700">AWARDS & RECOGNITION</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Accolades</span>
            </h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Recognition for our excellence in infrastructure development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                year: '2023',
                title: 'Best Infrastructure Company',
                organization: 'Construction Industry Awards',
                icon: '🏆',
                color: 'from-yellow-500/20 to-orange-500/20',
                borderColor: 'border-yellow-200'
              },
              {
                year: '2022',
                title: 'Excellence in Highway Construction',
                organization: 'National Highways Authority',
                icon: '🥇',
                color: 'from-blue-500/20 to-cyan-500/20',
                borderColor: 'border-blue-200'
              },
              {
                year: '2021',
                title: 'Safety Excellence Award',
                organization: 'Ministry of Road Transport',
                icon: '🛡️',
                color: 'from-emerald-500/20 to-green-500/20',
                borderColor: 'border-emerald-200'
              },
              {
                year: '2020',
                title: 'Innovation in Construction',
                organization: 'Indian Construction Forum',
                icon: '💡',
                color: 'from-purple-500/20 to-pink-500/20',
                borderColor: 'border-purple-200'
              },
              {
                year: '2019',
                title: 'Sustainable Development Award',
                organization: 'Green Building Council',
                icon: '🌱',
                color: 'from-teal-500/20 to-emerald-500/20',
                borderColor: 'border-teal-200'
              },
              {
                year: '2018',
                title: 'Fastest Growing Construction Company',
                organization: 'Economic Times Awards',
                icon: '📈',
                color: 'from-indigo-500/20 to-blue-500/20',
                borderColor: 'border-indigo-200'
              }
            ].map((award, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-yellow-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-5xl">{award.icon}</div>
                    <div className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 rounded-full text-sm font-semibold border border-yellow-200">
                      {award.year}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{award.title}</h3>
                  <p className="text-gray-600">{award.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full mb-8 shadow-lg">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="text-blue-700 font-semibold">START YOUR PROJECT</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
              Ready to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Together?</span>
            </h2>

            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can bring your infrastructure vision to life with our proven expertise and innovative solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-5 bg-transparent border-2 border-blue-600 text-gray-800 font-bold rounded-2xl hover:bg-blue-50 hover:border-blue-700 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 transition-all duration-500 text-lg shadow-lg">
                Download Portfolio PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;