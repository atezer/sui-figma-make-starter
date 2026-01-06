/**
 * @component RadioGroup (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "./utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid", className)}
      style={{ gap: 'var(--Spacing-spacing-075)' }}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  disabled = false,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  const [isFocused, setIsFocused] = React.useState(false);

  const radioStyles = (checked: boolean): React.CSSProperties => ({
    width: '16px',
    height: '16px',
    borderRadius: 'var(--Radius-radius-full)',
    border: `var(--Border-Stroke-border-01) solid ${
      disabled
        ? 'var(--Component-radio-disabled-border)'
        : checked
          ? 'var(--Component-radio-checked-border)'
          : 'var(--Component-radio-default-border)'
    }`,
    backgroundColor: disabled
      ? 'var(--Component-radio-disabled-background)'
      : checked
        ? 'var(--Component-radio-checked-background)'
        : 'var(--Component-radio-default-background)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    transition: 'all 0.2s ease',
    flexShrink: 0,
    position: 'relative',
    ...(isFocused && !disabled && {
      boxShadow: `0 0 0 3px var(--State-focused-alpha)`,
    }),
  });

  const indicatorStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '8px',
    height: '8px',
    fill: disabled
      ? 'var(--Component-radio-disabled-on-contents)'
      : 'var(--Component-radio-checked-on-contents)',
  };

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      disabled={disabled}
      className={cn("aspect-square outline-none", className)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    >
      {({ checked }) => (
        <div style={radioStyles(!!checked)}>
          <RadioGroupPrimitive.Indicator
            data-slot="radio-group-indicator"
            className="flex items-center justify-center"
          >
            <CircleIcon style={indicatorStyles} />
          </RadioGroupPrimitive.Indicator>
        </div>
      )}
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
