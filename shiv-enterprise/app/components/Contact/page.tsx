"use client";

import React, { useState } from "react";
import Header from "../Header/page";
import Footer from "../Footer/page";
import IndiaMap from "./IndiaMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [quoteData, setQuoteData] = useState({
    projectName: "",
    projectLocation: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    description: "",
    contactName: "",
    contactEmail: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [activeTab, setActiveTab] = useState("form");
  const [statusMessage, setStatusMessage] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Contact info
  const contactInfo = [
    { icon: "📞", title: "Call Us", details: ["+91 98765 43210", "+91 98765 43211"], color: "blue" },
    { icon: "✉️", title: "Email Us", details: ["contact@shiventerprisees.com"], color: "emerald" },
    { icon: "🏢", title: "Visit Us", details: ["Shiv Enterprises HQ", "Gurugram, Haryana"], color: "purple" },
    { icon: "⏰", title: "Hours", details: ["Mon-Fri: 9AM-7PM", "Sat: 10AM-5PM"], color: "orange" },
  ];

  const budgetRanges = [
    "₹5 Lakh - ₹10 Lakh",
    "₹10 Lakh - ₹25 Lakh", 
    "₹25 Lakh - ₹50 Lakh",
    "₹50 Lakh - ₹1 Crore",
    "₹1 Crore - ₹5 Crore",
    "₹5 Crore+"
  ];

  const timelines = [
    "1-3 Months",
    "3-6 Months",
    "6-12 Months",
    "12-24 Months",
    "24+ Months"
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (activeTab === "form") {
      if (!formData.name.trim()) errors.name = "Name is required";
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Invalid email address";
      }
      if (!formData.phone.trim()) {
        errors.phone = "Phone is required";
      } else if (!/^[\d\s\+\-\(\)]{10,}$/.test(formData.phone)) {
        errors.phone = "Invalid phone number (minimum 10 digits)";
      }
      if (!formData.projectType.trim()) errors.projectType = "Project type is required";
      if (!formData.message.trim()) errors.message = "Message is required";
    } else {
      if (!quoteData.projectName.trim()) errors.projectName = "Project name is required";
      if (!quoteData.projectLocation.trim()) errors.projectLocation = "Location is required";
      if (!quoteData.projectType.trim()) errors.projectType = "Project type is required";
      if (!quoteData.budgetRange.trim()) errors.budgetRange = "Budget range is required";
      if (!quoteData.timeline.trim()) errors.timeline = "Timeline is required";
      if (!quoteData.description.trim()) errors.description = "Description is required";
      if (!quoteData.contactName.trim()) errors.contactName = "Your name is required";
      if (!quoteData.contactEmail.trim()) {
        errors.contactEmail = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quoteData.contactEmail)) {
        errors.contactEmail = "Invalid email address";
      }
    }
    
    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (activeTab === "form") {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setQuoteData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setStatus("error");
      setStatusMessage("Please fix the errors in the form");
      return;
    }
    
    setLoading(true);
    setStatus(null);
    setStatusMessage("");
    setFormErrors({});

    try {
      const endpoint = '/api/send-email';
      const dataToSend = activeTab === "form" ? formData : quoteData;
      const type = activeTab === "form" ? "contact" : "quote";
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: type,
          data: dataToSend,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setStatusMessage(activeTab === "form" 
          ? "Message sent successfully! We'll contact you within 2 hours."
          : "Quote request received! We'll send your quote within 24 hours."
        );
        
        // Reset form data
        if (activeTab === "form") {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            projectType: "",
            message: "",
          });
        } else {
          setQuoteData({
            projectName: "",
            projectLocation: "",
            projectType: "",
            budgetRange: "",
            timeline: "",
            description: "",
            contactName: "",
            contactEmail: "",
          });
        }
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus("error");
      setStatusMessage(error.message || "Failed to submit. Please try again or contact us directly.");
    } finally {
      setLoading(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus(null);
        setStatusMessage("");
      }, 5000);
    }
  };

  const renderInput = (name: string, label: string, type = "text", required = true, placeholder = "", rows?: number) => {
    const value = activeTab === "form" 
      ? (formData as any)[name] 
      : (quoteData as any)[name];
    const error = formErrors[name];
    
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            rows={rows || 4}
            required={required}
            className={`w-full bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none shadow-sm`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            className={`w-full bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm`}
          />
        )}
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  };

  const renderSelect = (name: string, label: string, options: string[], required = true) => {
    const value = activeTab === "form" 
      ? (formData as any)[name] 
      : (quoteData as any)[name];
    const error = formErrors[name];
    
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          className={`w-full bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm appearance-none`}
        >
          <option value="">Select {label}</option>
          {options.map((option, idx) => (
            <option key={idx} value={option}>{option}</option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  };

  const renderQuoteForm = () => (
    <form onSubmit={handleSubmit} className="space-y-5">
      {renderInput("projectName", "Project Name", "text", true, "e.g., City Mall Construction")}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {renderInput("projectLocation", "Project Location", "text", true, "e.g., Mumbai, Maharashtra")}
        {renderSelect("projectType", "Project Type", [
          "Road Construction", "Bridge & Flyover", "Commercial Building", 
          "Residential Complex", "Industrial Plant", "Smart City Project", 
          "Infrastructure Development"
        ])}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {renderSelect("budgetRange", "Budget Range", budgetRanges)}
        {renderSelect("timeline", "Timeline", timelines)}
      </div>

      {renderInput("description", "Project Description", "textarea", true, "Brief description of your project requirements, goals, and any specific needs...")}

      <div className="pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Your Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {renderInput("contactName", "Your Name", "text", true, "John Doe")}
          {renderInput("contactEmail", "Email Address", "email", true, "john@example.com")}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 flex items-center justify-center gap-3 shadow-lg ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"
        }`}
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Getting Quote...</span>
          </>
        ) : (
          <>
            <span>Get Instant Quote</span>
            <span className="text-xl">💰</span>
          </>
        )}
      </button>
    </form>
  );

  const renderContactForm = () => (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {renderInput("name", "Full Name", "text", true, "John Doe")}
        {renderInput("email", "Email Address", "email", true, "john@example.com")}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {renderInput("phone", "Phone Number", "tel", true, "+91 98765 43210")}
        {renderInput("company", "Company Name", "text", false, "Your Company")}
      </div>

      {renderSelect("projectType", "Project Type", [
        "Road Construction", "Industrial Plant", "Smart City Project",
        "Infrastructure Development", "Material Supply"
      ])}

      {renderInput("message", "Project Details", "textarea", true, "Tell us about your project requirements, timeline, budget, etc.", 5)}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 flex items-center justify-center gap-3 shadow-lg ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"
        }`}
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Submit Project Enquiry</span>
            <span className="text-xl">→</span>
          </>
        )}
      </button>
    </form>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0%)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
        
        {/* Floating elements */}
        {['💻', '📱', '🏗️', '🚧', '🏢', '📐'].map((icon, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {icon}
          </div>
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">GET QUOTE & CONTACT</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                Get Your Quote
              </span>
              <span className="block text-gray-900">Or Contact Us</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                Today
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you need a quick quote or want to discuss your project in detail, we're here to help.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { value: "2", label: "Hour Quote", suffix: "hr", icon: "⚡", color: "from-blue-500 to-cyan-500" },
                { value: "Free", label: "Consultation", suffix: "", icon: "🎯", color: "from-emerald-500 to-green-500" },
                { value: "98", label: "Accuracy", suffix: "%", icon: "📊", color: "from-purple-500 to-pink-500" },
                { value: "150+", label: "Quotes", suffix: "", icon: "💰", color: "from-orange-500 to-yellow-500" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                  <div className={`text-2xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}<span className={`${stat.suffix ? 'text-blue-600' : ''}`}>{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Section */}
            <div className="lg:sticky lg:top-8">
              {/* Tabs */}
              <div className="flex mb-8 bg-gray-100 rounded-2xl p-1 shadow-inner">
                <button
                  onClick={() => {
                    setActiveTab("form");
                    setFormErrors({});
                    setStatus(null);
                    setStatusMessage("");
                  }}
                  className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-300 shadow-sm ${
                    activeTab === "form"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>📧</span>
                    <span>Contact Form</span>
                  </span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab("quote");
                    setFormErrors({});
                    setStatus(null);
                    setStatusMessage("");
                  }}
                  className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-300 shadow-sm ${
                    activeTab === "quote"
                      ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>💰</span>
                    <span>Get Quote</span>
                  </span>
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3 text-gray-900">
                    {activeTab === "form" ? (
                      <>Start Your <span className="text-blue-600">Project</span></>
                    ) : (
                      <>Get Instant <span className="text-emerald-600">Quote</span></>
                    )}
                  </h2>
                  <p className="text-gray-600">
                    {activeTab === "form" 
                      ? "Fill out the form below and our experts will contact you within 2 hours."
                      : "Get a detailed quote for your project. We'll provide pricing within 24 hours."
                    }
                  </p>
                </div>

                {/* Status Messages */}
                {status && (
                  <div className={`mb-6 p-4 rounded-xl border ${
                    status === "success" 
                      ? "bg-gradient-to-r from-emerald-100 to-green-100 border-emerald-200"
                      : "bg-gradient-to-r from-red-100 to-pink-100 border-red-200"
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        status === "success" ? "bg-emerald-500" : "bg-red-500"
                      }`}>
                        <span className="text-white">
                          {status === "success" ? "✓" : "!"}
                        </span>
                      </div>
                      <div>
                        <div className={`font-semibold ${
                          status === "success" ? "text-emerald-700" : "text-red-700"
                        }`}>
                          {status === "success" 
                            ? (activeTab === "form" 
                                ? "Message Sent Successfully!"
                                : "Quote Request Received!")
                            : "Submission Failed!"
                          }
                        </div>
                        <div className="text-sm text-gray-600">
                          {statusMessage}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Content */}
                {activeTab === "form" ? renderContactForm() : renderQuoteForm()}

                {activeTab === "quote" && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">💡</div>
                      <div className="text-sm">
                        <div className="font-medium text-amber-700 mb-1">Pro Tip</div>
                        <div className="text-gray-600">
                          Provide detailed project requirements for the most accurate quote.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center gap-2">
                  <span className="text-blue-500">🔒</span>
                  Your information is secure. We never share your data with third parties.
                </p>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3 text-gray-900">
                  Our Pan-India <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Network</span>
                </h2>
                <p className="text-gray-600">
                  Strategically located offices across major Indian cities. Click on any city to explore our presence.
                </p>
              </div>

              {/* Interactive Map */}
              <div className="relative">
                <IndiaMap />
                
                {/* Map Overlay Info */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">7+</div>
                    <div className="text-sm text-gray-600">Cities</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">4</div>
                    <div className="text-sm text-gray-600">States</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">150+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
                    <div className="text-2xl font-bold text-cyan-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 via-white to-cyan-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Need Immediate Assistance?</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+918563019297"
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-center shadow-md"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>📞</span>
                        <span>Call Now</span>
                      </span>
                    </a>
                    <a
                      href="mailto:aaryanpandeyop@gmail.com"
                      className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 text-center shadow-md"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>✉️</span>
                        <span>Email Directly</span>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Contact Info Cards */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <div className="text-2xl mb-2">📧</div>
                    <div className="font-medium text-gray-900 mb-1">Email Support</div>
                    <div className="text-sm text-blue-600">contact@shiventerprisees.com</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <div className="text-2xl mb-2">📍</div>
                    <div className="font-medium text-gray-900 mb-1">Head Office</div>
                    <div className="text-sm text-gray-600">Prayagraj, Uttar Pradesh</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;