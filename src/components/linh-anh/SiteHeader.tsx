import { useRef, useState } from "react";
import { navigation } from "../../data/linhAnh";
import BeeMark from "./BeeMark";
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <a href="#about" className="brand" data-testid="header-brand">
        <BeeMark />
        <span>
          linh anh<span className="brand-dot">.</span>
        </span>
      </a>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen(!open)}
        data-testid="header-menu-toggle"
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="site-navigation"
        className={open ? "site-nav is-open" : "site-nav"}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
            data-testid={`header-link-${item.id}`}
          >
            {item.label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
          data-testid="header-link-contact"
        >
          Let’s connect <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
