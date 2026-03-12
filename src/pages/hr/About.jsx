import React from 'react';
import { ShieldCheck, Cpu, Clock, Check } from 'lucide-react';
import AboutHero from '../../assets/image17.webp';
import service1 from '../../assets/image16.webp';
import service2 from '../../assets/image14.webp';
import service3 from '../../assets/image4.webp';

const About = () => {
  const features = [
    {
      title: "Beskompromisna kvaliteta",
      description: "Koristimo prvoklasnu opremu i certificirane materijale kako bismo osigurali da svaka komponenta zadovoljava najviše industrijske standarde.",
      image: service1,
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Tehnička stručnost",
      description: "Naš iskusan tim profesionalaca osigurava optimalna rješenja za svaki projekt, od jednostavnih dijelova do složenih struktura.",
      image: service2,
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Brza i pouzdana isporuka",
      description: "Poštujemo stroge rokove i jamčimo učinkovitost kroz optimizirane proizvodne procese i moderna tehnološka rješenja.",
      image: service3,
      icon: <Clock className="w-6 h-6 text-blue-600" />
    }
  ];

  const highlights = ["Profesionalnost", "Kvaliteta", "Preciznost", "Iskustvo"];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-[100px]">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Stručnjaci za obradu metala</h1>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Naša priča</h2>
                <span className="fi fi-hr text-2xl"></span>
              </div>

              <div className="text-base text-slate-600 leading-7 space-y-4 mb-8">
                <p>COMO GRIT je hrvatska industrijska tvrtka posvećena pružanju pouzdanih i visokokvalitetnih rješenja u obradi metala i proizvodnji. Osnovana s snažnom strašću prema preciznosti, vrhunskoj izradi i inženjerskoj izvrsnosti, tvrtka je nastala s jasnim ciljem: pružiti pouzdane industrijske usluge i dugoročnu vrijednost partnerima i klijentima iz različitih sektora. Od samog početka naš fokus je na kombiniranju stručnog zanatskog rada s modernim tehnologijama kako bismo osigurali da svaki projekt ispunjava najviše standarde kvalitete i učinkovitosti.</p>
                <p>Sa sjedištem u Hrvatskoj, COMO GRIT kontinuirano razvija svoje sposobnosti u obradi metala, metalnoj izradi, strojnoj obradi i oporavku aluminija. Ono što je započelo kao mala i ambiciozna inicijativa razvilo se u posvećen tim stručnjaka koji dijele zajedničku predanost inovacijama, tehničkoj stručnosti i stalnom napretku. Ulaganjem u naprednu opremu i održavanjem strogih standarda kvalitete osiguravamo da se svaka faza proizvodnje — od pripreme materijala do završne obrade — provodi s maksimalnom preciznošću i pouzdanošću.</p>
                <p>Danas je COMO GRIT prepoznat kao pouzdan partner za industrijske projekte koji zahtijevaju točnost, izdržljivost i profesionalnu izvedbu. Naša tvrtka blisko surađuje s klijentima kako bi razumjela njihove tehničke zahtjeve i ponudila prilagođena rješenja koja odgovaraju stvarnim industrijskim potrebama. Kroz predanost, tehničko znanje i težnju prema izvrsnosti nastavljamo graditi snažna partnerstva i doprinositi razvoju moderne industrije u Hrvatskoj i šire.</p>
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
                  Zašto odabrati nas?
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-600"></span>
                </h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>Bilo da vam treba masovna proizvodnja ili metalne komponente po narudžbi, ovdje smo da pružimo vrhunsku uslugu i podršku. Naša misija je izgraditi dugoročna partnerstva zasnovana na povjerenju, kvaliteti i preciznosti.</p>
                  <p>Naša vizija je kontinuirano unapređivanje naše tehnologije i radne snage, pokretane stalnim ulaganjima u inovacije i znanje kako bismo proširili opseg naših projekata.</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-blue-600/5 rounded-2xl p-8 border border-blue-100">
                  <p className="text-blue-800 font-medium italic text-xl leading-snug">
                    "Naša stručnost u strojnoj obradi, laserskom rezanju i izradi metalnih konstrukcija jamči izvanredne rezultate za svakog klijenta."
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
