import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent-default text-primary hover:bg-accent-hover",
        primary: "bg-primary text-white",
        outline: "border border-accent bg-transparent hover:bg-accent-default hover:text-primary",
         
      },
      size: {
        default: "h-[44px] px-4 py-6",
        md: "h-[48px] px-4 py-6",
        lg: "h-[56px] py-8 text-sm uppercase tracking-[2px]",
         
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
