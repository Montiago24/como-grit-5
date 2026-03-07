import { useState } from 'react';
import { Phone, Mail, MapPin, Building2, Share2, CircleCheck as CheckCircle2 } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    subject: '',
    message: '',
    gdprConsent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      alert('Please accept the GDPR consent to continue.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        subject: '',
        message: '',
        gdprConsent: false
      });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const contactInfo = {
    companyName: "COMO GRIT d.o.o",
    address: "Rooseveltova 12, 21000 Split, Croatia",
    phone: "+385 1 234 5678",
    email: "service@comogrit.com",
    socialMedia: [
      { name: "Instagram", platform: "instagram", url: "https://instagram.com/comogrit", icon: "instagram" },
      { name: "Facebook", platform: "facebook", url: "https://facebook.com/comogrit", icon: "facebook" },
      { name: "WhatsApp", platform: "whatsapp", url: "https://wa.me/385912345678", icon: "whatsapp" },
      { name: "Viber", platform: "viber", url: "viber://chat?number=385912345678", icon: "viber" }
    ]
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

          <div className="text-center mb-16 sm:mb-24 animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 animate-expandWidth"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
              Contact our team to discuss your metal fabrication project or schedule a consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16">

            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl shadow-lg p-6 sm:p-8 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-slideInLeft">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="w-1 h-6 bg-blue-600 animate-expandHeight"></div>
                Send us a message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center animate-bounceIn">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <div className="animate-fadeInUp" style={{ animationDelay: '0.35s' }}>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:outline-none transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="animate-fadeInUp" style={{ animationDelay: '0.45s' }}>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:outline-none transition-all duration-300"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="animate-fadeInUp" style={{ animationDelay: '0.55s' }}>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us more about your fabrication project..."
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 border-slate-300 bg-white accent-blue-600 cursor-pointer"
                      required
                    />
                    <label htmlFor="gdprConsent" className="text-xs sm:text-sm text-slate-600 leading-relaxed cursor-pointer">
                      I agree to the processing of my personal data in accordance with GDPR regulations.
                      My data will only be used to respond to this inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 mt-6 animate-fadeInUp animate-pulse-soft"
                    style={{ animationDelay: '0.65s' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl shadow-lg p-6 sm:p-8 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-slideInRight">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="w-1 h-6 bg-blue-600 animate-expandHeight"></div>
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-fadeInUp" style={{ animationDelay: '0.35s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center animate-scaleIn" style={{ animationDelay: '0.4s' }}>
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">{contactInfo.companyName}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">{contactInfo.registrationNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fadeInUp" style={{ animationDelay: '0.45s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center animate-scaleIn" style={{ animationDelay: '0.5s' }}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Address</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fadeInUp" style={{ animationDelay: '0.55s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center animate-scaleIn" style={{ animationDelay: '0.6s' }}>
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fadeInUp" style={{ animationDelay: '0.65s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center animate-scaleIn" style={{ animationDelay: '0.7s' }}>
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6 mt-6 animate-fadeInUp" style={{ animationDelay: '0.75s' }}>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <Share2 className="w-5 h-5 text-blue-600" />
                    Social Media Contacts
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {contactInfo.socialMedia.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg p-4 border-2 border-slate-200 hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col items-center gap-2 animate-fadeInUp group"
                        style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          social.platform === 'instagram' ? 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500' :
                          social.platform === 'facebook' ? 'bg-blue-600' :
                          social.platform === 'whatsapp' ? 'bg-green-500' :
                          'bg-purple-600'
                        } group-hover:scale-110 transition-transform`}>
                          {social.platform === 'instagram' && (
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          )}
                          {social.platform === 'facebook' && (
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          )}
                          {social.platform === 'whatsapp' && (
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                          )}
                          {social.platform === 'viber' && (
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602 1.17c.79.25 1.24-.499 1.99-1.299l1.4-1.58c3.85.32 6.8-.419 7.14-.529.78-.25 5.181-.811 5.901-6.652.74-6.031-.36-9.831-2.34-11.551l-.01-.002c-.6-.55-3.08-2.32-8.81-2.32h-.01zm.05 1.57h.01c5.16 0 7.43 1.519 7.86 1.96 1.73 1.5 2.66 4.72 2.02 10.1-.62 5.17-4.57 5.81-5.23 6.02-.29.09-3.07.79-6.52.49 0 0-2.57 3.12-3.38 3.94-.13.14-.26.16-.38.13-.15-.05-.19-.24-.19-.53l.02-4.19c-4.54-1.28-4.3-6.37-4.28-9.02.06-2.65.59-4.84 2.03-6.29C5.25 2.033 9.08 1.716 11.448 1.57zm-.47 2.46c-.27.01-.48.23-.47.5.01.26.23.47.5.46 2.09-.08 4.14.68 5.64 2.11 1.5 1.43 2.37 3.45 2.38 5.54 0 .27.22.49.49.49.27 0 .49-.22.49-.49-.01-2.32-.97-4.55-2.64-6.14-1.67-1.59-3.97-2.44-6.32-2.34l-.07-.13zm.38 1.65c-.27.01-.48.23-.47.5.01.26.23.47.5.46 1.57-.06 3.05.53 4.17 1.58 1.12 1.05 1.79 2.5 1.85 4.07 0 .27.23.49.5.48.27 0 .49-.22.49-.49-.07-1.81-.88-3.49-2.22-4.69-1.34-1.2-3.11-1.85-4.94-1.78l.12-.13zm.35 1.6c-.26.01-.47.22-.47.48 0 .27.21.49.48.49.88-.03 1.73.29 2.38.87.65.58 1.03 1.39 1.07 2.27 0 .27.22.49.49.49.27 0 .49-.22.49-.49-.05-1.13-.57-2.19-1.44-2.94-.87-.75-2-1.16-3.17-1.13l.17-.04zm-3.72 1.27c-.38.09-.72.43-1.28 1.05-.5.55-.93 1.14-.9 1.81.03.67.37 2.1 2.38 4.17 2.01 2.07 3.41 2.44 4.08 2.47.67.03 1.28-.4 1.83-.9.62-.56.96-.9 1.05-1.28.1-.38-.14-.76-.53-1.05l-1.5-1.05c-.4-.28-.87-.24-1.15.09l-.64.68c-.24.25-.64.31-.99.13-.36-.18-1.27-.66-2.13-1.53-.86-.87-1.33-1.75-1.53-2.12-.19-.36-.12-.75.13-.99l.68-.65c.33-.28.37-.75.09-1.15l-1.05-1.5c-.2-.28-.52-.41-.83-.36v.18z"/>
                            </svg>
                          )}
                        </div>
                        <span className="text-slate-900 font-semibold text-xs">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl shadow-lg overflow-hidden hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] animate-slideInUp">
            <div className="p-6 sm:p-8 border-b-2 border-slate-200 bg-white">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 mb-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <MapPin className="w-6 h-6 text-blue-600" />
                Our Location
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">Rooseveltova 12, 21000 Split, Croatia</p>
            </div>
            <div className="w-full h-96 bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1446.9875022032882!2d16.451569238962932!3d43.50285698829211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRooseveltova%2012%2C%2021000%20Split%2C%20Croatia!5e0!3m2!1sen!2s!4v1772888431955!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="COMO GRIT Location - Rooseveltova 12, Split, Croatia"
                className="w-full h-full"
              ></iframe>
              
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }

        @keyframes expandHeight {
          from {
            height: 0;
          }
          to {
            height: 24px;
          }
        }

        @keyframes pulseSoft {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInUp {
          animation: slideInUp 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-expandWidth {
          animation: expandWidth 0.8s ease-out forwards;
        }

        .animate-expandHeight {
          animation: expandHeight 0.6s ease-out forwards;
        }

        .animate-pulse-soft {
          animation: pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}} />
    </div>
  );
}
