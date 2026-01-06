/**
 * @component Tooltip (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ⚠️
 * @description Shadcn UI Tooltip component styled with SUI design tokens
 */

"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "./utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 8,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  const contentStyles: React.CSSProperties = {
    // Typography
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-small-Regular-Font-size)',
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: 'center',
    
    // Colors
    backgroundColor: 'var(--Component-tooltips-default-background)',
    color: 'var(--Component-tooltips-default-on-contents)',
    
    // Layout
    padding: `var(--Spacing-spacing-050) var(--Spacing-spacing-075)`,
    borderRadius: 'var(--Radius-radius-025)',
    maxWidth: '300px',
    width: 'fit-content',
    
    // Elevation
    boxShadow: `
      var(--Depth-component-tooltip-x) 
      var(--Depth-component-tooltip-y) 
      var(--Depth-component-tooltip-blur) 
      var(--Depth-component-tooltip-spread) 
      var(--Depth-component-tooltip-Color)
    `,
    
    // Z-index
    zIndex: 50,
  };

  const arrowStyles: React.CSSProperties = {
    fill: 'var(--Component-tooltips-default-background)',
    zIndex: 50,
  };

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          "origin-(--radix-tooltip-content-transform-origin)",
          className
        )}
        style={contentStyles}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow 
          className="size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
          style={arrowStyles}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };