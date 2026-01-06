/**
 * @component Breadcrumb (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "./utils";

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  const listStyles: React.CSSProperties = {
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    color: 'var(--Component-breadcrumbs-default-on-contents)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 'var(--Spacing-spacing-050)',
  };

  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn("break-words", className)}
      style={listStyles}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  const itemStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--Spacing-spacing-050)',
  };

  return (
    <li
      data-slot="breadcrumb-item"
      className={className}
      style={itemStyles}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";
  const [isHovered, setIsHovered] = React.useState(false);

  const linkStyles: React.CSSProperties = {
    color: isHovered 
      ? 'var(--Component-breadcrumbs-hover-on-contents)'
      : 'var(--Component-breadcrumbs-default-on-contents)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  };

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={className}
      style={linkStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  const pageStyles: React.CSSProperties = {
    color: 'var(--Component-breadcrumbs-active-on-contents)',
    fontWeight: 600,
  };

  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={className}
      style={pageStyles}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  const separatorStyles: React.CSSProperties = {
    color: 'var(--Component-breadcrumbs-default-on-contents)',
    opacity: 0.6,
  };

  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={className}
      style={separatorStyles}
      {...props}
    >
      {children ?? <ChevronRight className="size-4" />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  const ellipsisStyles: React.CSSProperties = {
    display: 'flex',
    height: '24px',
    width: '24px',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={className}
      style={ellipsisStyles}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
