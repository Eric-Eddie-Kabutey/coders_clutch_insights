"use client";
import React from "react";
import Typography from "../shared/typography";
import { Card } from "../ui/card";
import ghanaFlag from "@/public/assets/images/Flag_of_Ghana.png";
import gambiaFlag from "@/public/assets/images/Flag_of_The_Gambia.png";
import usaFlag from "@/public/assets/images/usa_flag.png";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Importing specific background images for offices
import ghanaBg from "@/public/assets/images/home_culture/culture_1.jpg";
import gambiaBg from "@/public/assets/images/home_culture/culture_2.jpg";
import usaBg from "@/public/assets/images/home_culture/culture_3.jpg";

const office_locations = [
  {
    id: "2",
    flag: ghanaFlag,
    bgImg: ghanaBg,
    title: "Ghana",
    content: `Tema, 5th Avenue Road – Greater Accra Region, Ghana`,
    contact: "+233 53 371 5072",
  },
  {
    id: "3",
    flag: gambiaFlag,
    bgImg: gambiaBg,
    title: "Gambia",
    content: `MSJ Plaza Office 07, Brusubi TurnTable - After AfricMed`,
    contact: "+220 515 4308",
  },
  {
    id: "4",
    flag: usaFlag,
    bgImg: usaBg,
    title: "USA",
    content: `849 SW Curtis St, Port Saint Lucie FL 34983 – Florida USA.`,
    contact: "+1 (954) 803-3132",
  },
];

function SubscriberSupport() {
  return (
    <div className="w-full sm:pb-20 pb-12">
      <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col xs:gap-8 gap-4">
        <Typography typo="header-4-medium" className="inter">
          Our Offices
        </Typography>
        <div className="w-full py-6 grid sm:grid-cols-3 lg:gap-8 gap-6">
          {office_locations.map((data) => (
            <Card
              key={data.id}
              className="group relative h-full flex flex-col min-h-[250px] border border-app-primary-deep/20 rounded-lg overflow-hidden transition-all duration-500"
            >
              <div className="relative w-full h-full flex flex-col p-8 justify-between z-10">
                {/* Background Image & Overlay */}
                {/* <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={data.bgImg}
                    alt={`${data.title} Office`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-app-primary-deep/95 via-app-primary-deep/50 to-app-primary-deep/30" />
                </div> */}

                {/* Card Header with Flag and Title */}
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <Image
                      src={data.flag}
                      alt={`${data.title} Flag`}
                      className="w-10 h-6 rounded-sm shadow-sm"
                    />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-app-primary-deep">
                      Office Location
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Typography className="text-2xl font-semibold leading-tight text-app-primary-deep">
                      {data.title}
                    </Typography>
                    <p className="text-app-primary-deep text-sm leading-relaxed font-light inter">
                      {data.content}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Contact Link */}
                <div className="relative z-10 flex items-center justify-between mt-auto">
                  <a
                    href={`tel:${data.contact.replace(/[\s()-]/g, "")}`}
                    className="flex items-center gap-3 group/link"
                  >
                    <span className="text-xs font-bold text-app-primary-deep uppercase tracking-widest ">
                      {data.contact}
                    </span>
                    <MoveRight
                      size={20}
                      className="text-app-primary-deep group-hover:text-app-secondary group-hover:translate-x-3 transition-all duration-500"
                    />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SubscriberSupport;
