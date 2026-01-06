/**
 * @component Badge (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ⚠️
 * @description Shadcn UI Badge component styled with SUI design tokens
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none transition-all overflow-hidden w-fit",
  {
    variants: {
      variant: {
        default: "",
        secondary: "",
        destructive: "",
        outline: "",
        success: "",
        warning: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const getBadgeStyles = (variant: string = "default"): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--Type-Font-family-primary)',
    fontSize: 'var(--Type-Body-small-Regular-Font-size)',
    fontWeight: 600,
    lineHeight: 1.5,
    padding: '2px var(--Spacing-spacing-050)',
    borderRadius: 'var(--Radius-radius-025)',
    border: `var(--Border-Stroke-border-01) solid transparent`,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--Component-badge-default-background)',
      color: 'var(--Component-badge-default-on-contents)',
      borderColor: 'var(--Component-badge-default-border)',
    },
    secondary: {
      backgroundColor: 'var(--Component-badge-secondary-background)',
      color: 'var(--Component-badge-secondary-on-contents)',
      borderColor: 'var(--Component-badge-secondary-border)',
    },
    destructive: {
      backgroundColor: 'var(--Feedback-error)',
      color: 'var(--Color-global-white)',
      borderColor: 'transparent',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--Text-primary)',
      borderColor: 'var(--Border-primary)',
    },
    success: {
      backgroundColor: 'var(--Feedback-success)',
      color: 'var(--Color-global-white)',
      borderColor: 'transparent',
    },
    warning: {
      backgroundColor: 'var(--Feedback-warning)',
      color: 'var(--Text-primary)',
      borderColor: 'transparent',
    },
  };

  return {
    ...baseStyles,
    ...variantStyles[variant],
  };
};

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      style={getBadgeStyles(variant || "default")}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
