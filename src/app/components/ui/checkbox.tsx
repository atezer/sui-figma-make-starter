/**
 * @component Checkbox (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ⚠️
 * @description Shadcn UI Checkbox component styled with SUI design tokens
 */

"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "./utils";

function Checkbox({
  className,
  disabled = false,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  const [isFocused, setIsFocused] = React.useState(false);

  const getCheckboxStyles = (checked: boolean): React.CSSProperties => {
    return {
      // Size
      width: '16px',
      height: '16px',
      
      // Border & Radius
      borderRadius: 'var(--Radius-radius-025)',
      border: `var(--Border-Stroke-border-01) solid ${
        disabled
          ? 'var(--Component-checkbox-disabled-border)'
          : checked
            ? 'var(--Component-checkbox-checked-border)'
            : 'var(--Component-checkbox-default-border)'
      }`,
      
      // Background
      backgroundColor: disabled
        ? 'var(--Component-checkbox-disabled-background)'
        : checked
          ? 'var(--Component-checkbox-checked-background)'
          : 'var(--Component-checkbox-default-background)',
      
      // Color (for checkmark)
      color: disabled
        ? 'var(--Component-checkbox-disabled-on-contents)'
        : checked
          ? 'var(--Component-checkbox-checked-on-contents)'
          : 'var(--Component-checkbox-default-on-contents)',
      
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

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      disabled={disabled}
      className={cn("peer outline-none", className)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    >
      {({ checked }) => (
        <>
          <div style={getCheckboxStyles(!!checked)}>
            <CheckboxPrimitive.Indicator
              data-slot="checkbox-indicator"
              className="flex items-center justify-center text-current transition-none"
            >
              <CheckIcon className="size-3.5" />
            </CheckboxPrimitive.Indicator>
          </div>
        </>
      )}
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
