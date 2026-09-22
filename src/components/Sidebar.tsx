import { X } from 'lucide-react';

export type NavItem = {
  id: string;
  label: string;
  group: string;
};

type Props = {
  items: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ items, activeId, onNavigate, open, onClose }: Props) {
  const groups: Record<string, NavItem[]> = {};
  for (const item of items) {
    if (!groups[item.group]) groups[item.group] = [];
    groups[item.group].push(item);
  }

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <span className="sidebar__title">Lesson Contents</span>
          <button className="sidebar__close" onClick={onClose} aria-label="Close navigation">
            <X size={20} />
          </button>
        </div>
        <nav className="sidebar__nav">
          {Object.entries(groups).map(([group, groupItems]) => (
            <div key={group} className="sidebar__group">
              <p className="sidebar__group-label">{group}</p>
              <ul>
                {groupItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`sidebar__link ${activeId === item.id ? 'sidebar__link--active' : ''}`}
                      onClick={() => onNavigate(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
