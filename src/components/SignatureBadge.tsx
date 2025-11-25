'use client';

import { useState } from 'react';
import Link from 'next/link';

export function SignatureBadge() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
      <div
        className="pointer-events-auto group relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Main badge container */}
        <div
          className={`
            relative overflow-hidden rounded-full
            border border-[rgba(var(--color-electric-cyan),0.15)]
            bg-[rgba(var(--color-deep-navy),0.6)] backdrop-blur-xl
            shadow-lg shadow-[rgba(var(--color-electric-cyan),0.1)]
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isExpanded
                ? 'h-auto min-h-[120px] w-[360px] translate-y-[-12px] rounded-2xl px-6 py-4'
                : 'h-[36px] w-auto translate-y-0 px-4 py-2'
            }
          `}
        >
          {/* Collapsed state content */}
          <div
            className={`
              flex items-center gap-2 whitespace-nowrap
              transition-all duration-300
              ${isExpanded ? 'pointer-events-none opacity-0' : 'opacity-100'}
            `}
          >
            <span className="text-sm font-medium text-[rgb(var(--color-silver))]">
              by Pogudkin
            </span>
            <svg
              className="h-3 w-3 text-[rgb(var(--color-electric-cyan))]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>

          {/* Expanded state content */}
          <div
            className={`
              flex flex-col items-center justify-center gap-4
              transition-all duration-300 delay-100
              ${isExpanded ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'}
            `}
          >
            <div className="space-y-2 text-center">
              <p className="text-sm font-medium leading-snug text-[rgb(var(--color-silver))]">
                Alex Pogudkin — web & product design for founders.
              </p>
              <p className="text-xs leading-relaxed text-[rgb(var(--color-silver))]/70">
                Helping startups and small teams look legit online.
              </p>
            </div>

            <Link
              href="https://pogudkin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full border border-[rgba(var(--color-electric-cyan),0.3)]
                bg-[rgba(var(--color-electric-cyan),0.1)] px-5 py-2
                text-xs font-semibold tracking-wide text-[rgb(var(--color-electric-cyan))]
                backdrop-blur-sm transition-all duration-300
                hover:border-[rgba(var(--color-electric-cyan),0.5)]
                hover:bg-[rgba(var(--color-electric-cyan),0.2)]
                hover:shadow-lg hover:shadow-[rgba(var(--color-electric-cyan),0.2)]
              "
              onClick={(e) => e.stopPropagation()}
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
