/**
 * @component Button (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ⚠️
 * @description Shadcn UI Button component styled with SUI design tokens
 * All colors, spacing, and typography use SUI CSS custom properties
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "",
        secondary: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const getButtonStyles = (
  variant: string = "default",
  size: string = "default",
  disabled: boolean = false
): React.CSSProperties => {
  // Base styles
  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--Type-Font-family-primary)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    fontWeight: 600,
    lineHeight: 1.5,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    default: {
      height: '36px',
      padding: '0 var(--Spacing-spacing-100)',
      borderRadius: 'var(--Radius-radius-025)',
    },
    sm: {
      height: '32px',
      padding: '0 var(--Spacing-spacing-075)',
      borderRadius: 'var(--Radius-radius-025)',
      fontSize: 'var(--Type-Body-small-Regular-Font-size)',
    },
    lg: {
      height: '40px',
      padding: '0 var(--Spacing-spacing-150)',
      borderRadius: 'var(--Radius-radius-025)',
    },
    icon: {
      width: '36px',
      height: '36px',
      padding: '0',
      borderRadius: 'var(--Radius-radius-025)',
    },
  };

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: disabled 
        ? 'var(--Component-button-primary-disabled-background)'
        : 'var(--Component-button-primary-default-background)',
      color: disabled
        ? 'var(--Component-button-primary-disabled-on-contents)'
        : 'var(--Component-button-primary-default-on-contents)',
    },
    destructive: {
      backgroundColor: disabled
        ? 'var(--Component-button-destructive-disabled-background)'
        : 'var(--Component-button-destructive-default-background)',
      color: disabled
        ? 'var(--Component-button-destructive-disabled-on-contents)'
        : 'var(--Component-button-destructive-default-on-contents)',
    },
    outline: {
      backgroundColor: disabled
        ? 'var(--Component-button-outlined-disabled-background)'
        : 'var(--Component-button-outlined-default-background)',
      color: disabled
        ? 'var(--Component-button-outlined-disabled-on-contents)'
        : 'var(--Component-button-outlined-default-on-contents)',
      border: `var(--Border-Stroke-border-01) solid ${disabled ? 'var(--Component-button-outlined-disabled-border)' : 'var(--Component-button-outlined-default-border)'}`,
    },
    secondary: {
      backgroundColor: disabled
        ? 'var(--Component-button-secondary-disabled-background)'
        : 'var(--Component-button-secondary-default-background)',
      color: disabled
        ? 'var(--Component-button-secondary-disabled-on-contents)'
        : 'var(--Component-button-secondary-default-on-contents)',
    },
    ghost: {
      backgroundColor: disabled
        ? 'var(--Component-button-ghost-disabled-background)'
        : 'var(--Component-button-ghost-default-background)',
      color: disabled
        ? 'var(--Component-button-ghost-disabled-on-contents)'
        : 'var(--Component-button-ghost-default-on-contents)',
    },
    link: {
      backgroundColor: 'transparent',
      color: disabled
        ? 'var(--Component-button-link-disabled-on-contents)'
        : 'var(--Component-button-link-default-on-contents)',
      textDecoration: 'none',
    },
  };

  return {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };
};

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  disabled = false,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      setIsHovered(true);
      onMouseEnter?.(e);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      setIsHovered(false);
      setIsPressed(false);
      onMouseLeave?.(e);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      setIsPressed(true);
      onMouseDown?.(e);
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      setIsPressed(false);
      onMouseUp?.(e);
    }
  };

  // Dynamic state-based styles
  const getStateStyles = (): React.CSSProperties => {
    if (disabled) return {};

    const variantKey = variant || 'default';
    
    if (isPressed) {
      const pressedStyles: Record<string, React.CSSProperties> = {
        default: { backgroundColor: 'var(--Component-button-primary-pressed-background)' },
        destructive: { backgroundColor: 'var(--Component-button-destructive-pressed-background)' },
        outline: { 
          backgroundColor: 'var(--Component-button-outlined-pressed-background)',
          borderColor: 'var(--Component-button-outlined-pressed-border)',
        },
        secondary: { backgroundColor: 'var(--Component-button-secondary-pressed-background)' },
        ghost: { backgroundColor: 'var(--Component-button-ghost-pressed-background)' },
        link: { textDecoration: 'underline' },
      };
      return pressedStyles[variantKey] || {};
    }

    if (isHovered) {
      const hoverStyles: Record<string, React.CSSProperties> = {
        default: { backgroundColor: 'var(--Component-button-primary-hover-background)' },
        destructive: { backgroundColor: 'var(--Component-button-destructive-hover-background)' },
        outline: { 
          backgroundColor: 'var(--Component-button-outlined-hover-background)',
          borderColor: 'var(--Component-button-outlined-hover-border)',
        },
        secondary: { backgroundColor: 'var(--Component-button-secondary-hover-background)' },
        ghost: { backgroundColor: 'var(--Component-button-ghost-hover-background)' },
        link: { textDecoration: 'underline' },
      };
      return hoverStyles[variantKey] || {};
    }

    return {};
  };

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled}
      style={{
        ...getButtonStyles(variant || "default", size || "default", disabled),
        ...getStateStyles(),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    />
  );
}

export { Button, buttonVariants };