import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-white text-app-primary-light hover:bg-white/90",
        primary: "bg-app-secondary text-white hover:bg-app-secondary/80",
        secondary: "bg-app-primary text-white hover:bg-secondary-300/80",
        accent: "bg-accent-300 text-white hover:bg-accent-300/80",
        outline: "border border-app-primary text-app-primary bg-transparent",
        link: "",
        ghost: "",
        destructive: "",
        table: "min-w-0 h-10 max-h-10 border border-neutral-light",
        pagination: "min-w-0",
        transparent: "",
        date: "min-w-0",
      },
      size: {
        default: "w-fit sm:px-6 px-3 sm:py-3 py-2 sm:text-base text-sm font-medium rounded-sm",
        sm: "w-fit h-8 rounded-sm px-3 text-xs",
        lg: "w-fit lg:py-3 py-2 text-lg rounded-sm px-10",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}  
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
