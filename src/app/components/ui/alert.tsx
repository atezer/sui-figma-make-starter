/**
 * @component Alert (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const alertVariants = cva("", {
  variants: {
    variant: {
      default: "",
      destructive: "",
      success: "",
      warning: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const getAlertStyles = (variant: string = "default"): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    borderRadius: 'var(--Radius-radius-025)',
    border: `var(--Border-Stroke-border-01) solid`,
    padding: 'var(--Spacing-spacing-100)',
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--Component-inline-message-info-background)',
      borderColor: 'var(--Component-inline-message-info-border)',
      color: 'var(--Component-inline-message-info-on-contents)',
    },
    destructive: {
      backgroundColor: 'var(--Component-inline-message-error-background)',
      borderColor: 'var(--Component-inline-message-error-border)',
      color: 'var(--Component-inline-message-error-on-contents)',
    },
    success: {
      backgroundColor: 'var(--Component-inline-message-success-background)',
      borderColor: 'var(--Component-inline-message-success-border)',
      color: 'var(--Component-inline-message-success-on-contents)',
    },
    warning: {
      backgroundColor: 'var(--Component-inline-message-warning-background)',
      borderColor: 'var(--Component-inline-message-warning-border)',
      color: 'var(--Component-inline-message-warning-on-contents)',
    },
  };

  return {
    ...baseStyles,
    ...variantStyles[variant],
  };
};

function Alert({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      role="alert"
      data-slot="alert"
      className={cn(alertVariants({ variant }), className)}
      style={getAlertStyles(variant || "default")}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"h5">) {
  const titleStyles: React.CSSProperties = {
    marginBottom: 'var(--Spacing-spacing-025)',
    fontWeight: 600,
    lineHeight: 1.2,
  };

  return (
    <h5
      data-slot="alert-title"
      className={className}
      style={titleStyles}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const descriptionStyles: React.CSSProperties = {
    lineHeight: 1.5,
    opacity: 0.9,
  };

  return (
    <div
      data-slot="alert-description"
      className={cn("text-sm", className)}
      style={descriptionStyles}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };