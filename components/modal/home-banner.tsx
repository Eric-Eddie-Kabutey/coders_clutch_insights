'use client'
import Typography from "@/components/shared/typography"
import { Dialog, DialogContent, DialogFooter, } from "@/components/ui/dialog"
import Image from "next/image"
import bannerImg from "@/public/assets/images/culture_2.jpg"
import { Button } from "../ui/button"

type ModalProp = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function HomeBanner({open, setOpen}: ModalProp) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        
        <DialogContent className="sm:max-w-[1200px] w-[90%] h-fit lg:p-12 p-8 flex flex-col overflow-auto bg-[#1d646d]">
            
            <div className="dm-sans flex justify-between items-center gap-12">
                <div className="flex-1 flex flex-col gap-5 text-white">
                    <Typography
                        typo="header-3-semibold"
                        className="w-full"
                    >Get A Beautiful Website Designed by Experts</Typography>
                    <Typography
                        typo="body-large-medium"
                        className="sm:block hidden"
                    >
                        Let our team of website designers bring your vision to life! Schedule a quick call with one of our expert designers and get online with a website that truly dazzles your visitors and keeps them coming back for more! From blogs, to businesses, to online stores, join the hundreds of thousands of customers enjoying their new website designed by Bluehost!
                    </Typography>
                    <Button
                        variant="primary"
                        className="uppercase"
                    >
                        Request a Consult
                    </Button>
                </div>
                <div className="lg:block hidden xl:w-[400px] w-[300px] xl:h-[350px] h-[300px]">
                    <Image 
                        src={bannerImg}
                        alt="Banner image"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
          <DialogFooter>
            
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
