"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Glow } from "@/components/ui/glow";
import { cn } from "@/lib/utils";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "glow";
}

interface HeroSectionProps {
  badge?: {
    text: string;
    action?: {
      text: string;
      href: string;
    };
  };
  title: string;
  subtitle?: string;
  description?: string;
  actions?: HeroAction[];
  ctaText?: string;
  ctaHref?: string;
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  description,
  actions,
  ctaText,
  ctaHref = "#products",
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "bg-neutral-50 text-neutral-900",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0 pt-24"
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2 bg-white border-emerald-200">
              <span className="text-neutral-600">{badge.text}</span>
              {badge.action && (
                <a href={badge.action.href} className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700">
                  {badge.action.text}
                  <ArrowRightIcon className="h-3 w-3" />
                </a>
              )}
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-neutral-900 via-emerald-800 to-neutral-700 bg-clip-text text-4xl font-bold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg relative z-10 max-w-[550px] animate-appear font-semibold text-emerald-600 opacity-0 delay-75 sm:text-xl [animation-fill-mode:forwards]">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-neutral-600 opacity-0 delay-100 sm:text-lg [animation-fill-mode:forwards]">
              {description}
            </p>
          )}

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300 [animation-fill-mode:forwards]">
            {actions && actions.length > 0 ? (
              actions.map((action, index) => {
                const isGlow = action.variant === "glow";
                return (
                  <Button
                    key={index}
                    variant={isGlow ? "default" : action.variant}
                    size="lg"
                    className={cn(
                      isGlow &&
                        "relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 shadow-[0_0_30px_rgba(16,185,129,0.4)] text-white"
                    )}
                    asChild
                  >
                    <a href={action.href} className="flex items-center gap-2">
                      {action.icon}
                      {action.text}
                    </a>
                  </Button>
                );
              })
            ) : ctaText ? (
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 text-white rounded-full px-8"
                asChild
              >
                <a href={ctaHref} className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </Button>
            ) : null}
          </div>

          {/* Glow Effect */}
          <div className="relative w-full h-32 mt-8">
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-500 [animation-fill-mode:forwards] [--brand:160_84%_39%] [--brand-foreground:160_84%_39%]"
            />
          </div>
        </div>
      </div>

      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
