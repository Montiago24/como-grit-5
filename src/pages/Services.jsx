import React from 'react';
import { useTranslation } from "react-i18next";

import Service1 from '../assets/service1.webp'
import Service2 from '../assets/service2.webp'
import Service3 from '../assets/service3.webp'
import Service4 from '../assets/service4.webp'
import Service5 from '../assets/service5.webp'
import Service6 from '../assets/service6.webp'
import Service9 from '../assets/service9.webp'
import Service10 from '../assets/service10.png'

export default function Services() {
  const { t } = useTranslation();

  const servicesData = [
    {
      id: 1,
      title: t("metalConstruction"),
      description: t("metalConstructionDesc"),
      bullets: [
        t("metalConstructionBullet1"),
        t("metalConstructionBullet2"),
        t("metalConstructionBullet3")
      ],
      imageUrl: Service1,
    },
    {
      id: 2,
      title: t("metalMelting"),
      description: t("metalMeltingDesc"),
      bullets: [
        t("metalMeltingBullet1"),
        t("metalMeltingBullet2"),
        t("metalMeltingBullet3")
      ],
      imageUrl: Service2,
    },
    {
      id: 3,
      title: t("waterJetCutting"),
      description: t("waterJetCuttingDesc"),
      bullets: [
        t("waterJetCuttingBullet1"),
        t("waterJetCuttingBullet2"),
        t("waterJetCuttingBullet3")
      ],
      imageUrl: Service3,
    },
    {
      id: 4,
      title: t("laserCutting"),
      description: t("laserCuttingDesc"),
      bullets: [
        t("laserCuttingBullet1"),
        t("laserCuttingBullet2"),
        t("laserCuttingBullet3")
      ],
      imageUrl: Service4,
    },
    {
      id: 5,
      title: t("customMetalCutting"),
      description: t("customMetalCuttingDesc"),
      bullets: [
        t("customMetalCuttingBullet1"),
        t("customMetalCuttingBullet2"),
        t("customMetalCuttingBullet3")
      ],
      imageUrl: Service5,
    },
    {
      id: 6,
      title: t("metalCasting"),
      description: t("metalCastingDesc"),
      bullets: [
        t("metalCastingBullet1"),
        t("metalCastingBullet2"),
        t("metalCastingBullet3")
      ],
      imageUrl: Service6,
    },
     {
      id: 7,
      title: t("machiningToolsFabrication"),
      description: t("machiningToolsFabricationDesc"),
      bullets: [
        t("machiningToolsFabricationBullet1"),
        t("machiningToolsFabricationBullet2"),
        t("machiningToolsFabricationBullet3"),
                t("machiningToolsFabricationBullet4"),
                 t("machiningToolsFabricationBullet5"),
                  t("machiningToolsFabricationBullet6")

      ],
      imageUrl: Service10,
    },
    {
      id: 8,
      title: t("cncMachining"),
      description: t("cncMachiningDesc"),
      bullets: [
        t("cncMachiningBullet1"),
        t("cncMachiningBullet2"),
        t("cncMachiningBullet3")
      ],
      imageUrl: Service9,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">

      <div className="text-center mb-20">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          {t("servicesPageTitle")}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          {t("servicesPageSubtitle")}
        </p>
      </div>

      <div className="space-y-24">
        {servicesData.map((service, index) => (
          <div key={service.id}>
            <div className="flex flex-col lg:flex-row items-center gap-12">

              <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">{t("keyHighlights")}</h4>
                  <ul className="space-y-3 text-gray-600">
                    {service.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>

            </div>
            {index < servicesData.length - 1 && (
              <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-24" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
