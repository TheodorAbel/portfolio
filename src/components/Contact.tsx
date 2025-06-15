import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 text-center max-w-3xl leading-relaxed">
            Have a question or want to work together? Feel free to contact me using the form below
            or through any of the provided contact methods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Me a Message</h3>
            
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.success 
                  ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800' 
                  : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="What is this about?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-none bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-1">Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    abeltheodor12@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-1">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    251993099396
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Availability</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Currently available for internship opportunities. I'm looking for roles where I can contribute, learn, and grow.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Available for remote work
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Open to relocation for the right opportunity
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Immediate start possible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;