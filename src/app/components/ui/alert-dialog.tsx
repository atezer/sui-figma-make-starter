/**
 * @component AlertDialog (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "./utils";

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        backgroundColor: 'var(--Color-alpha-alpha-black-64)',
        backdropFilter: 'blur(4px)',
      }}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          className
        )}
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          zIndex: 50,
          transform: 'translate(-50%, -50%)',
          display: 'grid',
          width: '100%',
          maxWidth: '500px',
          gap: 'var(--Spacing-spacing-100)',
          backgroundColor: 'var(--Surface-background-level-1)',
          padding: 'var(--Spacing-spacing-150)',
          borderRadius: 'var(--Radius-radius-100)',
          border: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
          boxShadow: 'var(--Depth-component-card-x) var(--Depth-component-card-y) var(--Depth-component-card-blur) var(--Depth-component-card-spread) var(--Depth-component-card-Color)',
        }}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      style={{ gap: 'var(--Spacing-spacing-050)' }}
      {...props}
    />
  );
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end", className)}
      style={{ gap: 'var(--Spacing-spacing-050)' }}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      className={className}
      style={{
        fontFamily: 'var(--Type-Heading-H3-Typeface)',
        fontSize: 'var(--Type-Heading-H3-Font-size)',
        fontWeight: 700,
        color: 'var(--Text-primary)',
      }}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      className={className}
      style={{
        fontFamily: 'var(--Type-Body-Regular-Typeface)',
        fontSize: 'var(--Type-Body-Regular-Font-size)',
        color: 'var(--Text-secondary)',
      }}
      {...props}
    />
  );
}

const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
