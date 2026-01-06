/**
 * @component Textarea (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

import * as React from "react";

import { cn } from "./utils";

function Textarea({ 
  className, 
  disabled = false,
  ...props 
}: React.ComponentProps<"textarea">) {
  const [isFocused, setIsFocused] = React.useState(false);

  const textareaStyles: React.CSSProperties = {
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    fontWeight: 400,
    lineHeight: 1.5,
    display: 'flex',
    minHeight: '80px',
    width: '100%',
    minWidth: 0,
    padding: 'var(--Spacing-spacing-050) var(--Spacing-spacing-075)',
    borderRadius: 'var(--Radius-radius-025)',
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
    outline: 'none',
    transition: 'all 0.2s ease',
    cursor: disabled ? 'not-allowed' : 'text',
    resize: 'vertical',
    ...(isFocused && !disabled && {
      boxShadow: `0 0 0 3px var(--State-focused-alpha)`,
    }),
  };

  return (
    <textarea
      data-slot="textarea"
      disabled={disabled}
      className={cn(
        "placeholder:text-[var(--Text-tertiary)]",
        "selection:bg-[var(--Color-blue-blue-500)] selection:text-white",
        className
      )}
      style={textareaStyles}
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

export { Textarea };