/**
 * @component Switch (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ⚠️
 * @description Shadcn UI Switch component styled with SUI design tokens
 */

"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "./utils";

function Switch({
  className,
  disabled = false,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const [isFocused, setIsFocused] = React.useState(false);

  const getSwitchStyles = (checked: boolean): React.CSSProperties => {
    return {
      // Size
      height: '20px',
      width: '36px',
      
      // Background
      backgroundColor: disabled
        ? 'var(--Component-switch-disabled-background)'
        : checked
          ? 'var(--Component-switch-on-background)'
          : 'var(--Component-switch-off-background)',
      
      // Border & Radius
      border: `var(--Border-Stroke-border-01) solid ${
        disabled
          ? 'var(--Component-switch-disabled-border)'
          : checked
            ? 'var(--Component-switch-on-border)'
            : 'var(--Component-switch-off-border)'
      }`,
      borderRadius: 'var(--Radius-radius-full)',
      
      // Interaction
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      transition: 'all 0.2s ease',
      flexShrink: 0,
      
      // Focus ring
      ...(isFocused && !disabled && {
        boxShadow: `0 0 0 3px var(--State-focused-alpha)`,
      }),
    };
  };

  const getThumbStyles = (checked: boolean): React.CSSProperties => {
    return {
      // Size
      width: '16px',
      height: '16px',
      
      // Background
      backgroundColor: disabled
        ? 'var(--Component-switch-disabled-on-contents)'
        : checked
          ? 'var(--Component-switch-on-on-contents)'
          : 'var(--Component-switch-off-on-contents)',
      
      // Border & Radius
      borderRadius: 'var(--Radius-radius-full)',
      
      // Position
      transform: checked ? 'translateX(18px)' : 'translateX(2px)',
      transition: 'transform 0.2s ease',
      
      // Layout
      pointerEvents: 'none' as const,
      display: 'block',
    };
  };

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      disabled={disabled}
      className={cn(
        "peer inline-flex items-center outline-none",
        className
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    >
      {({ checked }) => (
        <>
          <div style={getSwitchStyles(!!checked)}>
            <SwitchPrimitive.Thumb
              data-slot="switch-thumb"
              style={getThumbStyles(!!checked)}
            />
          </div>
        </>
      )}
    </SwitchPrimitive.Root>
  );
}

export { Switch };
