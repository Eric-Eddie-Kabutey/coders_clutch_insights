"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, X } from "lucide-react";
import { WhatsappLogo } from "phosphor-react";
import { useMessenger } from "@/context/messenger-context";

export default function FloatingContactButton() {
  const icons = [<Phone key="phone" />, <MessageCircle key="whatsapp" />, <Mail key="mail" />];
  const [currentIcon, setCurrentIcon] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) return;
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [open]);

  const { openMessenger } = useMessenger();

  return (
    <div className="fixed sm:bottom-10 bottom-20 right-6 flex flex-col items-end gap-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="w-[300px] rale mb-3 bg-white text-black rounded-lg shadow-lg p-4 relative"
          >
            <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white rotate-45"></div>

            <div className="space-y-5">
              <a
                href="tel:+2205071723"
                target="_blank"
                className="flex items-center gap-3 cursor-pointer">
                <div className="p-2 bg-blue-500 rounded-full">
                  <Phone className="text-white" size={25} />
                </div>
                <span className="font-extralight text-[16px]">Call us now.</span>
              </a>
              <a
                href="https://wa.me/2205071723"
                target="_blank"
                className="flex items-center gap-3 cursor-pointer">
                <div className="p-2 bg-[#1ebea5] rounded-full text-white">
                  <WhatsappLogo size={25} />
                </div>
                <span className="font-extralight text-[16px]">Talk to us on WhatsApp</span>
              </a>
              <a
                href="mailto:ceo@codersclutch.com"
                target="_blank"
                className="flex items-center gap-3 cursor-pointer">
                <div className="p-2 bg-orange-500 rounded-full text-white">
                  <Mail className="text-white  " size={25} />
                </div>
                <span className="font-extralight text-[16px]">Send us an E-mail</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3">
        {/* Main Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="w-14 h-14 rounded-full bg-app-primary-deep flex items-center justify-center shadow-lg text-white"
          onClick={() => setOpen(!open)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={open ? "close" : currentIcon}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X size={24} /> : icons[currentIcon]}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* New Dedicated Messenger Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg text-white group relative"
          onClick={openMessenger}
        >
          <MessageCircle size={24} fill="white" />
          <span className="absolute right-16 bg-white text-app-primary-deep text-xs font-bold py-2 px-4 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            How can we help?
          </span>
        </motion.button>
      </div>
    </div>
  );
}
