'use client';

import { useState } from 'react';
import Link from 'next/link';

export function SignatureBadge() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-50 flex justify-center px-4">
      <button
        className="pointer-events-auto group relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Designer signature"
      >
        {/* Main badge container */}
        <div
          className={`
            relative overflow-hidden rounded-full
            bg-neutral-900/80 backdrop-blur-md
            shadow-lg shadow-black/20
            transition-all duration-300 ease-out
            ${
              isExpanded
                ? 'translate-y-[-8px] px-6 py-4'
                : 'translate-y-0 px-4 py-2'
            }
          `}
        >
          {/* Collapsed state content */}
          <div
            className={`
              flex items-center gap-2
              transition-opacity duration-200
              ${isExpanded ? 'opacity-0' : 'opacity-100'}
            `}
          >
            <span className="text-sm font-medium text-neutral-100">
              by Pogudkin
            </span>
            <svg
              className="h-3 w-3 text-neutral-400"
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
              absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 py-4
              transition-opacity duration-200
              ${isExpanded ? 'opacity-100' : 'pointer-events-none opacity-0'}
            `}
          >
            <div className="space-y-1 text-center">
              <p className="text-sm font-medium text-neutral-100">
                Alex Pogudkin — web & product design for founders.
              </p>
              <p className="text-xs text-neutral-400">
                Helping startups and small teams look legit online.
              </p>
            </div>

            <Link
              href="https://pogudkin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full bg-neutral-100 px-4 py-1.5
                text-xs font-medium text-neutral-900
                transition-colors hover:bg-white
              "
              onClick={(e) => e.stopPropagation()}
            >
              Portfolio
            </Link>
          </div>
        </div>
      </button>
    </div>
  );
}
