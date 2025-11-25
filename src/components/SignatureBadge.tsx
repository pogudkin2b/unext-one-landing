import Link from 'next/link';

export function SignatureBadge() {
  return (
    <div className="flex justify-center px-4 pb-6 pt-8">
      <Link
        href="https://pogudkin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-sm text-[rgb(var(--color-silver))]/60
          transition-colors duration-300
          hover:text-[rgb(var(--color-silver))]
        "
      >
        by Pogudkin
      </Link>
    </div>
  );
}
