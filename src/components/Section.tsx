import type { ReactNode } from 'react';

type Props = {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
};

export default function Section({ id, number, title, children }: Props) {
  return (
    <section id={id} className="lesson-section">
      <div className="lesson-section__header">
        <span className="lesson-section__number">{String(number).padStart(2, '0')}</span>
        <h2 className="lesson-section__title">{title}</h2>
      </div>
      <div className="lesson-section__body">{children}</div>
    </section>
  );
}
