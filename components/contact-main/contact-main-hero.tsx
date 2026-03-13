"use client";
import { ChevronRight, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Typography from "../shared/typography";
import supportImg from "@/public/assets/images/speak_img.jpeg";
import { Card } from "../ui/card";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useMessenger } from "@/context/messenger-context";
import contactFormImg from "@/public/assets/images/home_culture/custom_softwares.png";

interface ContactInfo {
  id: string;
  title: string;
  href: string;
  img?: string | StaticImageData;
  content: string;
  description: string;
}

const contact_info = [
  {
    id: "1",
    title: "Get in touch",
    href: "/contact-us",
    img: supportImg,
    content: "Chat online or talk by phone",
    description: `Connect with support directly Monday through Friday`,
  },
  {
    id: "2",
    title: "Request form",
    href: "/contact-us/support",
    img: contactFormImg,
    content: "Request Coders Clutch sales support",
    description: `Submit a sales support form`,
  },
];

function ContactMainHero() {
  const router = useRouter();
  const { openMessenger } = useMessenger();

  const handleClick = (
    data: ContactInfo,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (data.id === "1") {
      openMessenger();
    } else if (data.id === "2") {
      router.push(data.href);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-gradient-to-t from-white to-[#d7f7f4]">
        <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8 lg:py-32 sm:py-24 py-16">
          <div className='w-full flex flex-col gap-4'>
            <div className='text-center'>
              <Typography
                className="xl:text-5xl lg:text-4xl sm:text-3xl font-medium xs:text-3xl text-2xl text-center text-app-primary-deep"
              >Expert <span className="text-app-secondary oleo-script">Support</span> for Your Digital Journey</Typography>

            </div>
            <div className='text-center w-[80%] md:w-[60%] mx-auto'>
              <Typography
                typo="body-large-regular"
                className="mx-auto inter text-center text-black !text-xl"
              >
                Have a question or need technical assistance? Our team is here to provide the guidance and solutions you need to keep your business running smoothly.
              </Typography>
            </div>
          </div>
          <section className="flex flex-col gap-8">
            <div className="w-full py-6 grid sm:grid-cols-2 gap-8 lg:gap-12">
              {contact_info.map((data, index) => (
                <Card
                  key={data.id}
                  className="group relative h-full flex flex-col min-h-[350px] border-none rounded-lg shadow-md overflow-hidden transition-all duration-500"
                >
                  <Link
                    href={data.href}
                    onClick={(e) => handleClick(data, e)}
                    className="relative w-full h-full flex flex-col p-10 justify-between z-10"
                  >
                    {/* Background Image & Overlay */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image
                        src={data.img || supportImg}
                        alt={data.content}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-app-primary-deep/95 via-app-primary-deep/50 to-app-primary-deep/30" />
                    </div>

                    <div className="relative z-10 flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                          {data.title}
                        </span>
                      </div>

                      <div className="flex flex-col gap-3">
                        <Typography className="text-2xl md:text-3xl font-semibold leading-tight text-white ">
                          {data.content}
                        </Typography>
                        <p className="text-white text-sm md:text-base leading-relaxed max-w-[90%] font-light inter">
                          {data.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center gap-3 mt-auto">
                      <span className="text-sm font-bold text-white uppercase tracking-widest">
                        {data.id === "1" ? "Start Chat" : "Open Form"}
                      </span>
                      <MoveRight size={20} className="text-white group-hover:text-app-secondary group-hover:translate-x-3 transition-all duration-500" />
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default ContactMainHero;
