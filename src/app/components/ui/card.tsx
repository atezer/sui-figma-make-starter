/**
 * @component Card (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ⚠️
 * @description Shadcn UI Card component styled with SUI Surface tokens
 */

import * as React from "react";

import { cn } from "./utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  const cardStyles: React.CSSProperties = {
    backgroundColor: 'var(--Surface-background-level-1)',
    color: 'var(--Text-primary)',
    borderRadius: 'var(--Radius-radius-100)',
    border: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
    boxShadow: `
      var(--Depth-component-card-x) 
      var(--Depth-component-card-y) 
      var(--Depth-component-card-blur) 
      var(--Depth-component-card-spread) 
      var(--Depth-component-card-Color)
    `,
  };

  return (
    <div
      data-slot="card"
      className={cn("flex flex-col gap-6", className)}
      style={cardStyles}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  const headerStyles: React.CSSProperties = {
    padding: `var(--Spacing-spacing-150) var(--Spacing-spacing-150) 0`,
  };

  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        className
      )}
      style={headerStyles}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  const titleStyles: React.CSSProperties = {
    fontFamily: 'var(--Type-Heading-H4-Typeface)',
    fontSize: 'var(--Type-Heading-H4-Font-size)',
    fontWeight: 700,
    lineHeight: 1.2,
    color: 'var(--Text-primary)',
  };

  return (
    <h4
      data-slot="card-title"
      className={className}
      style={titleStyles}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  const descriptionStyles: React.CSSProperties = {
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    fontWeight: 400,
    lineHeight: 1.5,
    color: 'var(--Text-secondary)',
  };

  return (
    <p
      data-slot="card-description"
      className={className}
      style={descriptionStyles}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  const contentStyles: React.CSSProperties = {
    padding: `0 var(--Spacing-spacing-150)`,
  };

  return (
    <div
      data-slot="card-content"
      className={cn("[&:last-child]:pb-6", className)}
      style={contentStyles}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  const footerStyles: React.CSSProperties = {
    padding: `0 var(--Spacing-spacing-150) var(--Spacing-spacing-150)`,
  };

  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center", className)}
      style={footerStyles}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
