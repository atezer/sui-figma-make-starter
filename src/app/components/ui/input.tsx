/**
 * @component Input (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ⚠️
 * @description Shadcn UI Input component styled with SUI design tokens
 */

import * as React from "react";

import { cn } from "./utils";

function Input({ 
  className, 
  type, 
  disabled = false,
  ...props 
}: React.ComponentProps<"input">) {
  const [isFocused, setIsFocused] = React.useState(false);

  const getInputStyles = (): React.CSSProperties => {
    return {
      // Typography
      fontFamily: 'var(--Type-Body-Regular-Typeface)',
      fontSize: 'var(--Type-Body-Regular-Font-size)',
      fontWeight: 400,
      lineHeight: 1.5,
      
      // Layout
      display: 'flex',
      height: '36px',
      width: '100%',
      minWidth: 0,
      padding: 'var(--Spacing-spacing-050) var(--Spacing-spacing-075)',
      borderRadius: 'var(--Radius-radius-025)',
      
      // Colors & States
      backgroundColor: disabled 
        ? 'var(--Component-input-disabled-background)'
        : isFocused
          ? 'var(--Component-input-focused-background)'
          : 'var(--Component-input-default-background)',
      color: disabled
        ? 'var(--Component-input-disabled-on-contents)'
        : 'var(--Component-input-default-on-contents)',
      border: `var(--Border-Stroke-border-01) solid ${
        disabled 
          ? 'var(--Component-input-disabled-border)'
          : isFocused
            ? 'var(--Component-input-focused-border)'
            : 'var(--Component-input-default-border)'
      }`,
      
      // Interaction
      outline: 'none',
      transition: 'all 0.2s ease',
      cursor: disabled ? 'not-allowed' : 'text',
      
      // Focus ring
      ...(isFocused && !disabled && {
        boxShadow: `0 0 0 3px var(--State-focused-alpha)`,
      }),
    };
  };

  return (
    <input
      type={type}
      data-slot="input"
      disabled={disabled}
      className={cn(
        // Placeholder styles
        "placeholder:text-[var(--Text-tertiary)]",
        // Selection styles
        "selection:bg-[var(--Color-blue-blue-500)] selection:text-white",
        // File input styles
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--Text-primary)]",
        className
      )}
      style={getInputStyles()}
      onFocus={(e) => {
        setIsFocused(true);
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        props.onBlur?.(e);
      }}
      {...props}
    />
  );
}

export { Input };