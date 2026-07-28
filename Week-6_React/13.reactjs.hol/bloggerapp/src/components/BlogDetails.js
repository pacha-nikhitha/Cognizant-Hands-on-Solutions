import React from 'react';

function BlogDetails(props) {

  const headerMessage = props.blogs && props.blogs.length > 0
    ? `✅ ${props.blogs.length} Blog posts found`
    : '❌ No blog posts available';

  const content = (
    <ul className="item-list">
      {props.blogs && props.blogs.map((blog) => (
        <div key={blog.id} className="card blog-card">

          <span className={blog.published ? 'status-active' : 'status-inactive'}>
            {blog.published ? '🟢 Published' : '🔴 Draft'}
          </span>

          <div className="card-icon">📝</div>
          <h3>{blog.title}</h3>
          <p className="author">✍️ {blog.author}</p>

          {blog.published && (
            <span className="badge published-badge">🌐 Live on Web</span>
          )}

          {!blog.published && (
            <span className="badge draft-badge">⏳ Pending Review</span>
          )}

          <span className="category-tag"># {blog.category}</span>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="component-wrapper">
      <p className={props.blogs && props.blogs.length > 0 ? 'data-count' : 'no-data'}>
        {headerMessage}
      </p>

      {props.blogs && props.blogs.length > 0 && content}

      {(!props.blogs || props.blogs.length === 0) && (
        <p className="no-data">📭 No blogs to display.</p>
      )}
    </div>
  );
}

export default BlogDetails;
