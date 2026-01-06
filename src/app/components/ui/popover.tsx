/**
 * @component Popover (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "./utils";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  const contentStyles: React.CSSProperties = {
    zIndex: 50,
    width: '280px',
    borderRadius: 'var(--Radius-radius-025)',
    border: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
    backgroundColor: 'var(--Surface-background-level-1)',
    padding: 'var(--Spacing-spacing-100)',
    color: 'var(--Text-primary)',
    boxShadow: `
      var(--Depth-component-tooltip-x) 
      var(--Depth-component-tooltip-y) 
      var(--Depth-component-tooltip-blur) 
      var(--Depth-component-tooltip-spread) 
      var(--Depth-component-tooltip-Color)
    `,
    outline: 'none',
  };

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        style={contentStyles}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };