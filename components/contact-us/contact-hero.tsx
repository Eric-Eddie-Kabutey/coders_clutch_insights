"use client";
import { MoveRight } from "lucide-react";
import React from "react";
import Typography from "../shared/typography";
import { Card, CardContent, CardHeader } from "../ui/card";
import ghanaFlag from "@/public/assets/images/Flag_of_Ghana.png";
import gambiaFlag from "@/public/assets/images/Flag_of_The_Gambia.png";
import usaFlag from "@/public/assets/images/usa_flag.png";
import Image from "next/image";

const details = [
  {
    id: "1",
    title: "General Enquiry",
    content: `Looking for a demo, or have questions about our products and pricing?`,
    contact: "codersclutchenquiry@gmail.com",
  },
  {
    id: "2",
    img: ghanaFlag,
    title: "Ghana",
    content: `Tema, 5th Avenue Road – Greater Accra Region, Ghana`,
    contact: "+233 53 371 5072",
  },
  {
    id: "3",
    img: gambiaFlag,
    title: "Gambia",
    content: `MSJ Plaza Office 07, Brusubi TurnTable - After AfricMed`,
    contact: "+220 515 4308",
  },
  {
    id: "4",
    img: usaFlag,
    title: "USA",
    content: `849 SW Curtis St, Port Saint Lucie FL 34983 – Florida USA.`,
    contact: "+1 (954) 803-3132",
  },
];

function ContactHero() {
  return (
    <div className="w-full ">
      <div className="w-full bg-app-primary-deep">
        <div className="md:w-[70%] w-[90%] max-h-[500px] h-[55vh] mx-auto flex flex-col justify-center items-center gap-3 text-white text-center">
          <Typography typo="header-3-semibold">
            Looking for something in particular?
          </Typography>
          <Typography typo="body-large-medium">
            We&apos;re here to help.
          </Typography>
          <div className="w-12 h-[2px] bg-app-yellow"></div>
        </div>
      </div>
      <div className="max-w-[80rem] 2xl:w-[75%] xl:w-[85%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto xl:-mt-32 -mt-24 grid xl:grid-cols-4 sm:grid-cols-2 gap-6">
        {details.map((data) => (
          <Card
            key={data.id}
            className="group lg:h-[300px] h-[280px] w-full p-6 flex flex-col justify-between border-none bg-[#f3f3f7] hover:shadow-[0_0_20px_10px_rgba(111,66,255,0.25),0_0_40px_10px_rgba(66,153,255,0.2)] rounded-2xl"
          >
            <CardHeader className="p-0 flex flex-col gap-4">
              {data.img ? (
                <div className="w-10 h-fit">
                  <Image
                    src={data.img}
                    alt={`Flag of ${data.title}`}
                    className="w-full h-full rounded-sm"
                  />
                </div>
              ) : (
                <Typography
                  typo="body-small-medium"
                  className="w-fit px-2 py-1 bg-white rounded-md text-black"
                >
                  {data.title}
                </Typography>
              )}
              <Typography typo="body-small-regular" className="!leading-normal">
                {data.content}
              </Typography>
            </CardHeader>

            <CardContent className="p-0">
              <div className="inter flex items-center gap-3">
                <Typography
                  typo="body-small-semibold"
                  className="max-w-0 opacity-0 group-hover:max-w-[250px] group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden whitespace-nowrap text-blue-600 break-all"
                >
                  {data.contact}
                </Typography>
                <MoveRight size={20} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ContactHero;
