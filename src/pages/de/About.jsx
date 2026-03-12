import React from 'react';
import { ShieldCheck, Cpu, Clock, Check } from 'lucide-react';
import AboutHero from '../../assets/image17.webp';
import service1 from '../../assets/image16.webp';
import service2 from '../../assets/image14.webp';
import service3 from '../../assets/image4.webp';

const About = () => {
  const features = [
    {
      title: "Kompromisslose Qualität",
      description: "Wir verwenden erstklassige Ausrüstung und zertifizierte Materialien, um sicherzustellen, dass jede Komponente höchste Industriestandards erfüllt.",
      image: service1,
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Technische Expertise",
      description: "Unser erfahrenes Team von Fachleuten sorgt für optimale Lösungen für jedes Projekt, von einfachen Teilen bis zu komplexen Strukturen.",
      image: service2,
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Schnelle und zuverlässige Lieferung",
      description: "Wir respektieren strenge Fristen und garantieren Effizienz durch optimierte Produktionsprozesse und moderne technologische Lösungen.",
      image: service3,
      icon: <Clock className="w-6 h-6 text-blue-600" />
    }
  ];

  const highlights = ["Professionalität", "Qualität", "Präzision", "Erfahrung"];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-[100px]">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Experten in der Metallverarbeitung</h1>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Unsere Geschichte</h2>
                <span className="fi fi-de text-2xl"></span>
              </div>

              <div className="text-base text-slate-600 leading-7 space-y-4 mb-8">
                <p>COMO GRIT ist ein kroatisches Industrieunternehmen, das sich auf zuverlässige und hochwertige Lösungen in der Metallverarbeitung und Fertigung spezialisiert hat. Gegründet aus einer starken Leidenschaft für Präzision, Handwerkskunst und technische Exzellenz, wurde das Unternehmen mit einem klaren Ziel ins Leben gerufen: verlässliche industrielle Dienstleistungen zu bieten und langfristigen Mehrwert für Partner und Kunden aus verschiedenen Branchen zu schaffen. Von Anfang an lag unser Fokus darauf, qualifizierte Handwerksarbeit mit modernen Technologien zu verbinden, um sicherzustellen, dass jedes Projekt höchste Standards in Qualität und Effizienz erfüllt.</p>
                <p>Mit Hauptsitz in Kroatien hat COMO GRIT seine Kompetenzen in der Metallverarbeitung, Metallfertigung, mechanischen Bearbeitung und Aluminiumrückgewinnung kontinuierlich ausgebaut. Was als kleine und ambitionierte Initiative begann, hat sich zu einem engagierten Team von Fachleuten entwickelt, die ein gemeinsames Engagement für Innovation, technisches Know-how und kontinuierliche Verbesserung teilen. Durch Investitionen in moderne Ausrüstung und die Einhaltung strenger Qualitätsstandards stellen wir sicher, dass jede Phase der Produktion — von der Materialvorbereitung bis zur Endverarbeitung — mit höchster Präzision und Zuverlässigkeit durchgeführt wird.</p>
                <p>Heute gilt COMO GRIT als zuverlässiger Partner für Industrieprojekte, die Präzision, Langlebigkeit und professionelle Ausführung erfordern. Unser Unternehmen arbeitet eng mit seinen Kunden zusammen, um deren technische Anforderungen zu verstehen und maßgeschneiderte Lösungen zu liefern, die den realen industriellen Anforderungen entsprechen. Durch Engagement, technisches Know-how und den Anspruch auf Exzellenz bauen wir weiterhin starke Partnerschaften auf und tragen zur Entwicklung der modernen Industrie in Kroatien und darüber hinaus bei.</p>
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
                  Warum uns wählen?
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-600"></span>
                </h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>Ob Sie Massenproduktion oder maßgefertigte Metallkomponenten benötigen, wir sind hier, um erstklassigen Service und Support zu bieten. Unsere Mission ist es, langfristige Partnerschaften aufzubauen, die auf Vertrauen, Qualität und Präzision basieren.</p>
                  <p>Unsere Vision ist es, unsere Technologie und Belegschaft kontinuierlich zu verbessern, angetrieben durch fortlaufende Investitionen in Innovation und Wissen, um unseren Projektumfang zu erweitern.</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-blue-600/5 rounded-2xl p-8 border border-blue-100">
                  <p className="text-blue-800 font-medium italic text-xl leading-snug">
                    "Unsere Expertise in der mechanischen Bearbeitung, dem Laserschneiden und der Fertigung von Metallstrukturen garantiert jedem Kunden herausragende Ergebnisse."
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
