import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export function Breadcrumbs({ current, href }: { current: string; href: string }) {
  const items = [
    { name: "Home", href: "/" },
    { name: current, href },
  ];
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 text-sm text-muted sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex gap-2">
        <li>
          <Link href="/" className="hover:text-foreground">Home</Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-foreground">{current}</li>
      </ol>
    </nav>
  );
}
