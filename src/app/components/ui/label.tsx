/**
 * @component Label (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ⚠️
 * @description Shadcn UI Label component styled with SUI design tokens
 */

"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "./utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const labelStyles: React.CSSProperties = {
    // Typography
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    fontWeight: 600,
    lineHeight: 1.5,
    
    // Color
    color: 'var(--Component-label-default-on-contents)',
    
    // Layout
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--Spacing-spacing-050)',
    
    // Interaction
    userSelect: 'none',
    cursor: 'pointer',
  };

  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      style={labelStyles}
      {...props}
    />
  );
}

export { Label };
