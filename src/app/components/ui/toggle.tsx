/**
 * @component Toggle (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const toggleVariants = cva("", {
  variants: {
    variant: {
      default: "",
      outline: "",
    },
    size: {
      default: "",
      sm: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const getToggleStyles = (
  variant: string = "default",
  size: string = "default",
  pressed: boolean = false,
  disabled: boolean = false
): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    fontWeight: 600,
    transition: 'all 0.2s ease',
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    border: 'none',
    borderRadius: 'var(--Radius-radius-025)',
    gap: 'var(--Spacing-spacing-050)',
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    default: { height: '36px', padding: '0 var(--Spacing-spacing-100)' },
    sm: { height: '32px', padding: '0 var(--Spacing-spacing-075)' },
    lg: { height: '40px', padding: '0 var(--Spacing-spacing-150)' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: pressed
        ? 'var(--Component-button-secondary-pressed-background)'
        : 'var(--Component-button-ghost-default-background)',
      color: pressed
        ? 'var(--Component-button-secondary-pressed-on-contents)'
        : 'var(--Component-button-ghost-default-on-contents)',
    },
    outline: {
      backgroundColor: pressed
        ? 'var(--Component-button-outlined-pressed-background)'
        : 'var(--Component-button-outlined-default-background)',
      color: 'var(--Component-button-outlined-default-on-contents)',
      border: `var(--Border-Stroke-border-01) solid var(--Component-button-outlined-default-border)`,
    },
  };

  return {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...(disabled && { opacity: 0.5 }),
  };
};

function Toggle({
  className,
  variant = "default",
  size = "default",
  disabled = false,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      disabled={disabled}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    >
      {({ pressed }) => (
        <div style={getToggleStyles(variant || "default", size || "default", pressed, disabled)}>
          {typeof props.children === 'function' ? props.children({ pressed }) : props.children}
        </div>
      )}
    </TogglePrimitive.Root>
  );
}

export { Toggle, toggleVariants };