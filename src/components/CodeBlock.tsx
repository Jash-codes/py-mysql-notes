import { useState, useCallback } from 'react';
import { Check, Copy } from 'lucide-react';

type Props = {
  code: string;
  language?: 'python' | 'sql' | 'bash' | 'text';
  title?: string;
};

function highlightPython(code: string): string {
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const pattern = /("""[\s\S]*?""")|(#.*$)|("[^"]*")|('[^']*')|\b(import|from|as|def|class|return|if|else|elif|for|while|in|not|and|or|is|None|True|False|try|except|finally|with|lambda|pass|break|continue|print|global|nonlocal|yield|raise|assert|del)\b|\b(conn|cursor|fetchone|fetchall|execute|executemany|commit|close|connect)\b/gm;

  return escaped.replace(pattern, (match, triple, comment, dquote, squote, kw, bi) => {
    if (triple || dquote || squote) return `<span class="tok-str">${match}</span>`;
    if (comment) return `<span class="tok-com">${match}</span>`;
    if (kw) return `<span class="tok-kw">${match}</span>`;
    if (bi) return `<span class="tok-bi">${match}</span>`;
    return match;
  });
}

function highlightSql(code: string): string {
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const pattern = /(--.*$)|\b(CREATE|DATABASE|TABLE|INSERT|INTO|VALUES|SELECT|FROM|WHERE|UPDATE|SET|DELETE|ORDER|BY|DESC|ASC|LIMIT|PRIMARY|KEY|INT|VARCHAR|AND|OR|NOT|NULL)\b|('[^']*')/gim;

  return escaped.replace(pattern, (match, comment, kw, squote) => {
    if (comment) return `<span class="tok-com">${match}</span>`;
    if (kw) return `<span class="tok-kw">${match}</span>`;
    if (squote) return `<span class="tok-str">${match}</span>`;
    return match;
  });
}

function highlightBash(code: string): string {
  const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const pattern = /(#.*$)|\b(python|pip|install|mysql|pip3)\b/gm;

  return escaped.replace(pattern, (match, comment, bi) => {
    if (comment) return `<span class="tok-com">${match}</span>`;
    if (bi) return `<span class="tok-bi">${match}</span>`;
    return match;
  });
}

function highlightText(code: string): string {
  return code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlight(code: string, language: Props['language']): string {
  switch (language) {
    case 'python': return highlightPython(code);
    case 'sql': return highlightSql(code);
    case 'bash': return highlightBash(code);
    default: return highlightText(code);
  }
}

const langLabel: Record<string, string> = {
  python: 'Python',
  sql: 'SQL',
  bash: 'Bash',
  text: 'Text',
};

export default function CodeBlock({ code, language = 'text', title }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  const html = highlight(code, language);

  return (
    <div className="code-block group">
      <div className="code-block__header">
        <span className="code-block__lang">{title || langLabel[language]}</span>
        <button onClick={handleCopy} className="code-block__copy" aria-label="Copy code">
          {copied ? <Check size={15} /> : <Copy size={15} />}
          <span>{copied ? 'Copied!' : 'Copy Code'}</span>
        </button>
      </div>
      <div className="code-block__body">
        <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
      </div>
    </div>
  );
}
