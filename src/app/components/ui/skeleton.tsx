/**
 * @component Skeleton (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

import * as React from "react";

import { cn } from "./utils";

function Skeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const skeletonStyles: React.CSSProperties = {
    backgroundColor: 'var(--Surface-background-level-0)',
    borderRadius: 'var(--Radius-radius-025)',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse", className)}
      style={skeletonStyles}
      {...props}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            90deg,
            transparent,
            var(--Color-alpha-alpha-black-08) 50%,
            transparent
          )`,
          animation: 'shimmer 2s infinite',
        }}
      />
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

export { Skeleton };