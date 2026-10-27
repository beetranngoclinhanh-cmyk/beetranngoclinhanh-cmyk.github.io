import EvidenceGallery from "./components/linh-anh/EvidenceGallery";
import { getEvidence } from "./data/evidence";
import "./App.css";
import SiteHeader from "./components/linh-anh/SiteHeader";
import BeeMark from "./components/linh-anh/BeeMark";
import SectionHeading from "./components/linh-anh/SectionHeading";
import EvidenceLink from "./components/linh-anh/EvidenceLink";
import {
  profile,
  interests,
  projects,
  research,
  experience,
  awards,
  skills,
  community,
  volunteering,
} from "./data/linhAnh";

function FieldNotes() {
  return (
    <div
      className="field-notes"
      aria-label="Personal illustration connecting curiosity, data and human impact"
    >
      <div className="notes-heading">
        <span>A LITTLE CURIOUS. ALWAYS BUSY.</span>
        <span aria-hidden="true">✳</span>
      </div>
      <div className="bee-world">
        <svg className="flight-path" viewBox="0 0 500 400" aria-hidden="true">
          <path d="M30 320C240 370 50 120 220 90S440 110 410 230 215 290 260 190" />
        </svg>
        <span className="orbit-tag orbit-one">a question</span>
        <span className="orbit-tag orbit-two">a little data</span>
        <span className="orbit-tag orbit-three">a better decision</span>
        <div className="hero-bee">
          <BeeMark />
        </div>
        <span className="bee-spark spark-one" aria-hidden="true">
          ✧
        </span>
        <span className="bee-spark spark-two" aria-hidden="true">
          +
        </span>
        <div className="mini-note">
          <span className="mini-label">MY WORKING THEORY</span>
          <p>
            Small observations.
            <br />
            Meaningful connections.
          </p>
          <span className="note-stroke" aria-hidden="true" />
        </div>
      </div>
      <div className="notes-footer">
        <span>CURIOUS MIND, WORKER-BEE SPIRIT</span>
        <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main" data-testid="site-skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section
          id="about"
          className="hero section-wrap"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> STUDENT. ANALYST IN THE MAKING.
              HUMAN FIRST.
            </p>
            <h1 id="hero-title">
              Hi, I’m
              <br />
              <span className="name-line">
                Linh Anh<span className="name-period">.</span>
              </span>
            </h1>
            <p className="hero-statement">
              Finding the <em>human story</em>
              <br className="desktop-break" /> in the numbers.
            </p>
            <p className="hero-description">
              I’m Trần Ngọc Linh Anh, a high school student in Hanoi exploring
              how data, economics and finance can help us understand people —
              and make better decisions.
            </p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href="#work"
                data-testid="hero-work-link"
              >
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a
                className="resume-link"
                href={profile.resume}
                download="Tran-Ngoc-Linh-Anh-Resume.docx"
                data-testid="hero-resume-link"
              >
                My resume <span className="file-format">DOCX</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-location">
              <span aria-hidden="true">↳</span> Hanoi, Vietnam{" "}
              <span className="separator">/</span> FLSS · Class of 2027
            </p>
          </div>
          <FieldNotes />
        </section>
        <div className="interest-strip" aria-label="Areas of interest">
          {interests.map((interest, i) => (
            <span key={interest}>
              {interest}
              <span aria-hidden="true">{i % 2 ? "✳" : "✧"}</span>
            </span>
          ))}
        </div>
        <section
          className="intro-section section-wrap"
          aria-labelledby="intro-heading"
        >
          <p className="eyebrow">A SMALL INTRODUCTION</p>
          <div>
            <h2 id="intro-heading">
              A curious mind.
              <br />A purpose beyond the spreadsheet.
            </h2>
            <p>
              I like asking why: why people buy, why markets move, why a small
              change can make a big difference. My interests sit where
              statistics meets economics, and where business decisions meet
              everyday lives.
            </p>
            <p>
              Like a hardworking bee, I’m learning one observation at a time —
              collecting ideas, connecting disciplines, and bringing a little
              care to everything I build.
            </p>
          </div>
          <div className="intro-note">
            <span aria-hidden="true">✳</span>
            <p>
              Driven by curiosity.
              <br />
              Grounded in effort.
              <br />
              <em>Growing with purpose.</em>
            </p>
          </div>
        </section>
        <section
          id="work"
          className="work-section section-wrap"
          aria-label="Selected work"
        >
          <div className="section-top">
            <SectionHeading
              eyebrow="01 / SELECTED WORK"
              title="Questions worth exploring."
            />
            <p>
              A few ways I’ve turned curiosity
              <br />
              into analysis, ideas and action.
            </p>
          </div>
          {projects.map((project, index) => (
            <article
              className={`project project-${project.id}`}
              key={project.id}
            >
              <div className="project-visual">
                <div className="visual-topline">
                  <span>
                    {index === 0
                      ? "LOOKING BEYOND THE TOP LINE"
                      : "ADAPTING TO UNCERTAINTY"}
                  </span>
                  <span aria-hidden="true">↗</span>
                </div>
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width={index === 0 ? 1400 : 1200}
                  height={index === 0 ? 893 : 1697}
                />
                <div className="visual-caption">
                  {index === 0
                    ? "From our Tableau analysis · SIM-LSE 2026"
                    : "Our team’s research poster · WICO 2026"}
                </div>
              </div>
              <div className="project-copy">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-context">{project.context}</p>
                <p className="project-question">{project.question}</p>
                <p>{project.contribution}</p>
                <p>{project.finding}</p>
                <div className="tags">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <EvidenceLink
                  href={project.href}
                  label={project.linkLabel}
                  format={project.format}
                  id={project.id}
                />
              </div>
            </article>
          ))}
        </section>
        <section id="research" className="research-section">
          <div className="section-wrap">
            <div className="section-top">
              <SectionHeading
                eyebrow="02 / RESEARCH & DISCOVERY"
                title="Follow the question further."
              />
              <span className="section-symbol" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="research-grid">
              {research.map((entry, i) => (
                <article key={entry.id} className="research-card">
                  <div className="research-number" aria-hidden="true">
                    0{i + 1}
                  </div>
                  <p className="eyebrow">{entry.date}</p>
                  <h3>{entry.title}</h3>
                  <p className="entry-role">{entry.role}</p>
                  <p>{entry.text}</p>
                  {entry.id === "hust" && (
                    <div
                      className="confirmation-letters"
                      aria-label="HUST confirmation letters"
                    >
                      {["evidence-19", "evidence-05"].map((id, index) => {
                        const letter = getEvidence(id);
                        return (
                          <a
                            key={id}
                            href={letter.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`hust-letter-${index + 1}`}
                          >
                            <img
                              src={letter.preview!}
                              alt={`HUST signed confirmation letter, Project ${index + 1}`}
                              width="777"
                              height="1100"
                              loading="lazy"
                            />
                            <span>
                              Confirmation letter · Project {index + 1}{" "}
                              <span aria-hidden="true">↗</span>
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                  {entry.href && (
                    <EvidenceLink
                      href={entry.href}
                      label={entry.label}
                      format="PDF"
                      id={entry.id}
                    />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="journey" className="journey-section section-wrap">
          <div className="section-top">
            <SectionHeading
              eyebrow="03 / LEARNING BY DOING"
              title="From the classroom to the real world."
            />
            <p>Still a student. Always a learner.</p>
          </div>
          <div className="journey-layout">
            <div className="experience-list">
              <h3 className="subheading">Practical experience</h3>
              <p className="small-copy">Half-day student placements · Hanoi</p>
              {experience.map((entry) => (
                <article key={entry.company} className="experience-entry">
                  <p className="eyebrow">{entry.date}</p>
                  <div className="experience-title">
                    <h4>{entry.company}</h4>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <p className="entry-role">{entry.role}</p>
                  <p>{entry.text}</p>
                </article>
              ))}
            </div>
            <aside className="education-card">
              <p className="eyebrow">MY ACADEMIC HOME</p>
              <h3>
                Foreign Language
                <br />
                Specialized School
              </h3>
              <p>
                Chinese–English · 2024–2027
                <br />
                Hanoi, Vietnam
              </p>
              <div className="academic-stats">
                <div>
                  <strong>1540</strong>
                  <span>SAT</span>
                </div>
                <div>
                  <strong>7.0</strong>
                  <span>IELTS</span>
                </div>
              </div>
              <p className="pending-note">
                <span>ON THE HORIZON</span>AP Calculus BC & Statistics
                <br />
                <strong>2027 · Pending / self-study</strong>
              </p>
              {skills.map((skill) => (
                <div className="skill-block" key={skill.title}>
                  <h4>{skill.title}</h4>
                  <p>{skill.text}</p>
                </div>
              ))}
            </aside>
          </div>
          <div className="awards-section">
            <div>
              <p className="eyebrow">MILESTONES ALONG THE WAY</p>
              <h3>
                A little encouragement
                <br />
                to keep going.
              </h3>
            </div>
            <div className="award-list" data-testid="award-list">
              {awards.map((award) => (
                <div className="award-row" key={award.title}>
                  <a
                    className="award-evidence"
                    href={award.evidence.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View evidence: ${award.title}`}
                    data-testid={`award-evidence-${award.evidence.id}`}
                  >
                    <img
                      src={award.evidence.preview!}
                      alt={`${award.title}: supporting photograph or certificate`}
                      width="800"
                      height="600"
                      loading="lazy"
                    />
                  </a>
                  <span className="award-year">{award.year}</span>
                  <div>
                    <h4>{award.title}</h4>
                    <p>{award.detail}</p>
                  </div>
                  <span aria-hidden="true">✧</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="community" className="community-section section-wrap">
          <div className="section-top">
            <SectionHeading
              eyebrow="04 / BEYOND THE NUMBERS"
              title="Good work is people work."
            />
            <p>
              The most meaningful outcomes
              <br />
              aren’t always on a chart.
            </p>
          </div>
          <div className="community-layout">
            <figure className="community-photo">
              <img
                src={volunteering.image}
                alt={volunteering.alt}
                loading="lazy"
                width="800"
                height="1067"
              />
              <figcaption>
                <span className="eyebrow">SMALL ACTIONS, SHARED PURPOSE</span>
                <p>{volunteering.text}</p>
              </figcaption>
            </figure>
            <div className="community-entries">
              {community.map((entry) => (
                <article key={entry.role}>
                  <p className="eyebrow">{entry.date}</p>
                  <h3>{entry.title}</h3>
                  <p className="entry-role">{entry.role}</p>
                  <p>{entry.text}</p>
                </article>
              ))}
              <p className="beyond-note">
                Outside the spreadsheet: debate, school performances, and a love
                of challenging myself. Next up: a planned 2027 sprint triathlon
                in Da Nang.
              </p>
            </div>
          </div>
        </section>
        <EvidenceGallery />
        <section id="contact" className="contact-section">
          <div className="section-wrap contact-inner">
            <div className="contact-top">
              <p className="eyebrow">
                THERE’S ALWAYS ANOTHER QUESTION TO EXPLORE.
              </p>
              <BeeMark />
            </div>
            <h2>
              Let’s make
              <br />
              <em>meaningful connections.</em>
            </h2>
            <p>
              I’d love to connect with people thinking about data, economics,
              finance, and a better future.
            </p>
            <a
              className="contact-email"
              href={`mailto:${profile.email}`}
              data-testid="contact-email-link"
            >
              {profile.email}
              <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-bottom">
              <span>Hanoi, Vietnam · Open to learning & collaboration</span>
              <a
                href={profile.resume}
                download="Tran-Ngoc-Linh-Anh-Resume.docx"
                data-testid="contact-resume-link"
              >
                Download resume (DOCX) <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <span>© {new Date().getFullYear()} Trần Ngọc Linh Anh</span>
        <span>Made of curiosity, care & a little bee energy.</span>
        <a href="#about" data-testid="footer-top-link">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
