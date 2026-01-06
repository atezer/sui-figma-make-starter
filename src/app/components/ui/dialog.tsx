/**
 * @component Dialog (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "./utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  const overlayStyles: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    zIndex: 50,
    backgroundColor: 'var(--Color-alpha-alpha-black-64)',
    backdropFilter: 'blur(4px)',
  };

  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      style={overlayStyles}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  const contentStyles: React.CSSProperties = {
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
    boxShadow: `
      var(--Depth-component-card-x) 
      var(--Depth-component-card-y) 
      var(--Depth-component-card-blur) 
      var(--Depth-component-card-spread) 
      var(--Depth-component-card-Color)
    `,
  };

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          className
        )}
        style={contentStyles}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          data-slot="dialog-close"
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none"
          style={{
            color: 'var(--Text-tertiary)',
            outline: 'none',
          }}
        >
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const headerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--Spacing-spacing-050)',
    textAlign: 'center',
  };

  return (
    <div
      data-slot="dialog-header"
      className={cn("sm:text-left", className)}
      style={headerStyles}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const footerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: 'var(--Spacing-spacing-050)',
  };

  return (
    <div
      data-slot="dialog-footer"
      className={cn("sm:flex-row sm:justify-end", className)}
      style={footerStyles}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  const titleStyles: React.CSSProperties = {
    fontFamily: 'var(--Type-Heading-H3-Typeface)',
    fontSize: 'var(--Type-Heading-H3-Font-size)',
    fontWeight: 700,
    lineHeight: 1.2,
    color: 'var(--Text-primary)',
  };

  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={className}
      style={titleStyles}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  const descriptionStyles: React.CSSProperties = {
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    fontWeight: 400,
    lineHeight: 1.5,
    color: 'var(--Text-secondary)',
  };

  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={className}
      style={descriptionStyles}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
