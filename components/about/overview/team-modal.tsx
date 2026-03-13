'use client'
import Typography from "@/components/shared/typography"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { TeamMember } from "@/type"
import Image from "next/image"

type ModalProp = {
    open: boolean;
    setOpen: (open: boolean) => void;
    member: TeamMember | null;
}

export function TeamDetailModal({open, setOpen, member}: ModalProp) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        
        <DialogContent className="sm:max-w-[850px] h-[95%] flex flex-col overflow-auto">
            <div
                className={`w-[50%] mx-auto h-[55%]`}
            >
                <Image 
                    src={member?.img|| ''}
                    alt={`Member ${member?.name}`}
                    className="w-full h-full object-cover object-top rounded-xl"
                />
            </div>
          <DialogHeader
            className="py-2 flex flex-col"
          >
            <DialogTitle
                className="text-[1.6rem] font-medium leading-none"
            >
                {member?.name}
            </DialogTitle>
            <Typography
                className="text-app-secondary"
            >
                {member?.title}
            </Typography>
          </DialogHeader>
            
            {/* <div className="dm-sans flex flex-col gap-2">
                {member?.description.map(data => (
                    <Typography
                        key={data}
                        typo="body-small-regular"
                        className="!font-extralight !text-base tracking-wider"
                    >
                        {data}
                    </Typography>
                ))}
            </div> */}
            <div className="dm-sans flex flex-col gap-2">
            {member?.description.map((data, index) => {
                // Split the text by asterisks and map to elements
                const parts = data.split(/(\*[^*]+\*)/g);
                
                return (
                <Typography
                    key={index}
                    typo="body-small-regular"
                    className="!font-extralight !text-base tracking-wider"
                >
                    {parts.map((part, i) => {
                    if (part.startsWith('*') && part.endsWith('*')) {
                        // Remove asterisks and make bold
                        const boldText = part.slice(1, -1);
                        return (
                        <span key={i} className="font-bold">
                            {boldText}
                        </span>
                        );
                    }
                    return part;
                    })}
                </Typography>
                );
            })}
            </div>
          <DialogFooter>
            
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
