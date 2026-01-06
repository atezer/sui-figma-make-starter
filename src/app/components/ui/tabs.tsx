/**
 * @component Tabs (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ⚠️
 * @description Shadcn UI Tabs component styled with SUI design tokens
 */

"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "./utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const listStyles: React.CSSProperties = {
    backgroundColor: 'var(--Component-tabs-solid-default-background)',
    borderRadius: 'var(--Radius-radius-100)',
    padding: '3px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '36px',
    width: 'fit-content',
  };

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("flex", className)}
      style={listStyles}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  disabled = false,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const [isFocused, setIsFocused] = React.useState(false);

  const getTriggerStyles = (active: boolean): React.CSSProperties => {
    return {
      // Typography
      fontFamily: 'var(--Type-Body-Regular-Typeface)',
      fontSize: 'var(--Type-Body-Regular-Font-size)',
      fontWeight: 600,
      lineHeight: 1.5,
      whiteSpace: 'nowrap',
      
      // Layout
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--Spacing-spacing-050)',
      padding: `var(--Spacing-spacing-050) var(--Spacing-spacing-075)`,
      flex: 1,
      
      // Border & Radius
      border: `var(--Border-Stroke-border-01) solid transparent`,
      borderRadius: 'var(--Radius-radius-100)',
      
      // Colors
      backgroundColor: disabled
        ? 'var(--Component-tabs-solid-disabled-background)'
        : active
          ? 'var(--Component-tabs-solid-active-background)'
          : 'transparent',
      color: disabled
        ? 'var(--Component-tabs-solid-disabled-on-contents)'
        : active
          ? 'var(--Component-tabs-solid-active-on-contents)'
          : 'var(--Component-tabs-solid-default-on-contents)',
      
      // Interaction
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      transition: 'all 0.2s ease',
      
      // Focus ring
      ...(isFocused && !disabled && {
        boxShadow: `0 0 0 3px var(--State-focused-alpha)`,
      }),
    };
  };

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      disabled={disabled}
      className={cn(
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    >
      {({ selected }) => (
        <div style={getTriggerStyles(selected)}>
          {props.children}
        </div>
      )}
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
