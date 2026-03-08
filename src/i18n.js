import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Header & Navigation
      nav: { about: "About", services: "Services", projects: "Projects", contact: "Contact" },
      home: "Home",
      aboutUs: "About Us",
      services: "Services",
      gallery: "Gallery",
      contactUs: "Contact Us",

      // Hero Section
      heroTitle: "Precision Metal Fabrication & Industrial Solutions",
      heroText: "Advanced metal processing and cutting technologies delivering exceptional quality and precision for your industrial projects",
      requestQuote: "Request a Quote",
      contactUsBtn: "Contact Us",
      viewProjects: "View Projects",

      // Home - About Component
      aboutTitle: "About COMO GRIT",
      ourStory: "Our Story",
      aboutText1: "Founded with a passion for excellence and precision, COMO GRIT has been delivering premium solutions since our inception. We started with a simple mission: to provide exceptional craftsmanship and reliability to every client we serve.",
      aboutText2: "Over the years, we've grown from a small team to a dedicated workforce of skilled professionals who share our commitment to quality and innovation. Our journey has been marked by continuous improvement, technological advancement, and an unwavering focus on customer satisfaction.",
      aboutText3: "Today, COMO GRIT stands as a trusted name in the industry, known for our expertise, precision, and commitment to delivering outstanding results on every project.",
      learnMoreAbout: "Learn More About Us",

      // About Page
      aboutPageTitle: "Experts in Metal Processing",
      aboutPageStory: "Our Story",
      aboutPageText1: "Founded with a passion for excellence and precision, COMO GRIT has been delivering premium solutions since our inception. We started with a simple mission: to provide exceptional craftsmanship and reliability to every client we serve.",
      aboutPageText2: "Over the years, we've grown from a small team to a dedicated workforce of skilled professionals who share our commitment to quality and innovation. Our journey has been marked by continuous improvement, technological advancement, and an unwavering focus on customer satisfaction.",
      aboutPageText3: "Today, COMO GRIT stands as a trusted name in the industry, known for our expertise, precision, and commitment to delivering outstanding results on every project.",
      professionalism: "Professionalism",
      quality: "Quality",
      precision: "Precision",
      experience: "Experience",
      whyChooseUs: "Why Choose Us?",
      whyChooseUsText1: "Whether you need mass production or custom-made metal components, we're here to provide top-quality service and support. Our mission is to build long-term partnerships based on trust, quality, and precision.",
      whyChooseUsText2: "Our vision is to continuously advance our technology and workforce, driven by ongoing investments in innovation and knowledge to expand our project scope.",
      whyChooseUsQuote: "Our expertise machining, laser cutting, and metal structure fabrication guarantees outstanding results for every client.",
      uncompromisingQuality: "Uncompromising Quality",
      uncompromisingQualityDesc: "We use top-of-the-line equipment and certified materials to ensure every component meets the highest industry standards.",
      technicalExpertise: "Technical Expertise",
      technicalExpertiseDesc: "Our experienced team of professionals ensures optimal solutions for every project, from simple parts to complex structures.",
      fastReliableDelivery: "Fast and Reliable Delivery",
      fastReliableDeliveryDesc: "We respect strict deadlines and guarantee efficiency through optimized production processes and modern technological solutions.",
      keyHighlights: "Key Highlights:",

      // Stats Section
      statsTitle: "Experience and Customer Satisfaction",
      statsDescription: "Our expertise, precision, and dedication to quality make us a trusted partner for clients across multiple industrial sectors.",
      yearsExperience: "Years of Experience",
      successRate: "Success Rate",
      clients: "Clients",
      projects: "Projects",

      // Services
      servicesTitle: "Our Services",
      servicesSubtitle: "Comprehensive metal fabrication and processing solutions tailored to your industrial needs",
      servicesPageTitle: "Our Services",
      servicesPageSubtitle: "Delivering precision, quality, and efficiency across all of our industrial solutions.",
      exploreMore: "Explore More Projects",

      // Services Page Detailed
      metalConstruction: "Metal Construction",
      metalConstructionDesc: "We design and fabricate durable metal structures for industrial and commercial applications. Our team ensures structural strength, precise assembly, and high-quality materials for long-lasting metal constructions.",
      metalConstructionBullet1: "Structural steel fabrication and assembly.",
      metalConstructionBullet2: "High-strength materials for industrial durability.",
      metalConstructionBullet3: "Custom metal frameworks built to project specifications.",

      metalMelting: "Metal Melting",
      metalMeltingDesc: "Our metal melting process allows us to prepare raw materials for casting and further fabrication. Using controlled high-temperature furnaces, we melt metals efficiently while maintaining material purity and consistency.",
      metalMeltingBullet1: "High-temperature industrial melting furnaces.",
      metalMeltingBullet2: "Precise control for consistent metal quality.",
      metalMeltingBullet3: "Suitable for steel, aluminum, and other alloys.",

      machiningToolsFabrication: "Machining Tools Fabrication",
      machiningToolsFabricationDesc: "Our fabrication process ensures that every tool meets strict quality standards, allowing manufacturers to achieve clean cuts, tight tolerances, and efficient production. By combining skilled craftsmanship with modern machining technology, we produce reliable tooling solutions suitable for both standard and specialized machining needs.",

      machiningToolsFabricationBullet1: "Drill",
      machiningToolsFabricationBullet2: "Reamers",
      machiningToolsFabricationBullet3: "Molding Cutter",
      machiningToolsFabricationBullet4: "Milling Cutter",
      machiningToolsFabricationBullet5: "Screw-In Heads",
      machiningToolsFabricationBullet6: "Deburrer",

      waterJetCutting: "Water Jet Cutting",
      waterJetCuttingDesc: "Water jet cutting uses a high-pressure stream of water mixed with abrasives to cut metal with extreme precision. This cold-cutting process avoids heat distortion and preserves the material's structural properties.",
      waterJetCuttingBullet1: "No heat-affected zones or material warping.",
      waterJetCuttingBullet2: "High precision cutting for complex shapes.",
      waterJetCuttingBullet3: "Ideal for thick metals and sensitive materials.",

      laserCutting: "Laser Cutting",
      laserCuttingDesc: "Our advanced fiber laser cutting technology delivers fast, precise, and clean cuts for various metal materials. It is ideal for producing intricate designs and high-volume production parts.",
      laserCuttingBullet1: "High precision cutting with minimal waste.",
      laserCuttingBullet2: "Suitable for steel, stainless steel, aluminum, copper, and brass.",
      laserCuttingBullet3: "Clean edges with minimal finishing required.",

      customMetalCutting: "Custom Metal Cutting and Forming",
      customMetalCuttingDesc: "We provide custom metal cutting and forming services tailored to your project requirements. Our equipment allows us to shape and modify metal components accurately and efficiently.",
      customMetalCuttingBullet1: "Custom shapes and dimensions based on client specifications.",
      customMetalCuttingBullet2: "Precision forming for industrial and construction applications.",
      customMetalCuttingBullet3: "Consistent results for both small and large production runs.",

      metalCasting: "Metal Casting",
      metalCastingDesc: "Metal casting allows us to produce complex metal components by pouring molten metal into precision molds. This method is ideal for creating strong parts with intricate shapes and consistent quality.",
      metalCastingBullet1: "Suitable for complex and detailed metal components.",
      metalCastingBullet2: "Strong and durable finished metal parts.",
      metalCastingBullet3: "Efficient for both prototypes and production batches.",

      metalForming: "Metal Forming",
      metalProcessing: "Metal Processing",

      // WhyChooseUs
      whyChooseUsTitle: "Why Choose COMO GRIT",
      whyChooseUsSubtitle: "Industry-leading capabilities backed by years of expertise",
      whyChooseUsFeatures: [
        { title: "High Precision Machinery", description: "State-of-the-art equipment ensuring accuracy down to the micron" },
        { title: "Industrial-Grade Materials", description: "Only the finest metals and alloys for superior durability" },
        { title: "Fast Turnaround", description: "Efficient processes to meet your deadlines without compromising quality" },
        { title: "Custom Solutions", description: "Tailored fabrication services to match your exact specifications" },
        { title: "Skilled Technicians", description: "Experienced professionals with expertise in advanced metalworking" }
      ],

      // Gallery
      galleryTitle: "Our Projects",
      gallerySubtitle: "A showcase of our precision metalwork and industrial fabrication capabilities",
      galleryProjects: [
        { title: "Structural Steel Work", image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Laser Cutting Project", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Custom Metal Fabrication", image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Industrial Components", image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Precision Cutting", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Metal Processing", image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ],

      // QuoteForm
      quoteTitle: "Request a Quote",
      quoteSubtitle: "Tell us about your project and we'll get back to you with a detailed quote",
      fullName: "Full Name *",
      emailAddress: "Email Address *",
      phoneNumber: "Phone Number *",
      projectDescription: "Project Description *",
      descriptionPlaceholder: "Please describe your project requirements, materials, dimensions, and any specific details...",
      submitRequest: "Submit Request",
      quoteThankYouTitle: "Thank You!",
      quoteThankYouMessage: "We've received your request and will contact you shortly.",

      // Contact
      contactTitle: "Contact Us",
      contactSubtitle: "Get in touch with our team to discuss your metal fabrication needs",
      sendMessage: "Send Message",
      sendMessageTitle: "Send us a Message",
      thankYouTitle: "Thank You!",
      thankYouMessage: "We've received your message and will get back to you soon.",
      messageLabel: "Message *",
      messagePlaceholder: "Tell us about your inquiry...",
      businessHoursTitle: "Business Hours",
      mondayFriday: "Monday - Friday:",
      mondayFridayTime: "7:00 AM - 6:00 PM",
      saturday: "Saturday:",
      saturdayTime: "8:00 AM - 2:00 PM",
      sunday: "Sunday:",
      sundayTime: "Closed",

      // Footer
      footerDesc: "Precision metal fabrication and industrial solutions with cutting-edge technology and expert craftsmanship.",
      footerQuickLinks: "Quick Links",
      footerHome: "Home",
      footerAbout: "About Us",
      footerServices: "Services",
      footerProjects: "Projects",
      footerContact: "Contact",
      Gallery: "Gallery",
      footerOurServices: "Our Services",
      footerServiceList: [
        "Metal Construction",
        "Laser Cutting",
        "Water Jet Cutting",
        "Metal Casting",
        "Metal Forming",
        "Metal Processing"
      ],
      copyright: "All rights reserved.",

      // Contact Page
      contactPageTitle: "Contact Us Now",
      contactPageSubtitle: "Get in touch with our team to discuss your next project or schedule a consultation",
      contactFormTitle: "Send Us a Message",
      contactInfoTitle: "Contact Information",
      fullNameLabel: "Full Name *",
      fullNamePlaceholder: "Enter your full name",
      emailLabel: "Email Address *",
      emailPlaceholder: "email@example.com",
      subjectLabel: "Subject *",
      subjectPlaceholder: "What is the subject?",
      messageTextLabel: "Message *",
      messageTextPlaceholder: "Tell us more about your project...",
      sendButtonText: "Send Message",
      thankYouFormTitle: "Thank You!",
      thankYouFormMessage: "We've received your message and will get back to you soon.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailContactLabel: "Email",
      ourLocationTitle: "Our Location",

      cncMachining: "CNC Machining",
      cncMachiningDesc:
        "CNC machining allows us to manufacture high-precision metal components using computer-controlled machines. This process ensures exceptional accuracy, repeatability, and efficiency for both custom and large-scale production.",

      cncMachiningBullet1: "High precision automated machining.",
      cncMachiningBullet2: "Consistent quality for complex components.",
      cncMachiningBullet3: "Ideal for prototypes and mass production.",

      // Gallery Page
      galleryPageTitle: "Our Expertise in Every Detail",
      galleryPageIntro1: "Welcome to our gallery where you can see our precision, quality, and dedication to metal processing. Through years of experience, we have developed a wide range of products—from",
      galleryPageIntro2: "metal construction",
      galleryPageIntro3: "to",
      galleryPageIntro4: "precision-crafted components",
      galleryPageIntro5: "—tailored to the specific requirements of our clients.",
      galleryPageIntro6: "Browse our portfolio to gain insight into the innovative solutions and superior material processing we apply to every project. Take a look at our work and see for yourself the quality of Como Grit d.o.o!",
      galleryImageCounter: "of"
    }
  },
  hr: {
    translation: {
      // Header & Navigation
      nav: { about: "O nama", services: "Usluge", projects: "Projekti", contact: "Kontakt" },
      home: "Početna",
      aboutUs: "O nama",
      services: "Usluge",
      gallery: "Galerija",
      contactUs: "Kontakt",

      // Hero Section
      heroTitle: "Precizna obrada metala i industrijska rješenja",
      heroText: "Napredne tehnologije obrade i rezanja metala za vrhunsku kvalitetu i preciznost vaših projekata",
      requestQuote: "Zatražite ponudu",
      contactUsBtn: "Kontaktirajte nas",
      viewProjects: "Pogledajte projekte",

      // Home - About Component
      aboutTitle: "O COMO GRIT",
      ourStory: "Naša priča",
      aboutText1: "Osnovani s strašću prema izvrsnosti i preciznosti, COMO GRIT isporučuje vrhunska rješenja od samog početka. Započeli smo s jednostavnom misijom: pružiti iznimnu izradu i pouzdanost svakom klijentu kojeg služimo.",
      aboutText2: "Tijekom godina, izrasli smo iz malog tima u predanu radnu snagu vještih profesionalaca koji dijele našu predanost kvaliteti i inovacijama. Naš put obilježen je kontinuiranim unapređenjem, tehnološkim napretkom i nepokolebljivim fokusom na zadovoljstvo kupaca.",
      aboutText3: "Danas, COMO GRIT stoji kao pouzdano ime u industriji, poznato po našoj stručnosti, preciznosti i predanosti isporuci izvanrednih rezultata na svakom projektu.",
      learnMoreAbout: "Saznajte više o nama",

      // About Page
      aboutPageTitle: "Stručnjaci za obradu metala",
      aboutPageStory: "Naša priča",
      aboutPageText1: "Osnovani s strašću prema izvrsnosti i preciznosti, COMO GRIT isporučuje vrhunska rješenja od samog početka. Započeli smo s jednostavnom misijom: pružiti iznimnu izradu i pouzdanost svakom klijentu kojeg služimo.",
      aboutPageText2: "Tijekom godina, izrasli smo iz malog tima u predanu radnu snagu vještih profesionalaca koji dijele našu predanost kvaliteti i inovacijama. Naš put obilježen je kontinuiranim unapređenjem, tehnološkim napretkom i nepokolebljivim fokusom na zadovoljstvo kupaca.",
      aboutPageText3: "Danas, COMO GRIT stoji kao pouzdano ime u industriji, poznato po našoj stručnosti, preciznosti i predanosti isporuci izvanrednih rezultata na svakom projektu.",
      professionalism: "Profesionalnost",
      quality: "Kvaliteta",
      precision: "Preciznost",
      experience: "Iskustvo",
      whyChooseUs: "Zašto odabrati nas?",
      whyChooseUsText1: "Bilo da vam treba masovna proizvodnja ili metalne komponente po narudžbi, ovdje smo da pružimo vrhunsku uslugu i podršku. Naša misija je izgraditi dugoročna partnerstva zasnovana na povjerenju, kvaliteti i preciznosti.",
      whyChooseUsText2: "Naša vizija je kontinuirano unapređivanje naše tehnologije i radne snage, pokretane stalnim ulaganjima u inovacije i znanje kako bismo proširili opseg naših projekata.",
      whyChooseUsQuote: "Naša stručnost u obradi, laserskom rezanju i izradi metalnih struktura jamči izvanredne rezultate za svakog klijenta.",
      uncompromisingQuality: "Beskompromisna kvaliteta",
      uncompromisingQualityDesc: "Koristimo prvoklasnu opremu i certificirane materijale kako bismo osigurali da svaka komponenta zadovoljava najviše industrijske standarde.",
      technicalExpertise: "Tehnička stručnost",
      technicalExpertiseDesc: "Naš iskusan tim profesionalaca osigurava optimalna rješenja za svaki projekt, od jednostavnih dijelova do složenih struktura.",
      fastReliableDelivery: "Brza i pouzdana isporuka",
      fastReliableDeliveryDesc: "Poštujemo stroge rokove i jamčimo učinkovitost kroz optimizirane proizvodne procese i moderna tehnološka rješenja.",
      keyHighlights: "Ključne prednosti:",

      // Stats Section
      statsTitle: "Iskustvo i zadovoljstvo kupaca",
      statsDescription: "Naša stručnost, preciznost i predanost kvaliteti čine nas pouzdanim partnerom za klijente iz više industrijskih sektora.",
      yearsExperience: "Godina iskustva",
      successRate: "Stopa uspjeha",
      clients: "Klijenti",
      projects: "Projekti",

      cncMachining: "CNC obrada",
      cncMachiningDesc:
        "CNC obrada omogućuje proizvodnju visokopreciznih metalnih komponenti pomoću računalno upravljanih strojeva. Ovaj proces osigurava iznimnu točnost, ponovljivost i učinkovitost za pojedinačnu i serijsku proizvodnju.",

      cncMachiningBullet1: "Visokoprecizna automatizirana obrada.",
      cncMachiningBullet2: "Dosljedna kvaliteta za složene komponente.",
      cncMachiningBullet3: "Idealno za prototipove i serijsku proizvodnju.",

      // Services
      servicesTitle: "Naše usluge",
      servicesSubtitle: "Sveobuhvatna rješenja za obradu i izradu metala",
      servicesPageTitle: "Naše usluge",
      servicesPageSubtitle: "Pružamo preciznost, kvalitetu i učinkovitost u svim našim industrijskim rješenjima.",
      exploreMore: "Istražite više projekata",

      // Services Page Detailed
      metalConstruction: "Metalna konstrukcija",
      metalConstructionDesc: "Projektiramo i izrađujemo izdržljive metalne konstrukcije za industrijske i komercijalne primjene. Naš tim osigurava strukturnu čvrstoću, preciznu montažu i visokokvalitetne materijale za dugotrajne metalne konstrukcije.",
      metalConstructionBullet1: "Izrada i montaža konstrukcijskog čelika.",
      metalConstructionBullet2: "Visoko otporni materijali za industrijsku izdržljivost.",
      metalConstructionBullet3: "Prilagođeni metalni okviri izrađeni prema specifikacijama projekta.",

      metalMelting: "Taljenje metala",
      metalMeltingDesc: "Naš proces taljenja metala omogućuje nam pripremu sirovina za lijevanje i daljnju izradu. Koristeći kontrolirane visoko-temperaturne peći, talimo metale učinkovito uz održavanje čistoće i dosljednosti materijala.",
      metalMeltingBullet1: "Industrijske peći za taljenje na visokim temperaturama.",
      metalMeltingBullet2: "Precizna kontrola za dosljednu kvalitetu metala.",
      metalMeltingBullet3: "Prikladno za čelik, aluminij i druge legure.",

      waterJetCutting: "Rezanje vodenim mlazom",
      waterJetCuttingDesc: "Rezanje vodenim mlazom koristi mlaz vode pod visokim pritiskom pomiješan s abrazivima za rezanje metala s ekstremnom preciznošću. Ovaj proces hladnog rezanja izbjegava termičke deformacije i čuva strukturna svojstva materijala.",
      waterJetCuttingBullet1: "Bez zona utjecaja topline ili deformacije materijala.",
      waterJetCuttingBullet2: "Visokoprecizno rezanje za složene oblike.",
      waterJetCuttingBullet3: "Idealno za debele metale i osjetljive materijale.",

      laserCutting: "Lasersko rezanje",
      laserCuttingDesc: "Naša napredna tehnologija laserskog rezanja vlaknima isporučuje brze, precizne i čiste rezove za različite metalne materijale. Idealna je za proizvodnju zamršenih dizajna i dijelova velike proizvodnje.",
      laserCuttingBullet1: "Visokoprecizno rezanje s minimalnim otpadom.",
      laserCuttingBullet2: "Prikladno za čelik, nehrđajući čelik, aluminij, bakar i mjed.",
      laserCuttingBullet3: "Čisti rubovi s minimalnom završnom obradom.",

      customMetalCutting: "Prilagođeno rezanje i oblikovanje metala",
      customMetalCuttingDesc: "Pružamo usluge prilagođenog rezanja i oblikovanja metala prilagođene zahtjevima vašeg projekta. Naša oprema omogućuje nam da oblikujemo i modificiramo metalne komponente točno i učinkovito.",
      customMetalCuttingBullet1: "Prilagođeni oblici i dimenzije na temelju specifikacija klijenta.",
      customMetalCuttingBullet2: "Precizno oblikovanje za industrijske i građevinske primjene.",
      customMetalCuttingBullet3: "Dosljedni rezultati za male i velike proizvodne serije.",

      metalCasting: "Lijevanje metala",
      metalCastingDesc: "Lijevanje metala omogućuje nam proizvodnju složenih metalnih komponenti lijevanjem rastaljenog metala u precizne kalupe. Ova metoda je idealna za izradu čvrstih dijelova sa zamršenim oblicima i dosljednom kvalitetom.",
      metalCastingBullet1: "Prikladno za složene i detaljne metalne komponente.",
      metalCastingBullet2: "Čvrsti i izdržljivi gotovi metalni dijelovi.",
      metalCastingBullet3: "Učinkovito za prototipove i proizvodne serije.",

      machiningToolsFabrication: "Izrada alatnih alata za obradu",
      machiningToolsFabricationDesc: "Naš proces izrade osigurava da svaki alat zadovoljava stroge standarde kvalitete, omogućujući proizvođačima čiste rezove, precizne tolerancije i učinkovitu proizvodnju. Kombinacijom stručnog majstorstva i moderne tehnologije obrade proizvodimo pouzdana alatna rješenja pogodna za standardne i specijalizirane potrebe obrade.",

      machiningToolsFabricationBullet1: "Svrdla",
      machiningToolsFabricationBullet2: "Razvrtači",
      machiningToolsFabricationBullet3: "Rezači za kalupe",
      machiningToolsFabricationBullet4: "Glodala",
      machiningToolsFabricationBullet5: "Navojne glave",
      machiningToolsFabricationBullet6: "Alati za uklanjanje srha",

      metalForming: "Obrada metala",
      metalProcessing: "Prerada metala",

      whyChooseUsTitle: "Zašto odabrati COMO GRIT",
      whyChooseUsSubtitle: "Vodeće mogućnosti u industriji podržane godinama iskustva",
      whyChooseUsFeatures: [
        { title: "Precizni strojevi", description: "Najmodernija oprema koja osigurava točnost do mikrona" },
        { title: "Industrijski materijali", description: "Samo najbolji metali i legure za vrhunsku izdržljivost" },
        { title: "Brza izrada", description: "Učinkoviti procesi koji zadovoljavaju vaše rokove bez kompromisa u kvaliteti" },
        { title: "Prilagođena rješenja", description: "Izrada po mjeri koja odgovara vašim točnim zahtjevima" },
        { title: "Iskusni tehničari", description: "Iskusni profesionalci s ekspertizom u naprednoj obradi metala" }
      ],

      galleryTitle: "Naši projekti",
      gallerySubtitle: "Prikaz naših preciznih metalnih i industrijskih radova",
      galleryProjects: [
        { title: "Strukturni čelični radovi", image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Laserski projekt", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Prilagođena metalna izrada", image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Industrijski dijelovi", image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Precizno rezanje", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Obrada metala", image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ],

      quoteTitle: "Zatražite ponudu",
      quoteSubtitle: "Recite nam o svom projektu i javit ćemo vam se s detaljnom ponudom",
      fullName: "Ime i prezime *",
      emailAddress: "Email adresa *",
      phoneNumber: "Broj telefona *",
      projectDescription: "Opis projekta *",
      descriptionPlaceholder: "Molimo opišite svoj projekt: materijale, dimenzije i sve detalje...",
      submitRequest: "Pošaljite zahtjev",
      quoteThankYouTitle: "Hvala!",
      quoteThankYouMessage: "Primili smo vaš zahtjev i uskoro ćemo vas kontaktirati.",

      contactTitle: "Kontakt",
      contactSubtitle: "Kontaktirajte naš tim kako biste razgovarali o vašim potrebama obrade metala",
      sendMessage: "Pošalji poruku",
      sendMessageTitle: "Pošaljite nam poruku",
      thankYouTitle: "Hvala!",
      thankYouMessage: "Primili smo vašu poruku i javit ćemo vam se uskoro.",
      messageLabel: "Poruka *",
      messagePlaceholder: "Recite nam nešto o vašem upitu...",
      businessHoursTitle: "Radno vrijeme",
      mondayFriday: "Ponedjeljak - Petak:",
      mondayFridayTime: "7:00 - 18:00",
      saturday: "Subota:",
      saturdayTime: "8:00 - 14:00",
      sunday: "Nedjelja:",
      sundayTime: "Zatvoreno",
       // Footer
     // Footer
footerDesc: "Precizna izrada metala i industrijska rješenja uz vrhunsku tehnologiju i stručno majstorstvo.",
footerQuickLinks: "Brze poveznice",
footerHome: "Početna",
footerAbout: "O nama",
footerServices: "Usluge",
footerProjects: "Projekti",
footerContact: "Kontakt",
Gallery: "Galerija",
footerOurServices: "Naše usluge",
footerServiceList: [
  "Metalne konstrukcije",
  "Lasersko rezanje",
  "Rezanje vodenim mlazom",
  "Lijevanje metala",
  "Oblikovanje metala",
  "Obrada metala"
],
copyright: "Sva prava pridržana.",

      // Contact Page
      contactPageTitle: "Kontaktirajte nas odmah",
      contactPageSubtitle: "Kontaktirajte naš tim kako biste razgovarali o svom sljedećem projektu ili zakazali konzultacije",
      contactFormTitle: "Pošaljite nam poruku",
      contactInfoTitle: "Kontakt informacije",
      fullNameLabel: "Puno ime *",
      fullNamePlaceholder: "Unesite svoje puno ime",
      emailLabel: "Email adresa *",
      emailPlaceholder: "email@primjer.com",
      subjectLabel: "Predmet *",
      subjectPlaceholder: "Koji je predmet?",
      messageTextLabel: "Poruka *",
      messageTextPlaceholder: "Recite nam više o svom projektu...",
      sendButtonText: "Pošalji poruku",
      thankYouFormTitle: "Hvala!",
      thankYouFormMessage: "Primili smo vašu poruku i javit ćemo vam se uskoro.",
      addressLabel: "Adresa",
      phoneLabel: "Telefon",
      emailContactLabel: "Email",
      ourLocationTitle: "Naša lokacija",

      // Gallery Page
      galleryPageTitle: "Naša stručnost u svakom detalju",
      galleryPageIntro1: "Dobrodošli u našu galeriju gdje možete vidjeti našu preciznost, kvalitetu i predanost obradi metala. Kroz godine iskustva razvili smo širok asortiman proizvoda—od",
      galleryPageIntro2: "metalnih konstrukcija",
      galleryPageIntro3: "do",
      galleryPageIntro4: "precizno izrađenih komponenti",
      galleryPageIntro5: "—prilagođenih specifičnim zahtjevima naših klijenata.",
      galleryPageIntro6: "Pregledajte naš portfolio kako biste stekli uvid u inovativna rješenja i vrhunsku obradu materijala koju primjenjujemo na svakom projektu. Pogledajte naš rad i uvjerite se sami u kvalitetu Como Grit d.o.o!",
      galleryImageCounter: "od"
    }
  },
  de: {
    translation: {
      // Header & Navigation
      nav: { about: "Über uns", services: "Dienstleistungen", projects: "Projekte", contact: "Kontakt" },
      home: "Startseite",
      aboutUs: "Über uns",
      services: "Dienstleistungen",
      gallery: "Galerie",
      contactUs: "Kontakt",

      // Hero Section
      heroTitle: "Präzise Metallfertigung & Industrielle Lösungen",
      heroText: "Fortschrittliche Metallverarbeitungs- und Schneidtechnologien für außergewöhnliche Qualität und Präzision Ihrer Industrieprojekte",
      requestQuote: "Angebot anfordern",
      contactUsBtn: "Kontaktieren Sie uns",
      viewProjects: "Projekte ansehen",

      // Home - About Component
      aboutTitle: "Über COMO GRIT",
      ourStory: "Unsere Geschichte",
      aboutText1: "Gegründet mit einer Leidenschaft für Exzellenz und Präzision, liefert COMO GRIT seit unserer Gründung erstklassige Lösungen. Wir begannen mit einer einfachen Mission: außergewöhnliche Handwerkskunst und Zuverlässigkeit für jeden Kunden zu bieten.",
      aboutText2: "Im Laufe der Jahre sind wir von einem kleinen Team zu einer engagierten Belegschaft qualifizierter Fachleute gewachsen, die unser Engagement für Qualität und Innovation teilen. Unser Weg war geprägt von kontinuierlicher Verbesserung, technologischem Fortschritt und einem unerschütterlichen Fokus auf Kundenzufriedenheit.",
      aboutText3: "Heute steht COMO GRIT als vertrauenswürdiger Name in der Branche, bekannt für unsere Expertise, Präzision und unser Engagement für herausragende Ergebnisse bei jedem Projekt.",
      learnMoreAbout: "Erfahren Sie mehr über uns",

      // About Page
      aboutPageTitle: "Experten in der Metallverarbeitung",
      aboutPageStory: "Unsere Geschichte",
      aboutPageText1: "Gegründet mit einer Leidenschaft für Exzellenz und Präzision, liefert COMO GRIT seit unserer Gründung erstklassige Lösungen. Wir begannen mit einer einfachen Mission: außergewöhnliche Handwerkskunst und Zuverlässigkeit für jeden Kunden zu bieten.",
      aboutPageText2: "Im Laufe der Jahre sind wir von einem kleinen Team zu einer engagierten Belegschaft qualifizierter Fachleute gewachsen, die unser Engagement für Qualität und Innovation teilen. Unser Weg war geprägt von kontinuierlicher Verbesserung, technologischem Fortschritt und einem unerschütterlichen Fokus auf Kundenzufriedenheit.",
      aboutPageText3: "Heute steht COMO GRIT als vertrauenswürdiger Name in der Branche, bekannt für unsere Expertise, Präzision und unser Engagement für herausragende Ergebnisse bei jedem Projekt.",
      professionalism: "Professionalität",
      quality: "Qualität",
      precision: "Präzision",
      experience: "Erfahrung",
      whyChooseUs: "Warum uns wählen?",
      whyChooseUsText1: "Ob Sie Massenproduktion oder maßgefertigte Metallkomponenten benötigen, wir sind hier, um erstklassigen Service und Support zu bieten. Unsere Mission ist es, langfristige Partnerschaften aufzubauen, die auf Vertrauen, Qualität und Präzision basieren.",
      whyChooseUsText2: "Unsere Vision ist es, unsere Technologie und Belegschaft kontinuierlich zu verbessern, angetrieben durch fortlaufende Investitionen in Innovation und Wissen, um unseren Projektumfang zu erweitern.",
      whyChooseUsQuote: "Unsere Expertise in der Bearbeitung, im Laserschneiden und in der Metallstruktur-Fertigung garantiert herausragende Ergebnisse für jeden Kunden.",
      uncompromisingQuality: "Kompromisslose Qualität",
      uncompromisingQualityDesc: "Wir verwenden erstklassige Ausrüstung und zertifizierte Materialien, um sicherzustellen, dass jede Komponente höchste Industriestandards erfüllt.",
      technicalExpertise: "Technische Expertise",
      technicalExpertiseDesc: "Unser erfahrenes Team von Fachleuten sorgt für optimale Lösungen für jedes Projekt, von einfachen Teilen bis zu komplexen Strukturen.",
      fastReliableDelivery: "Schnelle und zuverlässige Lieferung",
      fastReliableDeliveryDesc: "Wir respektieren strenge Fristen und garantieren Effizienz durch optimierte Produktionsprozesse und moderne technologische Lösungen.",
      keyHighlights: "Wichtige Highlights:",

      // Stats Section
      statsTitle: "Erfahrung und Kundenzufriedenheit",
      statsDescription: "Unsere Expertise, Präzision und unser Engagement für Qualität machen uns zu einem vertrauenswürdigen Partner für Kunden aus verschiedenen Industriesektoren.",
      yearsExperience: "Jahre Erfahrung",
      successRate: "Erfolgsquote",
      clients: "Kunden",
      projects: "Projekte",

      // Services
      servicesTitle: "Unsere Dienstleistungen",
      servicesSubtitle: "Umfassende Metallfertigung und Verarbeitungslösungen, die auf Ihre industriellen Bedürfnisse zugeschnitten sind",
      servicesPageTitle: "Unsere Dienstleistungen",
      servicesPageSubtitle: "Präzision, Qualität und Effizienz in allen unseren industriellen Lösungen.",
      exploreMore: "Mehr Projekte erkunden",

      // Services Page Detailed
      metalConstruction: "Metallkonstruktion",
      metalConstructionDesc: "Wir entwerfen und fertigen langlebige Metallstrukturen für industrielle und kommerzielle Anwendungen. Unser Team gewährleistet strukturelle Festigkeit, präzise Montage und hochwertige Materialien für langlebige Metallkonstruktionen.",
      metalConstructionBullet1: "Stahlbau-Fertigung und Montage.",
      metalConstructionBullet2: "Hochfeste Materialien für industrielle Haltbarkeit.",
      metalConstructionBullet3: "Maßgeschneiderte Metallrahmen nach Projektspezifikationen.",

      metalMelting: "Metallschmelzen",
      metalMeltingDesc: "Unser Metallschmelzprozess ermöglicht es uns, Rohmaterialien für Guss und weitere Verarbeitung vorzubereiten. Mit kontrollierten Hochtemperaturöfen schmelzen wir Metalle effizient unter Beibehaltung der Materialreinheit und -konsistenz.",
      metalMeltingBullet1: "Industrielle Hochtemperatur-Schmelzöfen.",
      metalMeltingBullet2: "Präzise Kontrolle für konsistente Metallqualität.",
      metalMeltingBullet3: "Geeignet für Stahl, Aluminium und andere Legierungen.",

      waterJetCutting: "Wasserstrahlschneiden",
      waterJetCuttingDesc: "Wasserstrahlschneiden verwendet einen Hochdruck-Wasserstrahl gemischt mit Schleifmitteln, um Metall mit extremer Präzision zu schneiden. Dieser Kaltschneidprozess vermeidet Hitzeverformung und bewahrt die strukturellen Eigenschaften des Materials.",
      waterJetCuttingBullet1: "Keine Wärmeeinflusszonen oder Materialverformung.",
      waterJetCuttingBullet2: "Hochpräzises Schneiden für komplexe Formen.",
      waterJetCuttingBullet3: "Ideal für dicke Metalle und empfindliche Materialien.",

      laserCutting: "Laserschneiden",
      laserCuttingDesc: "Unsere fortschrittliche Faserlaser-Schneidtechnologie liefert schnelle, präzise und saubere Schnitte für verschiedene Metallmaterialien. Sie ist ideal für die Herstellung komplizierter Designs und Hochvolumen-Produktionsteile.",
      laserCuttingBullet1: "Hochpräzises Schneiden mit minimalem Abfall.",
      laserCuttingBullet2: "Geeignet für Stahl, Edelstahl, Aluminium, Kupfer und Messing.",
      laserCuttingBullet3: "Saubere Kanten mit minimalem Nachbearbeitungsaufwand.",

      customMetalCutting: "Maßgeschneidertes Metallschneiden und -formen",
      customMetalCuttingDesc: "Wir bieten maßgeschneiderte Metallschneid- und Formdienste an, die auf Ihre Projektanforderungen zugeschnitten sind. Unsere Ausrüstung ermöglicht es uns, Metallkomponenten genau und effizient zu formen und zu modifizieren.",
      customMetalCuttingBullet1: "Maßgeschneiderte Formen und Abmessungen basierend auf Kundenspezifikationen.",
      customMetalCuttingBullet2: "Präzisionsformung für industrielle und Bauanwendungen.",
      customMetalCuttingBullet3: "Konsistente Ergebnisse für kleine und große Produktionsläufe.",

      metalCasting: "Metallguss",
      metalCastingDesc: "Metallguss ermöglicht es uns, komplexe Metallkomponenten herzustellen, indem geschmolzenes Metall in Präzisionsformen gegossen wird. Diese Methode ist ideal zur Herstellung starker Teile mit komplizierten Formen und konsistenter Qualität.",
      metalCastingBullet1: "Geeignet für komplexe und detaillierte Metallkomponenten.",
      metalCastingBullet2: "Starke und langlebige fertige Metallteile.",
      metalCastingBullet3: "Effizient für Prototypen und Produktionschargen.",

      machiningToolsFabrication: "Fertigung von Bearbeitungswerkzeugen",
      machiningToolsFabricationDesc: "Unser Fertigungsprozess stellt sicher, dass jedes Werkzeug strenge Qualitätsstandards erfüllt, sodass Hersteller saubere Schnitte, enge Toleranzen und eine effiziente Produktion erreichen können. Durch die Kombination von handwerklichem Können mit moderner Bearbeitungstechnologie produzieren wir zuverlässige Werkzeuglösungen für sowohl Standard- als auch spezialisierte Bearbeitungsanforderungen.",

      machiningToolsFabricationBullet1: "Bohrer",
      machiningToolsFabricationBullet2: "Reibahlen",
      machiningToolsFabricationBullet3: "Formfräser",
      machiningToolsFabricationBullet4: "Fräser",
      machiningToolsFabricationBullet5: "Schraubköpfe",
      machiningToolsFabricationBullet6: "Entgratwerkzeuge",

      metalForming: "Metallumformung",
      metalProcessing: "Metallverarbeitung",

      // WhyChooseUs
      whyChooseUsTitle: "Warum COMO GRIT wählen",
      whyChooseUsSubtitle: "Branchenführende Fähigkeiten, unterstützt durch jahrelange Expertise",
      whyChooseUsFeatures: [
        { title: "Hochpräzise Maschinen", description: "Modernste Ausrüstung mit Genauigkeit bis zum Mikron" },
        { title: "Industrielle Materialien", description: "Nur die besten Metalle und Legierungen für überlegene Haltbarkeit" },
        { title: "Schnelle Bearbeitung", description: "Effiziente Prozesse zur Einhaltung Ihrer Fristen ohne Qualitätskompromisse" },
        { title: "Maßgeschneiderte Lösungen", description: "Maßgeschneiderte Fertigungsdienstleistungen nach Ihren genauen Spezifikationen" },
        { title: "Erfahrene Techniker", description: "Erfahrene Fachleute mit Expertise in fortgeschrittener Metallbearbeitung" }
      ],

      // Gallery
      galleryTitle: "Unsere Projekte",
      gallerySubtitle: "Eine Präsentation unserer Präzisionsmetallarbeiten und industriellen Fertigungsfähigkeiten",
      galleryProjects: [
        { title: "Stahlbauarbeiten", image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Laserschneidprojekt", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Maßgefertigte Metallfertigung", image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Industrielle Komponenten", image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Präzisionsschneiden", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Metallverarbeitung", image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ],

      // QuoteForm
      quoteTitle: "Angebot anfordern",
      quoteSubtitle: "Erzählen Sie uns von Ihrem Projekt und wir melden uns mit einem detaillierten Angebot",
      fullName: "Vollständiger Name *",
      emailAddress: "Email-Adresse *",
      phoneNumber: "Telefonnummer *",
      projectDescription: "Projektbeschreibung *",
      descriptionPlaceholder: "Bitte beschreiben Sie Ihre Projektanforderungen, Materialien, Abmessungen und spezifische Details...",
      submitRequest: "Anfrage senden",
      quoteThankYouTitle: "Vielen Dank!",
      quoteThankYouMessage: "Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.",

      // Contact
      contactTitle: "Kontakt",
      contactSubtitle: "Nehmen Sie Kontakt mit unserem Team auf, um Ihre Metallfertigung zu besprechen",
      sendMessage: "Nachricht senden",
      sendMessageTitle: "Senden Sie uns eine Nachricht",
      thankYouTitle: "Vielen Dank!",
      thankYouMessage: "Wir haben Ihre Nachricht erhalten und werden uns bald bei Ihnen melden.",
      messageLabel: "Nachricht *",
      messagePlaceholder: "Erzählen Sie uns von Ihrer Anfrage...",
      businessHoursTitle: "Geschäftszeiten",
      mondayFriday: "Montag - Freitag:",
      mondayFridayTime: "7:00 - 18:00",
      saturday: "Samstag:",
      saturdayTime: "8:00 - 14:00",
      sunday: "Sonntag:",
      sundayTime: "Geschlossen",

      cncMachining: "CNC-Bearbeitung",
      cncMachiningDesc:
        "Die CNC-Bearbeitung ermöglicht die Herstellung hochpräziser Metallkomponenten mit computergesteuerten Maschinen. Dieser Prozess gewährleistet außergewöhnliche Genauigkeit, Wiederholbarkeit und Effizienz sowohl für Einzelanfertigungen als auch für Serienproduktion.",

      cncMachiningBullet1: "Hochpräzise automatisierte Bearbeitung.",
      cncMachiningBullet2: "Konstante Qualität für komplexe Komponenten.",
      cncMachiningBullet3: "Ideal für Prototypen und Serienproduktion.",

      // Footer
      footerDesc: "Präzise Metallfertigung und industrielle Lösungen mit modernster Technologie und fachmännischer Handwerkskunst.",
      footerQuickLinks: "Schnelllinks",
      footerHome: "Startseite",
      footerAbout: "Über uns",
      footerServices: "Dienstleistungen",
      footerProjects: "Projekte",
      footerContact: "Kontakt",
      Gallery: "Galerie",
      footerOurServices: "Unsere Dienstleistungen",
      footerServiceList: [
        "Metallkonstruktion",
        "Laserschneiden",
        "Wasserstrahlschneiden",
        "Metallguss",
        "Metallumformung",
        "Metallverarbeitung"
      ],
      copyright: "Alle Rechte vorbehalten.",

      // Contact Page
      contactPageTitle: "Kontaktieren Sie uns jetzt",
      contactPageSubtitle: "Kontaktieren Sie unser Team, um Ihr nächstes Projekt zu besprechen oder eine Beratung zu vereinbaren",
      contactFormTitle: "Senden Sie uns eine Nachricht",
      contactInfoTitle: "Kontaktinformationen",
      fullNameLabel: "Vollständiger Name *",
      fullNamePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
      emailLabel: "Email-Adresse *",
      emailPlaceholder: "email@beispiel.com",
      subjectLabel: "Betreff *",
      subjectPlaceholder: "Was ist der Betreff?",
      messageTextLabel: "Nachricht *",
      messageTextPlaceholder: "Erzählen Sie uns mehr über Ihr Projekt...",
      sendButtonText: "Nachricht senden",
      thankYouFormTitle: "Vielen Dank!",
      thankYouFormMessage: "Wir haben Ihre Nachricht erhalten und werden uns bald bei Ihnen melden.",
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
      emailContactLabel: "Email",
      ourLocationTitle: "Unser Standort",

      // Gallery Page
      galleryPageTitle: "Unsere Expertise in jedem Detail",
      galleryPageIntro1: "Willkommen in unserer Galerie, wo Sie unsere Präzision, Qualität und Hingabe zur Metallverarbeitung sehen können. Durch jahrelange Erfahrung haben wir eine breite Palette von Produkten entwickelt—von",
      galleryPageIntro2: "Metallkonstruktionen",
      galleryPageIntro3: "bis zu",
      galleryPageIntro4: "präzise gefertigten Komponenten",
      galleryPageIntro5: "—angepasst an die spezifischen Anforderungen unserer Kunden.",
      galleryPageIntro6: "Durchsuchen Sie unser Portfolio, um Einblicke in die innovativen Lösungen und die überlegene Materialverarbeitung zu erhalten, die wir bei jedem Projekt anwenden. Werfen Sie einen Blick auf unsere Arbeit und überzeugen Sie sich selbst von der Qualität von Como Grit d.o.o!",
      galleryImageCounter: "von"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;