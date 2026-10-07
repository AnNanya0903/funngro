interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  // Escape only characters that could break out of the <script> tag.
  // Do NOT escape double quotes: they are JSON structural delimiters and
  // escaping them (\u0022) makes the payload unparseable as JSON-LD.
  const safeJson = JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return (
    <script
      type="application/ld+json"
      // dangerouslySetInnerHTML is required by React for script body content.
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  );
}
