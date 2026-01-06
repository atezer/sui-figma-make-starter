/**
 * @component Progress (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "./utils";

function Progress({
  className,
  value = 0,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const rootStyles: React.CSSProperties = {
    position: 'relative',
    height: '8px',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 'var(--Radius-radius-full)',
    backgroundColor: 'var(--Surface-background-level-0)',
    border: `var(--Border-Stroke-border-01) solid var(--Border-alpha-08)`,
  };

  const indicatorStyles: React.CSSProperties = {
    height: '100%',
    width: '100%',
    backgroundColor: 'var(--Color-blue-blue-500)',
    transition: 'transform 0.3s ease',
    borderRadius: 'var(--Radius-radius-full)',
  };

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={className}
      style={rootStyles}
      value={value}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        style={{
          ...indicatorStyles,
          transform: `translateX(-${100 - (value || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
