import React from 'react';
import { ShieldCheck, Cpu, Clock, Check } from 'lucide-react';
import AboutHero from '../../assets/image17.webp';
import service1 from '../../assets/image16.webp';
import service2 from '../../assets/image14.webp';
import service3 from '../../assets/image4.webp';

const About = () => {
  const features = [
    {
      title: "Uncompromising Quality",
      description: "We use top-of-the-line equipment and certified materials to ensure every component meets the highest industry standards.",
      image: service1,
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Technical Expertise",
      description: "Our experienced team of professionals ensures optimal solutions for every project, from simple parts to complex structures.",
      image: service2,
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Fast and Reliable Delivery",
      description: "We respect strict deadlines and guarantee efficiency through optimized production processes and modern technological solutions.",
      image: service3,
      icon: <Clock className="w-6 h-6 text-blue-600" />
    }
  ];

  const highlights = ["Professionalism", "Quality", "Precision", "Experience"];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-[100px]">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Experts in Metal Processing</h1>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
                <span className="fi fi-gb text-2xl"></span>
              </div>

              <div className="text-base text-slate-600 leading-7 space-y-4 mb-8">
                <p>COMO GRIT is a Croatian industrial company dedicated to delivering reliable and high-quality metal processing and manufacturing solutions. Founded with a strong passion for precision, craftsmanship, and engineering excellence, the company was established with a clear goal: to provide dependable industrial services and long-term value to partners and clients across different sectors. From the very beginning, our focus has been on combining skilled workmanship with modern technologies to ensure that every project meets the highest standards of quality and efficiency.</p>
                <p>Headquartered in Croatia, COMO GRIT has steadily developed its capabilities in metal processing, fabrication, machining, and aluminum recovery. What started as a small and ambitious operation has grown into a dedicated team of professionals who share a common commitment to innovation, technical expertise, and continuous improvement. By investing in advanced equipment and maintaining strict quality standards, we ensure that every stage of production — from material preparation to final processing — is carried out with precision and reliability.</p>
                <p>Today, COMO GRIT is recognized as a dependable partner for industrial projects that require accuracy, durability, and professional execution. Our company works closely with clients to understand their technical requirements and deliver tailored solutions that meet real industrial demands. Through dedication, technical know-how, and a commitment to excellence, we continue to build strong partnerships and contribute to the development of modern industry in Croatia and beyond.</p>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-slate-900 font-bold text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg p-6 flex flex-col justify-center">
              <div className="aspect-video bg-slate-300 rounded-lg flex items-center justify-center mb-6 overflow-hidden shadow-lg">
                <img src={AboutHero} alt="COMO GRIT Team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="py-12 border-t border-slate-100">
            <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 relative inline-block">
                  Why Choose Us?
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-600"></span>
                </h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>Whether you need mass production or custom-made metal components, we're here to provide top-quality service and support. Our mission is to build long-term partnerships based on trust, quality, and precision.</p>
                  <p>Our vision is to continuously advance our technology and workforce, driven by ongoing investments in innovation and knowledge to expand our project scope.</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-blue-600/5 rounded-2xl p-8 border border-blue-100">
                  <p className="text-blue-800 font-medium italic text-xl leading-snug">
                    "Our expertise in machining, laser cutting, and metal structure fabrication guarantees outstanding results for every client."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                  <div className="h-56 overflow-hidden">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
