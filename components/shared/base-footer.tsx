import React from 'react'
import Typography from './typography'
import Image from 'next/image'
import { Separator } from '../ui/separator'
// Added Music2 for TikTok and X for Twitter
import { Facebook, Github, Instagram, Linkedin, Youtube, Music2, X } from 'lucide-react'
import codersLogo from "@/public/assets/images/codersclutch_white_1.png"
import Link from 'next/link'
import ScrollReveal from '../reusable/scroll-reveal'

function BaseFooter() {
  return (
    <section className="w-full flex flex-col gap-4 bg-app-primary-medium">
        <ScrollReveal>
            <div className="max-container 2xl:w-[85%] md:w-[95%] w-[95%] mx-auto pt-8 flex justify-between items-center gap-6">
                <Separator className="flex-1 bg-gray-600" />
                <div className="px-6 flex justify-center items-center gap-4">
                    {/* Instagram */}
                    <Link href="https://www.instagram.com/codersclutch?igsh=MTB1ZDNzbzk2dDhybg%3D%3D&utm_source=qr" target="_blank" className="text-gray-300 hover:text-[#E426A0] transition-colors">
                        <Instagram size={25} />
                    </Link>
                    
                    {/* TikTok - Added */}
                    <Link href="https://www.tiktok.com/@codersclutchlimited.com?_r=1&_t=ZM-92vhwFaIGoC" target="_blank" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        <Music2 size={25} />
                    </Link>

                    {/* Facebook */}
                    <Link href="https://www.facebook.com/share/1Ac742kQfm/?mibextid=wwXIfr" target="_blank" className="text-gray-300 hover:text-blue-700 transition-colors">
                        <Facebook size={25} />
                    </Link>

                    {/* Youtube */}
                    <Link href="/" target="_blank" className="text-gray-300 hover:text-red-700 transition-colors">
                        <Youtube size={27} />
                    </Link>

                    {/* LinkedIn */}
                    <Link href="https://www.linkedin.com/company/codersclutch-limited/" target="_blank" className="text-gray-300 hover:text-blue-500 transition-colors">
                        <Linkedin size={25} />
                    </Link>

                    {/* Github */}
                    <Link href="/" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                        <Github size={25} />
                    </Link>

                    {/* Sitemap SVG */}
                    <Link href="/page-sitemap"  
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                            <path fill="currentColor" d="M477.867,357.333h-19.2v-70.635c0-30.56-29.195-57.365-62.475-57.365H266.667v-64h29.867
                                c18.837-0.035,34.098-15.297,34.133-34.133V60.8c-0.035-18.837-15.297-34.098-34.133-34.133h-81.067
                                c-18.837,0.035-34.098,15.297-34.133,34.133v70.4c0.035,18.837,15.297,34.098,34.133,34.133h29.867v64H115.808
                                c-33.28,0-62.475,26.805-62.475,57.365v70.635h-19.2C15.297,357.369,0.035,372.63,0,391.467V451.2
                                c0.035,18.837,15.297,34.098,34.133,34.133h59.733c18.837-0.035,34.098-15.297,34.133-34.133v-59.733
                                c-0.035-18.837-15.297-34.098-34.133-34.133h-19.2v-70.635c0-20.629,21.717-36.032,41.141-36.032h129.525v106.667h-19.2
                                c-18.837,0.035-34.098,15.297-34.133,34.133V451.2c0.035,18.837,15.297,34.098,34.133,34.133h59.733
                                c18.837-0.035,34.098-15.297,34.133-34.133v-59.733c-0.035-18.837-15.297-34.098-34.133-34.133h-19.2V250.667h129.525
                                c19.424,0,41.141,15.403,41.141,36.032v70.635h-19.2c-18.837,0.035-34.098,15.297-34.133,34.133V451.2
                                c0.035,18.837,15.297,34.098,34.133,34.133h59.733c18.837-0.035,34.098-15.297,34.133-34.133v-59.733
                                C511.965,372.63,496.703,357.369,477.867,357.333z M93.867,378.667c7.069,0,12.8,5.731,12.8,12.8V451.2
                                c0,7.069-5.731,12.8-12.8,12.8H34.133c-7.069,0-12.8-5.731-12.8-12.8v-59.733c0-7.069,5.731-12.8,12.8-12.8H93.867z
                                M285.867,378.667c7.069,0,12.8,5.731,12.8,12.8V451.2c0,7.069-5.731,12.8-12.8,12.8h-59.733c-7.069,0-12.8-5.731-12.8-12.8
                                v-59.733c0-7.069,5.731-12.8,12.8-12.8H285.867z M215.467,144c-7.069,0-12.8-5.731-12.8-12.8V60.8c0-7.069,5.731-12.8,12.8-12.8
                                h81.067c7.069,0,12.8,5.731,12.8,12.8v70.4c0,7.069-5.731,12.8-12.8,12.8H215.467z M490.667,451.2c0,7.069-5.731,12.8-12.8,12.8
                                h-59.733c-7.069,0-12.8-5.731-12.8-12.8v-59.733c0-7.069,5.731-12.8,12.8-12.8h59.733c7.069,0,12.8,5.731,12.8,12.8V451.2z"/>
                        </svg>
                    </Link>
                </div>
                <Separator className="flex-1 bg-gray-600" />
            </div>
        </ScrollReveal>
        <div className="pb-8 max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-3 justify-center items-center text-white">
            <ScrollReveal>
                <div className="h-fit sm:w-32 w-24 max-h-16">
                    <Image
                        src={codersLogo}
                        alt="Coders Logo"
                        className="w-full h-full"
                    />
                </div>
            </ScrollReveal>
            <ScrollReveal>
                <Typography>© Copyrights 2021-2025 by Coders Clutch LLC</Typography>
            </ScrollReveal>
        </div>
        <div className='w-full py-6 flex flex-col gap-6 bg-app-primary-deep'>
            <ScrollReveal>
                <div className="w-full hidden sm:flex justify-center items-center gap-4 text-gray-200 text-[14px]">
                    <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                    <span className=''>|</span>
                    <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
                    <span className=''>|</span>
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <span className=''>|</span>
                    <Link href="/ims-policy" className="hover:text-white transition-colors">IMS Policy</Link>
                </div>
            </ScrollReveal>
            <ScrollReveal>
                <div className="w-fit mx-auto pt-6 sm:hidden flex flex-col items-start gap-4 text-gray-200 text-[14px]">
                    <div className='flex items-center gap-6 '>
                        <Link href="/cookie-policy"
                            className='pb-3 border-b border-white hover:text-white'
                        >Cookie Policy</Link>
                        <Link href="/terms-of-use"
                            className='pb-3 border-b border-white hover:text-white'
                        >Terms of Use</Link>
                    </div>
                    <div className='flex items-center gap-6'>
                        <Link href="/privacy-policy" className="hover:text-white"
                        >Privacy Policy</Link>
                        <Link href="/ims-policy" className="hover:text-white">IMS Policy</Link>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
  )
}

export default BaseFooter