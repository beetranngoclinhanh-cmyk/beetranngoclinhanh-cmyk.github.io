export default function EvidenceLink({
  href,
  label,
  format,
  id,
}: {
  href: string;
  label: string;
  format: string;
  id: string;
}) {
  return (
    <a
      className="text-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`${id}-evidence-link`}
    >
      {label} <span className="file-format">{format} · new tab</span>{" "}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
