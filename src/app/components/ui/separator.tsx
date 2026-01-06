/**
 * @component Separator (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "./utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  const separatorStyles: React.CSSProperties = {
    backgroundColor: 'var(--Component-divider-default-background)',
    flexShrink: 0,
  };

  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "data-[orientation=horizontal]:h-[var(--Border-Stroke-border-01)]",
        "data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full",
        "data-[orientation=vertical]:w-[var(--Border-Stroke-border-01)]",
        className
      )}
      style={separatorStyles}
      {...props}
    />
  );
}

export { Separator };
