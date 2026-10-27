import { evidence, evidenceGroups } from "../../data/evidence";

export default function EvidenceGallery() {
  return (
    <section
      className="evidence-section section-wrap"
      id="evidence"
      aria-labelledby="evidence-title"
    >
      <p className="eyebrow">THE EVIDENCE NOTEBOOK</p>
      <h2 id="evidence-title">A closer look at the work.</h2>
      <p className="evidence-intro">
        Project presentations, research confirmations, awards and moments from
        the journey. All collections are shown below; select a preview to open
        the full file.
      </p>
      {evidenceGroups.map((group) => (
        <details className="evidence-collection" key={group.id} open>
          <summary data-testid={`evidence-group-${group.id}`}>
            {group.title}
            <span>
              {evidence.filter((item) => item.group === group.id).length} files{" "}
              <span aria-hidden="true">+</span>
            </span>
          </summary>
          <div className="evidence-grid">
            {evidence
              .filter((item) => item.group === group.id)
              .map((item) => (
                <article className="evidence-card" key={item.id}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`${item.id}-file-link`}
                    className="evidence-file-link"
                  >
                    {item.preview ? (
                      <img
                        src={item.preview}
                        alt={`Preview: ${item.title}`}
                        loading="lazy"
                        width="1000"
                        height="750"
                      />
                    ) : (
                      <span
                        className="evidence-format-placeholder"
                        aria-hidden="true"
                      >
                        {item.format}
                      </span>
                    )}
                    <h3>{item.title}</h3>
                    <span className="evidence-file-meta">
                      Open {item.format} · {item.size} · new tab ↗
                    </span>
                  </a>
                  <p>{item.description}</p>
                </article>
              ))}
          </div>
        </details>
      ))}
    </section>
  );
}
