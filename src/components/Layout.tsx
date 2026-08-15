import React, { useEffect, useState } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { CONTACT_EMAIL } from '../config';

const LOGO = '/images/Logo/Paani%20AI.png';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/cohorts', label: 'Cohorts' },
  { to: '/people', label: 'People' },
  { to: '/events', label: 'Events' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const Layout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="layout">
      {/* Mobile top bar */}
      <header className="topbar">
        <Link to="/" className="topbar-brand">
          <img src={LOGO} alt="Paani AI" className="topbar-logo" />
        </Link>
        <button
          className="topbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`hamburger ${open ? 'is-open' : ''}`} />
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${open ? 'is-open' : ''}`}>
        <Link to="/" className="sidebar-brand">
          <img src={LOGO} alt="Paani AI" className="sidebar-logo" />
        </Link>

        <p className="sidebar-tagline">
          Empowering Nepal’s water sector with data-driven innovation.
        </p>

        <nav className="sidebar-nav" aria-label="Primary">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'is-active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/apply"
          className={({ isActive }) => `apply-cta ${isActive ? 'is-active' : ''}`}
        >
          Apply
        </NavLink>

        <div className="sidebar-footer">
          <a href={`mailto:${CONTACT_EMAIL}`} className="sidebar-email">
            {CONTACT_EMAIL}
          </a>
        </div>
      </aside>

      {/* Scrim for mobile drawer */}
      {open && <div className="scrim" onClick={() => setOpen(false)} />}

      {/* Page content */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
