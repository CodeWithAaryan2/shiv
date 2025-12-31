// app/about/page.tsx
"use client";

import React from 'react';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Header from '../Header/page';
import Footer from '../Footer/page';
import Image from 'next/image';
import { FaAward, FaUsers, FaHardHat, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt, FaCheckCircle, FaHandshake, FaTrophy } from 'react-icons/fa';

const About = () => {
  const achievements = [
    { number: '5+', label: 'Years of Excellence', icon: FaCalendarAlt, color: 'from-blue-500 to-cyan-500' },
    { number: '50+', label: 'Projects Completed', icon: FaHardHat, color: 'from-emerald-500 to-green-500' },
    { number: '50+', label: 'Happy Clients', icon: FaUsers, color: 'from-purple-500 to-pink-500' },
    { number: '20+', label: 'Expert Engineers', icon: FaAward, color: 'from-orange-500 to-yellow-500' },
  ];

  const coreValues = [
    {
      title: 'Integrity',
      description: 'We conduct all our business with honesty, transparency, and ethical practices.',
      icon: '🤝',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Quality',
      description: 'Committed to delivering superior quality in every project we undertake.',
      icon: '⭐',
      color: 'from-emerald-600 to-green-600'
    },
    {
      title: 'Innovation',
      description: 'Embracing new technologies and methods for better construction solutions.',
      icon: '💡',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Sustainability',
      description: 'Building with environmental consciousness and sustainable practices.',
      icon: '🌱',
      color: 'from-orange-600 to-yellow-600'
    },
  ];

  const teamMembers = [
    {
      name: 'Rajesh Kumar Pandey',
      position: 'Whole Time Director',
      expertise: ['Road Construction', 'Infrastructure Planning', 'All type Petroleum Product Trading', 'Experience related to Finance and handle purchase department'],
      image: '/founder/ceo...png'
    },
    {
      name: 'Abhishek Dwivedi',
      position: 'Managing Director',
      expertise: ['Road Construction Project', 'Mechanical Field', 'Machine Consulting', 'Technical Work'],
      image: '/founder/shivam1..png'
    },
    {
      name: 'Pankaj Kumar Pandey',
      position: 'Whole Time Director',
      expertise: ['Road Construction', 'Quality Control'],
      image: '/founder/pankaj.png'
    },
  ];

  const certifications = [
    'ISO 9001:20 Certified',
    'Government Approved Contractor (GST Registered)',
    'Bureau of Indian Standards (BIS) Certified',
    'National Highways Authority of India (NHAI) Approved',
    'Ministry of Road Transport & Highways Approved',
    'Environmental Compliance Certified',
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"shiv-enterprises"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

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
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  OUR STORY
                </span>
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Shiv Enterprises</span>
              </h1>

              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Building India&apos;s infrastructure with excellence, innovation, and trust since 2020
              </p>

              {/* Decorative Elements */}
              <div className="flex justify-center gap-4 mt-12">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ================= LEFT CONTENT ================= */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-700">
                  COMPANY OVERVIEW
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Building India’s Future Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Roads, Infrastructure & Energy
                </span>
              </h2>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Established in 2020, <strong>Shiv Enterprises</strong> is a
                  growing infrastructure and construction company delivering
                  high-quality road construction, large-scale infrastructure
                  development, and petroleum product supply across India.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our expertise spans highways, urban roads, industrial
                  infrastructure, and energy logistics. We focus on durability,
                  safety, and timely execution, ensuring every project meets
                  national standards and client expectations.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Alongside construction, we operate a nationwide petroleum
                  products supply network, supporting infrastructure, industrial,
                  and commercial clients with reliable fuel and material
                  distribution.
                </p>
              </div>

              {/* ===== MISSION & VISION ===== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

                <div className="relative group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-sm">
                    To deliver reliable road construction, infrastructure
                    development, and petroleum supply solutions through quality,
                    innovation, and operational excellence.
                  </p>
                </div>

                <div className="relative group bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-sm">
                    To be one of India’s most trusted infrastructure and energy
                    partners, contributing to sustainable national development.
                  </p>
                </div>

              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="aspect-[4/3] relative overflow-hidden">

                  {/* MAIN IMAGE */}
                  <img
                    src="/company.png"
                    alt="Shiv Enterprises Road Construction and Infrastructure"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent"></div>

                  {/* CENTER TEXT */}
                  

                  {/* TOP BADGE */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Infrastructure Experts
                  </div>

                  {/* BOTTOM BADGE */}
                  <div className="absolute bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                    PAN India Operations
                  </div>

                </div>
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl transform -rotate-3 animate-float">
                <div className="flex items-center gap-3">
                  <FaTrophy className="text-2xl" />
                  <div>
                    <div className="text-2xl font-bold">5+ Years</div>
                    <div className="text-xs opacity-90">
                      Industry Experience
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      


      {/* Achievements */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span className="text-sm font-medium text-purple-700">OUR MILESTONES</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Success Stories</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              One project at a time, one success after another
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                  style={{ backgroundImage: `linear-gradient(to right, ${achievement.color.split(' ')[1]}, ${achievement.color.split(' ')[3]})` }}>
                </div>

                <div className="relative bg-white rounded-xl p-8 text-center border border-gray-200 group-hover:border-transparent shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${achievement.color} mb-4 shadow-md`}>
                    <achievement.icon className="text-2xl text-white" />
                  </div>

                  <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                    {achievement.number}
                  </div>

                  <p className="text-gray-600 text-sm">{achievement.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-700">OUR PRINCIPLES</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Values</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and action at Shiv Enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="p-6 relative z-10">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team - Artistic Gallery Design with Larger Photos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Title Section */}
          <div className="text-center mb-20 relative">
            <div className="inline-block mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping"></div>
                <span className="text-sm font-semibold text-emerald-600 tracking-widest">LEADERSHIP TEAM</span>
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 relative">
              <span className="relative z-10">
                <span className="text-gray-900">Our</span>
                <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Leaders
                </span>
              </span>
            </h2>

            <p className="text-gray-600 max-w-md mx-auto">
              Visionaries shaping the future of construction
            </p>
          </div>

          {/* Floating Gallery Layout with Larger Photos */}
          <div className="relative max-w-7xl mx-auto">
            {/* Main Container with Grid Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

              {/* MD Card - Left Side */}
              <div className="lg:w-2/5 order-2 lg:order-1">
                <div className="relative h-[450px] w-full max-w-[450px] mx-auto lg:mx-0 lg:ml-auto group">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={teamMembers[1].image}
                      alt={teamMembers[1].name}
                      fill
                      sizes="(max-width: 768px) 100vw, (min-width: 1024px) 450px"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay - Shows on both mobile and desktop hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Name Card - Always shows on mobile, shows on hover for desktop */}
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                      <div className="transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                          {teamMembers[1].name}
                        </h3>
                        <p className="text-blue-300 font-medium text-lg lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          Managing Director
                        </p>

                        {/* Animated Line - Shows on hover */}
                        <div className="h-1.5 w-0 mx-auto mt-4 bg-gradient-to-r from-blue-400 to-cyan-400 lg:group-hover:w-32 transition-all duration-700 delay-150"></div>
                      </div>
                    </div>


                    {/* Floating Decorative Element */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>

              {/* CEO - Center Stage */}
              <div className="lg:w-3/5 order-1 lg:order-2 z-10">
                <div className="relative h-[600px] w-full max-w-[600px] mx-auto group">
                  <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-3xl">
                    {/* Main Image */}
                    <div className="relative h-full w-full">
                      <Image
                        src={teamMembers[0].image}
                        alt={teamMembers[0].name}
                        fill
                        sizes="(max-width: 768px) 100vw, (min-width: 1024px) 600px"
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        priority
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Name Card */}
                      <div className="absolute bottom-0 left-0 right-0 p-12">
                        <div className="text-center transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                            {teamMembers[0].name}
                          </h3>
                          <p className="text-emerald-300 font-medium text-lg lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            Whole Time Director
                          </p>

                          {/* Animated Line */}
                          <div className="h-1.5 w-0 mx-auto mt-6 bg-gradient-to-r from-emerald-400 to-teal-400 lg:group-hover:w-40 transition-all duration-700 delay-150"></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge */}


                    {/* Glow Effect */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>

              {/* Director Card - Right Side */}
              <div className="lg:w-2/5 order-3">
                <div className="relative h-[450px] w-full max-w-[450px] mx-auto lg:mx-0 lg:mr-auto group">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={teamMembers[2].image}
                      alt={teamMembers[2].name}
                      fill
                      sizes="(max-width: 768px) 100vw, (min-width: 1024px) 450px"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Name Card */}
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                      <div className="transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                          {teamMembers[2].name}
                        </h3>
                        <p className="text-purple-300 font-medium text-lg lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          Whole Time Director
                        </p>

                        {/* Animated Line */}
                        <div className="h-1.5 w-0 mx-auto mt-4 bg-gradient-to-r from-purple-400 to-pink-400 lg:group-hover:w-32 transition-all duration-700 delay-150"></div>
                      </div>
                    </div>

                    {/* Floating Badge */}


                    {/* Floating Decorative Element */}
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Stats Bar */}


          {/* Mobile-Only Instructions (Hidden on Desktop) */}
          <div className="lg:hidden text-center mt-8">
            <p className="text-gray-500 text-sm">Tap on images to view details</p>
          </div>



          {/* Leadership Quote */}
          <div className="max-w-4xl mx-auto mt-24 text-center">
            <div className="relative group cursor-pointer">
              <div className="text-6xl text-emerald-100 absolute -top-8 left-1/2 transform -translate-x-1/2 group-hover:text-emerald-200 transition-colors duration-300">"</div>
              <p className="text-2xl lg:text-3xl text-gray-800 italic font-light relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                Great vision without great people is irrelevant.
                <br />
                <span className="text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors duration-300">Together, we build futures.</span>
              </p>
              <div className="text-6xl text-emerald-100 absolute -bottom-12 left-1/2 transform -translate-x-1/2 group-hover:text-emerald-200 transition-colors duration-300">"</div>
            </div>
          </div>
        </div>
      </section>




      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-emerald-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full mb-8 shadow-lg">
                <FaHandshake className="text-blue-600" />
                <span className="text-blue-700 font-semibold">LET&apos;S BUILD TOGETHER</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Shiv Enterprises</span>
              </h2>

              <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
                Join hands with us for your next construction project. Experience excellence,
                reliability, and innovation in every aspect of our work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-100 rounded-xl shadow-sm">
                    <FaMapMarkerAlt className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Main Office Address</h3>
                </div>

                <p className="text-gray-700 mb-6">
                  G3 Mahaveer Apartment <br />
                  Patrika Marg (Behind Jagriti Hospital) <br />
                   Civil Lines Prayagraj 211001
                </p>
              </div>

              <div className="relative group bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-purple-100 rounded-xl shadow-sm">
                    <FaEnvelope className="text-2xl text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Email Address</h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>General: <span className="font-semibold">shiventerprises3366@gmail.com</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Projects / Support: <span className="font-semibold">contact@shiventerprisees.com</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button data-cal-namespace="shiv-enterprises"
    data-cal-link="abhishek-dwivedi-uvvvno/shiv-enterprises"
    
    data-cal-config='{"layout":"month_view"}' className="group px-12 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 text-white font-bold rounded-xl hover:rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300 text-lg shadow-lg">
                <span className="flex items-center gap-2 justify-center">
                  Schedule a Meeting
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animation for floating effect */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-3deg);
          }
          50% {
            transform: translateY(-10px) rotate(-3deg);
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

export default About;