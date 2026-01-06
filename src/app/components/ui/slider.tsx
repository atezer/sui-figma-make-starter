/**
 * @component Slider (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "./utils";

function Slider({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        style={{
          position: 'relative',
          height: '4px',
          width: '100%',
          flexGrow: 1,
          overflow: 'hidden',
          borderRadius: 'var(--Radius-radius-full)',
          backgroundColor: 'var(--Surface-background-level-0)',
        }}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          style={{
            position: 'absolute',
            height: '100%',
            backgroundColor: 'var(--Color-blue-blue-500)',
          }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        data-slot="slider-thumb"
        className="block transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
        style={{
          height: '16px',
          width: '16px',
          borderRadius: 'var(--Radius-radius-full)',
          border: `2px solid var(--Color-blue-blue-500)`,
          backgroundColor: 'var(--Surface-background-level-1)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      />
    </SliderPrimitive.Root>
  );
}

export { Slider };
