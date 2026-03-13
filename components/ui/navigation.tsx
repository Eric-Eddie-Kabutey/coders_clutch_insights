"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import Typography from "../shared/typography";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { SteeringWheel, Strategy } from "@phosphor-icons/react";
import mobileImg from "@/public/assets/images/mobileImg.jpg"
import iotAutoImg from "@/public/assets/images/solutions/iot-automobile/iot_range_img.png"
import careerImg from "@/public/assets/images/about/career_5.jpg"
import Image from "next/image";
import Link from "next/link";
import { nav_links } from "@/constant";
import { useRouter } from "next/navigation";
import { GraduationCap } from "phosphor-react";

export default function Navigation() {
  const router = useRouter();
  const [selectedSubLink, setSelectedSubLink] = React.useState(nav_links[1]?.main_contents?.[0].id)

  const currentSubLink = nav_links[1].main_contents?.find(link => link.id === selectedSubLink)

  return (
    <NavigationMenu className="hidden xl:flex">
      <NavigationMenuList>

        {nav_links.map((link) => (
          link.contents ? (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuTrigger
                onMouseEnter={() => {
                  if (link.main_contents?.length) {
                    setSelectedSubLink(link.main_contents[0].id);
                  }
                }}
              >
                <Link
                  href={link.href}
                >
                  {link.nav_name}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-fit h-full pb-4 flex items-stretch gap-3 p-4 ">
                  <li className="w-[230px] min-h-full">
                    <NavigationMenuLink asChild>
                      <div
                        className="flex h-full w-full select-none flex-col gap-6 rounded-md p-3 no-underline outline-none focus:shadow-md "

                      >
                        <Link
                          className="flex flex-col gap-2"
                          href={link.href}
                        >
                          <Typography
                            className=""
                            typo="header-6-semibold"
                          >
                            {link.title}
                          </Typography>
                          <Typography
                            typo="body-medium-regular"
                            className="text-gray-800 leading-normal line-clamp-2"
                          >
                            {link.description}
                          </Typography>
                        </Link>
                        <div
                          className="space-y-2"
                        >
                          {link.main_contents ? (
                            link.main_contents.map((sub_link) => (
                              <Button
                                variant="outline"
                                key={sub_link.id}
                                onMouseEnter={() => setSelectedSubLink(sub_link.id)}
                                className={`w-full px-1 !py-2 text-sm justify-start text-wrap text-left !leading-5 ${selectedSubLink === sub_link.id ? "!text-app-primary-deep/90 bg-app-primary-deep/10" : "text-black"} hover:!text-gray-700 border-gray-300 hover:bg-app-primary-deep/10 rounded-sm`}
                              >
                                {sub_link.title}
                              </Button>
                            ))
                          ) : (
                            <Typography
                              typo="body-medium-medium"
                              className=""
                            >
                              {link.sub_title}
                            </Typography>
                          )}
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </li>

                  {link.main_contents ? (
                    <div className="w-[750px] flex flex-col">
                      <div className="w-full h-fit grid grid-cols-2 ">
                        {currentSubLink?.contents?.map((link) => (
                          <div key={link.id} className="min-w-[250px] h-fit text-black flex gap-16 border-l border-gray-300 border-dashed">
                            <ListItem
                              href={link?.href}
                              title={link.title}
                              icon={link.icon}
                            >
                              {link.description}

                            </ListItem>

                          </div>
                        ))}

                      </div>
                      {currentSubLink?.title === "Mobile Applications" ? (
                        <div className="w-full p-4 grid grid-cols-2 gap- border-t border-gray-200 mt-4">
                          <div className="w-[80%] mx-auto h-[200px]">
                            <Image
                              src={mobileImg}
                              alt="Consultant"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="pl-6 flex flex-col gap-1 border-l">
                            <div className="w-fit p-1.5 border border-gray-400 rounded-full">
                              <Strategy className="w-5 h-5 text-gray-800" />
                            </div>
                            <Typography typo="header-6-semibold">
                              Let&apos;s Go Live
                            </Typography>
                            <Typography typo="body-medium-regular">
                              Partner with us go live now!
                            </Typography>
                            <Button
                              className="mt-3 !px-6 !py-3 !text-sm text-app-secondary hover:bg-app-secondary hover:text-white border-2 border-app-secondary"
                            >
                              Talk to a consultant
                              <ArrowRight className="ml-2" />
                            </Button>
                          </div>
                        </div>
                      ) : currentSubLink?.title === "Digital Transformation" ? (
                        <div className="w-full p-4 grid grid-cols-2 gap- border-t border-gray-200 mt-4 bg-green-200 rounded-xl">
                          <div className="w-[90%] mx-auto h-fit">
                            <Image
                              src={iotAutoImg}
                              alt="Consultant"
                              className="w-full h-full max-h-[250px] object-cover rounded-lg"
                            />
                          </div>
                          <div className="pl-6 pt-6 flex flex-col gap-2 border-l">
                            <div className="w-fit p-1.5 border border-gray-400 rounded-full">
                              <SteeringWheel size={35} className="text-gray-800" />
                            </div>
                            <Typography typo="header-6-semibold">
                              IoT for Automobile
                            </Typography>
                            <Typography typo="body-medium-regular" className="!leading-tight text-gray-600">
                              EVs, Improved vehicle connectivity and fleet management
                            </Typography>
                            <Button
                              variant="outline"
                              onClick={() => router.push("/solutions/custom-softwares/iot-automobile")}
                              className="mt-3 !px-6 !py-3 !text-sm text-app-primary-light hover:bg-app-primary-light hover:text-white border-2 border-app-primary-light"
                            >
                              Explore solution
                              <ArrowRight className="ml-2" />
                            </Button>
                          </div>
                        </div>
                      ) : currentSubLink?.title === "Managed IT Services" ? (
                        <div className="w-full p-4 grid grid-cols-2 gap- border-t border-gray-200 mt-4 bg-green-200 rounded-xl">
                          <div className="w-[90%] mx-auto h-fit ">
                            <Image
                              src={careerImg}
                              alt="Consultant"
                              className="w-full h-full max-h-[250px] object-cover rounded-lg"
                            />
                          </div>
                          <div className="pl-6 flex flex-col gap-2 border-l">
                            <div className="w-fit p-1.5 border border-gray-400 rounded-full">
                              <GraduationCap size={35} className="text-gray-800" />
                            </div>
                            <Typography typo="header-6-semibold">
                              Training & Upskilling
                            </Typography>
                            <Typography typo="body-small-regular" className="!leading-snug text-gray-600">
                              Customized training programs to equip your team with digital skills for the evolving
                              technology landscape.
                            </Typography>
                            <Button
                              variant="outline"
                              onClick={() => router.push("/solutions/custom-softwares/iot-automobile")}
                              className="mt-3 !px-6 !py-3 !text-sm text-app-primary-light hover:bg-app-primary-light hover:text-white border-2 border-app-primary-light"
                            >
                              Explore solution
                              <ArrowRight className="ml-2" />
                            </Button>
                          </div>
                        </div>
                      ) : ("")}
                    </div>
                  ) : (
                    <div className="w-[750px] grid grid-cols-3 ">
                      {link.contents?.map((link) => (
                        <div key={link.id} className="min-w-[250px] h-full flex gap-16 border-l border-gray-300 border-dashed">
                          <ListItem href={link.href} icon={link.icon} title={link.title}>
                            {link.description}
                          </ListItem>

                        </div>
                      ))}

                    </div>
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem
              key={link.href}
              className="px-4"
            >
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  title={link.description}
                >
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { icon?: React.ComponentType<{ className?: string }> | null; href?: string; title?: string; }
>(({ className, title, icon: Icon, children, href, ...props }, ref) => {
  const isBrandingLab = title === "Branding lab & PR";

  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          className={cn(
            "block h-fit w-full select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors",
            className,
          )}
          ref={ref}
          {...props}
        >
          {href && (
            <Link href={href} className={`pb-6 pt-2 flex flex-col gap-2 ${!isBrandingLab && 'hover:bg-gray-100'}`}>
              <div className="flex items-center gap-5">
                <div className="w-[2px] h-4 bg-app-green-text"></div>
                <div className="flex flex-col gap-4">
                  {Icon && (
                    <div className="w-fit p-1.5 border border-gray-400 rounded-full">
                      <Icon className="w-5 h-5 text-gray-800" />
                    </div>
                  )}
                  <div className="pb-1 text-lg text-black font-medium leading-none">{title}</div>
                </div>
              </div>
              <div className="px-5">
                <p className="text-sm leading-normal text-gray-800">
                  {children}
                  {href && !isBrandingLab && (
                    <Link href={href} className="text-app-secondary ml-1 whitespace-nowrap">
                      read more {">"}
                    </Link>
                  )}
                </p>
                {isBrandingLab && (
                  <Button
                    className="mt-3 !px-6 !py-2 !text-sm text-app-secondary hover:bg-app-secondary hover:text-white border-2 border-app-secondary"
                  >
                    <Link href="https://www.codersclutchbrandlab.com/">
                      Visit website {">"}
                    </Link>
                  </Button>
                )}
              </div>
            </Link>
          )}
        </div>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";