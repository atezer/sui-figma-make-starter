/**
 * @component Avatar (Shadcn UI with SUI tokens)
 * @design-system Shadcn UI structure + SUI styling ✅
 */

"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "./utils";

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  const avatarStyles: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    height: 'var(--Avatar-Size-avatar-md)',
    width: 'var(--Avatar-Size-avatar-md)',
    flexShrink: 0,
    overflow: 'hidden',
    borderRadius: 'var(--Radius-radius-full)',
  };

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={className}
      style={avatarStyles}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  const imageStyles: React.CSSProperties = {
    aspectRatio: '1 / 1',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  };

  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={className}
      style={imageStyles}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  const fallbackStyles: React.CSSProperties = {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--Radius-radius-full)',
    backgroundColor: 'var(--Surface-background-level-0)',
    color: 'var(--Text-primary)',
    fontFamily: 'var(--Type-Body-Regular-Typeface)',
    fontSize: 'var(--Type-Body-Regular-Font-size)',
    fontWeight: 600,
  };

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={className}
      style={fallbackStyles}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
