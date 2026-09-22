import { AlertTriangle, HelpCircle, Lightbulb } from 'lucide-react';
import type { ReactNode } from 'react';

type CalloutType = 'important' | 'why' | 'remember';

type Props = {
  type: CalloutType;
  title?: string;
  children: ReactNode;
};

const config: Record<CalloutType, { icon: typeof AlertTriangle; label: string; cls: string }> = {
  important: { icon: AlertTriangle, label: 'Important', cls: 'callout--important' },
  why: { icon: HelpCircle, label: 'Why?', cls: 'callout--why' },
  remember: { icon: Lightbulb, label: 'Remember', cls: 'callout--remember' },
};

export default function Callout({ type, title, children }: Props) {
  const { icon: Icon, label, cls } = config[type];
  return (
    <div className={`callout ${cls}`}>
      <div className="callout__header">
        <Icon size={18} className="callout__icon" />
        <span className="callout__label">{title || label}</span>
      </div>
      <div className="callout__body">{children}</div>
    </div>
  );
}
