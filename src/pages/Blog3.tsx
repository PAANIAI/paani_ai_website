import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.css';

function Blog3() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/blog3.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="page-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Blog3;
