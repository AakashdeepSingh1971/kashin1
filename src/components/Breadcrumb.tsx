'use client'
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="pt-24 pb-4 md:pt-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li className="flex items-center">
            <Link
              href="/"
              className="text-kashin-brown/50 hover:text-kashin-brown transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-kashin-brown/30" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-kashin-brown/50 hover:text-kashin-brown transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-kashin-brown font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
