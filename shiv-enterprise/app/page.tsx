"use client";

import { useEffect, useState } from 'react';
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import Image from 'next/image';
import Link from 'next/link';

// Construction images array (replace with your actual image paths)
const constructionImages = [
  '/background/construction1.jpg',
  '/background/construction2.jpg',
  '/background/construction3.webp',
  '/background/construction4.webp',
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Loading screen animation
  useEffect(() => {
    const languages = [
      "नमस्ते", "Namaste", "வணக்கம்", "नमस्कार",
      "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "હેલો", "ନମସ୍କାର", "নমস্কার",
      "ನಮಸ್ಕಾರ", "നമസ്തേ", "హలో"
    ];

    let currentLang = 0;
    const textElement = document.getElementById('loading-text');
    const loadingDuration = 1500;

    const interval = setInterval(() => {
      if (textElement) {
        textElement.style.opacity = '0';
        setTimeout(() => {
          textElement.textContent = languages[currentLang];
          textElement.style.opacity = '1';
          currentLang = (currentLang + 1) % languages.length;
        }, 150);
      }
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
    }, loadingDuration);

    return () => clearInterval(interval);
  }, []);

  // Hero image slideshow
  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === constructionImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-48 h-48 rounded-full border-8 border-transparent border-l-blue-600 border-r-emerald-500 animate-spin"></div>
          </div>

          <div className="mt-8">
            <h2
              id="loading-text"
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent"
            >
              नमस्ते
            </h2>
            <div className="mt-2 text-blue-700 text-sm">Shiv Enterprises</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header />

      <section className="relative min-h-[100svh] sm:min-h-screen overflow-hidden flex items-center">

        {/* BACKGROUND IMAGE SLIDESHOW */}
        <div className="absolute inset-0">
          {constructionImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={image}
                alt={`Shiv Enterprises Construction Project ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* RESPONSIVE GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:from-white sm:via-white/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-xl sm:max-w-3xl">

            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-blue-50 border border-blue-100">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 tracking-wide">
                BUILDING INDIA • SINCE 2020
              </span>
            </div>

            {/* HEADING */}
            <h1 className="leading-tight">
              <span className="block text-[42px] sm:text-[72px] md:text-[96px] font-extrabold text-blue-700">
                SHIV
              </span>
              <span className="block mt-2 text-[16px] sm:text-[26px] md:text-[36px] tracking-[0.25em] sm:tracking-[0.35em] font-semibold text-gray-900">
                ENTERPRISES
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-gray-700 max-w-md sm:max-w-xl leading-relaxed">
              Trusted infrastructure and construction company delivering roads,
              materials, and engineering excellence across India.
            </p>

            {/* SLIDER DOTS */}
            <div className="mt-10 sm:mt-14 flex gap-3">
              {constructionImages.map((_, index) => (
                <button
                  key={index}
                  aria-label={`View background image ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === currentImageIndex
                      ? "w-10 bg-blue-600"
                      : "w-3 bg-gray-400/60 hover:bg-gray-600"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* EXPERIENCE CARD — MOBILE SAFE */}
        <div className="hidden sm:block absolute bottom-20 left-6 bg-white rounded-2xl px-6 py-5 shadow-2xl border border-gray-200 z-20">
          <div className="text-3xl font-extrabold text-gray-900">5+</div>
          <div className="text-sm text-gray-600 tracking-wide">
            Years of Excellence
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-600">Scroll</span>
            <div className="w-6 h-10 rounded-full border border-gray-400 flex justify-center">
              <div className="w-1 h-3 bg-gray-800 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50', suffix: '+', label: 'Projects Delivered', icon: '✓', color: 'from-blue-500 to-cyan-500' },
              { number: '5', suffix: '+', label: 'Years Experience', icon: '📅', color: 'from-emerald-500 to-green-500' },
              { number: '50', suffix: '+', label: 'Happy Clients', icon: '👥', color: 'from-purple-500 to-pink-500' },
              { number: '20', suffix: '+', label: 'Expert Engineers', icon: '⭐', color: 'from-orange-500 to-yellow-500' }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                  style={{ backgroundImage: `linear-gradient(to right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})` }}>
                </div>
                <div className="relative bg-white backdrop-blur-sm rounded-xl p-8 text-center border border-gray-200 group-hover:border-transparent shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${stat.color} mb-6 shadow-md`}>
                    <span className="text-2xl text-white">{stat.icon}</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
                    {stat.number}
                    <span className="text-blue-600">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              OUR EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Core <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive construction solutions tailored to your vision and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Road Construction',
                description: 'Highway networks, rural roads, expressways with advanced technology and sustainable practices',
                icon: '🛣️',
                color: 'from-blue-600 to-cyan-600',

              },
              {
                title: 'Material Trading',
                description: 'We supply all types of petroleum products, including Bitumen, LDO (Light Diesel Oil), and Emulsion, with reliable nationwide delivery.',
                icon: '🚚',
                color: 'from-orange-600 to-red-600',
              },
              {
                title: 'Expert Consultancy',
                description: 'End-to-end project management, technical consultation, and quality control services',
                icon: '👨‍💼',
                color: 'from-indigo-600 to-blue-600',
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center transform rotate-0 group-hover:rotate-45 transition-transform duration-500 shadow-md`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>



                  <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:text-blue-700 transition-colors duration-300">
                    <span>Explore Service</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                ABOUT US
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Building <span className="text-blue-600">Legacies</span> Since 2020
              </h2>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Shiv Enterprises stands as a beacon of excellence in India&apos;s construction industry.
                With over 5 years of experience, we have shaped skylines and connected cities through
                innovative infrastructure solutions.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { label: 'Project Success Rate', value: '98%', color: 'text-emerald-600' },
                  { label: 'On-time Delivery', value: '95%', color: 'text-blue-600' },
                  { label: 'Client Retention', value: '90%', color: 'text-purple-600' },
                  { label: 'Repeat Business', value: '85%', color: 'text-cyan-600' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  'ISO 9001:2020 Certified Quality Management',
                  'Government Approved & Licensed Contractor',
                  'Advanced Construction Technology & Equipment',
                  'Skilled Workforce & Expert Project Management',
                  'Sustainable & Eco-friendly Practices',
                  '24/7 Support & Maintenance Services'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-emerald-100 relative overflow-hidden">
                  <Image src="/logo.png" alt="About Shiv Enterprises" width={1000} height={1000} className="rounded-2xl shadow-lg" />

                  <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Established 2020
                  </div>
                  <div className="absolute bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    PAN India
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-8 rounded-2xl shadow-2xl transform rotate-3">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50/30">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full shadow-sm">
              <div className="relative">
                <span className="absolute w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></span>
                <span className="relative w-2 h-2 bg-blue-600 rounded-full"></span>
              </div>
              <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                OUR PORTFOLIO
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Engineering
              </span>
              <span className="text-blue-600">.</span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Excellence
              </span>
              <span className="text-purple-600">.</span>
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed font-light">
              Transforming India's landscape through innovative infrastructure solutions that connect, empower, and inspire growth across the nation.
            </p>
          </div>

          {/* Projects Grid - New Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {/* Featured Project - Larger Card */}
            <div className="lg:col-span-8 group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-blue-500/20">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 z-10"></div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_45%,rgba(59,130,246,0.05)_50%,transparent_55%)] bg-[length:300%_300%] animate-shimmer"></div>

                <Image
                  src="/project4..jpeg"
                  alt="Delhi-Mumbai Expressway"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold">
                      Featured Project
                    </span>
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                      2024 • 5 Months
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-3">Vidisha</h3>
                  <p className="text-gray-200 mb-6 max-w-2xl">
                    22km high-speed rural road
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {['22 km', '₹2 Cr'].map((stat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-medium">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Icon */}

              </div>
            </div>

            {/* Side Projects */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                {
                  image: '/project2.2.png',
                  title: 'Sidhi'
                },
                {
                  image: '/project3.3.jpeg',
                  title: 'Satna'
                }
              ].map((project, index) => (
                <div key={index} className="group">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">


                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">

                      <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>


                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[

              {
                image: '/project5.png',
                title: 'Kydganj Prayagraj',
                location: 'Prayagraj, Uttar Pradesh',
                year: '2022',
                duration: '20 Months',
                color: 'from-indigo-500 to-blue-500',
              }
            ].map((project, index) => (
              <div key={index} className="group">
                <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-500 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 z-10`}></div>

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />


                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <div className="text-sm text-gray-500">
                        {project.year}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{project.location}</span>
                    </div>

                    {/* Stats */}


                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">Project Progress</span>
                        <span className="text-green-600 font-semibold">100% Completed</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${project.color} rounded-full w-full`}></div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <Link href="/components/Portfolio">
              <button className="group relative px-10 py-5 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full overflow-hidden transition-all duration-500 hover:text-white shadow-xl hover:shadow-blue-500/30">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Border Animation */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>

                <span className="relative flex items-center gap-3">
                  <span>Explore All Projects</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>

                {/* Shine Effect */}
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[150%] transition-all duration-1000"></div>
              </button>
            </Link>

            {/* Stats Bar */}
            <div className="mt-12 pt-8 border-t border-gray-200/50">
              <div className="flex flex-wrap justify-center gap-12">
                {[
                  { value: '50+', label: 'Projects Completed' },
                  { value: '₹100 Cr+', label: 'Total Investment' },
                  { value: '25+', label: 'Cities Impacted' },
                  { value: '100+', label: 'Team Members' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Add this to your global CSS or Tailwind config for the shimmer animation */}
        <style jsx>{`
    @keyframes shimmer {
      0% { background-position: -100% 0; }
      100% { background-position: 200% 0; }
    }
    .animate-shimmer {
      animation: shimmer 3s infinite linear;
    }
  `}</style>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Client <span className="text-emerald-600">Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Sharma',
                role: 'Project Director, NHAI',
                content: 'Shiv Enterprises delivered the highway project ahead of schedule with exceptional quality. Their attention to detail is remarkable.',
                rating: 5
              },
              {
                name: 'Priya Patel',
                role: 'CEO, Urban Developers Ltd.',
                content: 'Working with Shiv Enterprises was a game-changer for our smart city project. Their expertise and professionalism are unmatched.',
                rating: 5
              },
              {
                name: 'Arjun Singh',
                role: 'Infrastructure Manager',
                content: 'The bridge construction was handled with utmost precision. Their team\'s dedication to safety and quality is commendable.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-500 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>

                <p className="text-gray-700 mb-8 italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full text-lg font-semibold mb-8 shadow-md">
              LET&apos;S BUILD TOGETHER
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Transform</span> Your Vision?
            </h2>

            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with India&apos;s leading construction experts. From concept to completion,
              we deliver excellence at every stage.
            </p>


            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: '24/7 Support', value: 'Always Available' },
                { label: 'Free Quote', value: 'No Obligation' },
                { label: 'Expert Team', value: '50+ Engineers' },
                { label: 'Timely Delivery', value: 'Guaranteed' }
              ].map((item, idx) => (
                <div key={idx} className="text-gray-600">
                  <div className="text-sm mb-1">{item.label}</div>
                  <div className="text-lg font-semibold text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}