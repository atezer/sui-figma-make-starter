/**
 * @component Accordion (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "./utils";

const Accordion = AccordionPrimitive.Root;

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  const itemStyles: React.CSSProperties = {
    borderBottom: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
  };

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={className}
      style={itemStyles}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const triggerStyles: React.CSSProperties = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 'var(--Spacing-spacing-100) 0',
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    fontWeight: 600,
    color: 'var(--Text-primary)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    background: 'none',
    border: 'none',
    width: '100%',
    textAlign: 'left',
  };

  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group [&[data-state=open]>svg]:rotate-180",
          className
        )}
        style={triggerStyles}
        {...props}
      >
        {children}
        <ChevronDownIcon 
          className="size-4 shrink-0 transition-transform duration-200"
          style={{ color: 'var(--Text-tertiary)' }}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const contentStyles: React.CSSProperties = {
    overflow: 'hidden',
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    color: 'var(--Text-secondary)',
  };

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      style={contentStyles}
      {...props}
    >
      <div style={{ paddingBottom: 'var(--Spacing-spacing-100)' }}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
