/**
 * @component Table (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

import * as React from "react";

import { cn } from "./utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  const tableStyles: React.CSSProperties = {
    width: '100%',
    captionSide: 'bottom',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    color: 'var(--Text-primary)',
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'auto' }}>
      <table
        data-slot="table"
        className={className}
        style={tableStyles}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={className}
      style={{
        borderBottom: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
      }}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={className} {...props} />;
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={className}
      style={{
        borderTop: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
        backgroundColor: 'var(--Surface-background-level-0)',
        fontWeight: 600,
      }}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "transition-colors hover:bg-[var(--State-hover)]",
        "data-[state=selected]:bg-[var(--State-hover)]",
        className
      )}
      style={{
        borderBottom: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
      }}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={className}
      style={{
        height: '48px',
        padding: '0 var(--Spacing-spacing-100)',
        textAlign: 'left',
        verticalAlign: 'middle',
        fontWeight: 600,
        color: 'var(--Text-secondary)',
        fontSize: 'var(--Type-Body-small-Regular-Font-size)',
      }}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={className}
      style={{
        padding: 'var(--Spacing-spacing-100)',
        verticalAlign: 'middle',
      }}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={className}
      style={{
        marginTop: 'var(--Spacing-spacing-100)',
        fontSize: 'var(--Type-Body-small-Regular-Font-size)',
        color: 'var(--Text-tertiary)',
      }}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
