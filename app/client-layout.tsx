"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/shared/Navbar";
import FooterSection from "@/components/shared/Footer";
import BottomNav from "@/components/shared/bottom-nav";
import NavBanner from "@/components/shared/nav-banner";
import { usePathname } from "next/navigation";
import CustomPointer from "@/components/reusable/custom-pointer";
import TawkMessenger from "@/components/shared/tawk-messenger";
import { MessengerProvider } from "@/context/messenger-context";
import CustomMessenger from "@/components/reusable/custom-messenger";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/sign-up") {
    return <>{children}</>;
  }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MessengerProvider>
        <NavBanner />
        <Navbar />
        {children}
        <FooterSection />
        <BottomNav />
        <CustomPointer />
        <Toaster />
        {/* <TawkMessenger /> */}
        <CustomMessenger />
      </MessengerProvider>
    </ThemeProvider>
  );
}
