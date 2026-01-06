/**
 * @component Pagination (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "./utils";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  const contentStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 'var(--Spacing-spacing-025)',
  };

  return (
    <ul
      data-slot="pagination-content"
      className={className}
      style={contentStyles}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  disabled,
  ...props
}: PaginationLinkProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const linkStyles: React.CSSProperties = {
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: 'var(--Radius-radius-025)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    backgroundColor: disabled
      ? 'var(--Component-pagination-disabled-background)'
      : isActive
        ? 'var(--Component-pagination-active-background)'
        : isHovered
          ? 'var(--Component-pagination-hover-background)'
          : 'var(--Component-pagination-default-background)',
    color: disabled
      ? 'var(--Component-pagination-disabled-on-contents)'
      : isActive
        ? 'var(--Component-pagination-active-on-contents)'
        : 'var(--Component-pagination-default-on-contents)',
    border: `var(--Border-Stroke-border-01) solid ${
      isActive 
        ? 'var(--Component-pagination-active-border)'
        : 'transparent'
    }`,
  };

  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={className}
      style={linkStyles}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      data-slot="pagination-previous"
      className={className}
      {...props}
    >
      <ChevronLeftIcon className="size-4" />
      <span className="sr-only">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      data-slot="pagination-next"
      className={className}
      {...props}
    >
      <ChevronRightIcon className="size-4" />
      <span className="sr-only">Next</span>
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  const ellipsisStyles: React.CSSProperties = {
    display: 'flex',
    height: '36px',
    width: '36px',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--Text-tertiary)',
  };

  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={className}
      style={ellipsisStyles}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};