import { Database, Menu, X } from 'lucide-react';

type Props = {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
};

export default function Header({ onToggleSidebar, sidebarOpen }: Props) {
  return (
    <header className="header">
      <div className="header__inner">
        <button
          className="header__menu-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle navigation"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className="header__brand">
          <Database size={22} className="header__logo" />
          <span className="header__title">Python + MySQL</span>
        </div>
        <span className="header__subtitle hidden md:inline">Database Connectivity</span>
      </div>
    </header>
  );
}
