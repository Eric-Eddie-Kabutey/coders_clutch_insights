"use client";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { ArrowRight, Globe, Menu } from "lucide-react";
import Link from "next/link";
import codersLogo from "@/public/assets/images/coders_logo.png";
import Image from "next/image";
import { NavigationMenuLink } from "../ui/navigation-menu";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { languages, mobile_nav_links } from "@/constant";
import Typography from "./typography";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion-nav";

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [position, setPosition] = React.useState("EN");
  const router = useRouter();

  const handleNavItemClick = () => {
    setSheetOpen(false);
  };

  useEffect(() => {
    // Define getCurrentLang first
    const getCurrentLang = () => {
      const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
      if (match && match[1]) {
        const currentLangCode = match[1];
        const currentLang = languages.find((l) => l.code === currentLangCode);
        if (currentLang) setPosition(currentLang.label);
      } else {
        setPosition("EN");
      }
    };

    // Prevent multiple initializations
    if (window.googleTranslateInitialized) {
      getCurrentLang();
      return;
    }

    const addScript = () => {
      // Remove any existing scripts first
      const existingScripts = document.querySelectorAll(
        'script[src*="translate.google.com"]'
      );
      existingScripts.forEach((script) => script.remove());

      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      // Clear any existing instances
      const existingWidget = document.getElementById(
        "google_translate_element"
      );
      if (existingWidget) {
        existingWidget.innerHTML = "";
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,ja,nl",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      window.googleTranslateInitialized = true;
    };

    addScript();
    getCurrentLang();
  }, []);

  const handleLanguageChange = (val: string) => {
    const selectedLang = languages.find((l) => l.label === val);
    if (!selectedLang) return;

    const langCode = selectedLang.code;

    // Clear ALL cookies related to Google Translate
    const clearAllGoogleCookies = () => {
      const cookies = document.cookie.split(";");
      const domain = window.location.hostname;
      const domains = [
        "",
        `domain=${domain}`,
        `domain=.${domain}`,
        `domain=${domain.replace("www.", "")}`,
      ];

      cookies.forEach((cookie) => {
        const cookieName = cookie.split("=")[0].trim();
        if (cookieName.includes("goog")) {
          domains.forEach((d) => {
            document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; ${d}`;
          });
        }
      });
    };

    clearAllGoogleCookies();

    // Set new language
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${domain};`;

    // Force complete page reload bypassing all caches
    window.location.replace(
      window.location.pathname + "?_=" + new Date().getTime()
    );
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-2 border-b border-gray-300 bg-white">
      <div className="fade-bottom absolute left-0 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="max-container relative 2xl:w-[85%] w-[95%] mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <div id="google_translate_element" className="hidden"></div>
            <Link
              href={process.env.NEXT_PUBLIC_MAIN_SITE_URL || "https://codersclutch.com"}
              className="sm:w-36 xs:w-28 w-24 h-fit flex items-center gap-2 text-xl font-bold"
            >
              <Image
                src={codersLogo}
                alt="Coders Clutch"
                className="w-full h-full object-cover"
              />
            </Link>
          </NavbarLeft>
          <div>
            <Navigation />
          </div>
          <NavbarRight>
            <Button
              variant="primary"
              onClick={() => router.push("/contact-us")}
              className="sm:block hidden"
            >
              Get In Touch
            </Button>
            <Link href="https://codersclutchinnovationhub.com/">
              <Button
                variant="outline"
                className="sm:flex hidden items-center gap-2"
              >
                CCIH Website
              </Button>
            </Link>
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center cursor-pointer">
                    <Globe size={18} color="#6B6B6D" />
                    <Button
                      variant="default"
                      className="w-fit px-2 text-[#6B6B6D]"
                    >
                      {position}
                    </Button>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-fit ">
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={handleLanguageChange}
                    className="p-2 gap-8"
                  >
                    {languages.map((lang) => (
                      <DropdownMenuRadioItem
                        key={lang.id}
                        value={lang.label}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-full">
                          <Image
                            src={lang.flag}
                            alt={lang.name}
                            className="w-full h-full"
                          />
                        </div>
                        <Typography
                          typo="body-small-medium"
                          className="!text-[14px]"
                        >
                          {lang.name}
                        </Typography>
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 xl:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex flex-col justify-between gap-8"
              >
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href={process.env.NEXT_PUBLIC_MAIN_SITE_URL || "https://codersclutch.com"}
                    onClick={handleNavItemClick}
                    className="w-36 h-fit flex items-center gap-2 text-xl font-bold"
                  >
                    <Image
                      src={codersLogo}
                      alt="Coders Clutch"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Accordion type="single" collapsible>
                    {mobile_nav_links.map((navItem, index) => (
                      <AccordionItem
                        key={navItem.id}
                        value={`item-${index + 1}`}
                      >
                        <AccordionTrigger>
                          {navItem.contents ? (
                            <span className="text-black">{navItem.title}</span>
                          ) : (
                            <Link
                              href={navItem.href}
                              onClick={handleNavItemClick}
                            >
                              {navItem.title}
                            </Link>
                          )}
                        </AccordionTrigger>
                        {navItem.contents &&
                          navItem.contents.map((item) => (
                            <AccordionContent key={item.id} className="">
                              <Link
                                href={item.href}
                                onClick={handleNavItemClick}
                                className="flex items-center gap-3"
                              >
                                <item.icon size={16} />
                                <span>{item.title}</span>
                              </Link>
                            </AccordionContent>
                          ))}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </nav>
                <SheetFooter className="flex flex-col justify-end">
                  <Button
                    variant="primary"
                    onClick={() => router.push("/contact-us")}
                    className="w-full py-3 uppercase"
                  >
                    Book a meeting
                    <ArrowRight />
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
