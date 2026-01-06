/**
 * @component DropdownMenu (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "./utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      className={cn(
        "flex cursor-default select-none items-center rounded-sm outline-none",
        "data-[state=open]:bg-[var(--State-hover)]",
        inset && "pl-8",
        className
      )}
      style={{
        padding: 'var(--Spacing-spacing-050) var(--Spacing-spacing-075)',
        fontSize: 'var(--Type-Body-Regular-Font-size)',
        fontFamily: 'var(--Type-Body-Regular-Typeface)',
        gap: 'var(--Spacing-spacing-050)',
      }}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      style={{
        zIndex: 50,
        minWidth: '220px',
        overflow: 'hidden',
        borderRadius: 'var(--Radius-radius-025)',
        border: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
        backgroundColor: 'var(--Surface-background-level-1)',
        padding: 'var(--Spacing-spacing-025)',
        color: 'var(--Text-primary)',
        boxShadow: 'var(--Depth-component-tooltip-x) var(--Depth-component-tooltip-y) var(--Depth-component-tooltip-blur) var(--Depth-component-tooltip-spread) var(--Depth-component-tooltip-Color)',
      }}
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        style={{
          zIndex: 50,
          minWidth: '220px',
          overflow: 'hidden',
          borderRadius: 'var(--Radius-radius-025)',
          border: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
          backgroundColor: 'var(--Surface-background-level-1)',
          padding: 'var(--Spacing-spacing-025)',
          color: 'var(--Text-primary)',
          boxShadow: 'var(--Depth-component-tooltip-x) var(--Depth-component-tooltip-y) var(--Depth-component-tooltip-blur) var(--Depth-component-tooltip-spread) var(--Depth-component-tooltip-Color)',
        }}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuItem({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm outline-none transition-colors",
        "focus:bg-[var(--State-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      style={{
        padding: 'var(--Spacing-spacing-050) var(--Spacing-spacing-075)',
        fontSize: 'var(--Type-Body-Regular-Font-size)',
        fontFamily: 'var(--Type-Body-Regular-Typeface)',
        gap: 'var(--Spacing-spacing-050)',
      }}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none transition-colors",
        "focus:bg-[var(--State-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none transition-colors",
        "focus:bg-[var(--State-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      className={cn(inset && "pl-8", className)}
      style={{
        padding: 'var(--Spacing-spacing-050) var(--Spacing-spacing-075)',
        fontSize: 'var(--Type-Body-small-Regular-Font-size)',
        fontWeight: 600,
        color: 'var(--Text-tertiary)',
      }}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={className}
      style={{
        margin: 'var(--Spacing-spacing-025) 0',
        height: 'var(--Border-Stroke-border-01)',
        backgroundColor: 'var(--Border-primary)',
      }}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn("ml-auto tracking-widest", className)}
      style={{
        fontSize: 'var(--Type-Body-small-Regular-Font-size)',
        color: 'var(--Text-tertiary)',
        opacity: 0.6,
      }}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};