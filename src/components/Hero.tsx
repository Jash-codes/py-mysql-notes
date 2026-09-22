import { Database, ChevronDown } from 'lucide-react';

type Props = {
  onStart: () => void;
};

export default function Hero({ onStart }: Props) {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__badge">
          <Database size={16} />
          <span>Beginner Lesson</span>
        </div>
        <h1 className="hero__title">Python + MySQL Database Connectivity</h1>
        <p className="hero__subtitle">
          Learn how to connect a Python program with a MySQL database and perform
          database operations — from creating tables to retrieving data with the Sakila sample database.
        </p>
        <button className="hero__cta" onClick={onStart}>
          Start Learning
          <ChevronDown size={18} />
        </button>
      </div>
    </section>
  );
}
