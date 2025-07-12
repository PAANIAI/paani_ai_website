import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.css';

function Blog4() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/blog4.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="page-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Blog4;
