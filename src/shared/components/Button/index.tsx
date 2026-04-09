"use client";

import React, { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/shared/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const bgRef = useRef<HTMLSpanElement | null>(null);

    // Ensure we can use both the forwarded ref and our internal ref
    const setRefs = React.useCallback(
      (node: HTMLButtonElement) => {
        buttonRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLButtonElement>).current = node;
        }
      },
      [ref]
    );

    useGSAP(
      () => {
        const btn = buttonRef.current;
        const bg = bgRef.current;
        if (!btn || !bg) return;

        const tl = gsap.timeline({ paused: true });

        tl.to(bg, {
          yPercent: -100,
          duration: 0.4,
          ease: "power2.inOut",
        });

        const handleMouseEnter = () => {
          gsap.to(btn, {
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out",
          });
          tl.play();
        };

        const handleMouseLeave = () => {
          gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
          tl.reverse();
        };

        btn.addEventListener("mouseenter", handleMouseEnter);
        btn.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          btn.removeEventListener("mouseenter", handleMouseEnter);
          btn.removeEventListener("mouseleave", handleMouseLeave);
        };
      },
      { scope: buttonRef }
    );

    const baseStyles =
      "group relative overflow-hidden inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-brand-red text-white hover:shadow-magnetic",
      secondary: "bg-brand-dark text-white",
      outline: "border-2 border-brand-red text-brand-red bg-transparent hover:text-white",
      ghost: "bg-transparent text-foreground hover:bg-gray-100",
    };

    const bgColors = {
      primary: "bg-red-800",
      secondary: "bg-gray-900",
      outline: "bg-brand-red",
      ghost: "bg-gray-200",
    };

    return (
      <button
        ref={setRefs}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span
          ref={bgRef}
          className={cn(
            "absolute left-0 top-full w-full h-full -z-10",
            bgColors[variant]
          )}
        />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
