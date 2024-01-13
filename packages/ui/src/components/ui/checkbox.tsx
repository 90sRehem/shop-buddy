"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "../../lib/utils"

export type CustomCheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>
const CustomCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  />
))
CustomCheckbox.displayName = CheckboxPrimitive.Root.displayName

const CheckboxIndicator = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Indicator
    ref={ref}
    className={cn(
      "absolute inset-0 flex items-center justify-center w-full h-full rounded-sm border border-primary shadow-sm transition-colors duration-150",
      className
    )}
    {...props}
  >
    <CheckIcon className="w-2 h-2" />
  </CheckboxPrimitive.Indicator>
))

export const Checkbox = Object.assign(CustomCheckbox, {
  Indicator: CheckboxIndicator,
})


