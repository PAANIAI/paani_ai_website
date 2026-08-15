import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/site';

const Blog: React.FC = () => {
  return (
    <div className="page">
      <span className="eyebrow">Blog</span>
      <h1 className="page-h1">Field notes & analysis</h1>
      <p className="lead">
        Perspectives on digitalizing Nepal’s water sector — from infrastructure
        and data systems to policy and practice.
      </p>

      <section className="section">
        <div className="card-grid grid-2">
          {blogs.map((post) => (
            <Link to={post.link} className="media-card" key={post.link}>
              <img src={post.image} alt={post.title} className="thumb" />
              <div className="body">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="card-link arrow-link">Read article</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
