import React, { useState } from 'react';
import BackButton from './BackButton';
import { X, Clock, Tag } from 'lucide-react';

const ThoughtsPage = ({ data, setCurrentPage }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openArticle = (article) => {
    setSelectedArticle(article);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Handle escape key to close modal
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeArticle();
      }
    };

    if (selectedArticle) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedArticle]);

  // Parse markdown-like content for basic formatting
  const formatContent = (content) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="article-h1">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="article-h2">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="article-h3">{line.slice(4)}</h3>;
        }
        
        // Bold text
        if (line.startsWith('- **') && line.includes('**:')) {
          const parts = line.slice(2).split('**:');
          return (
            <div key={index} className="article-list-item">
              <strong>{parts[0]}</strong>: {parts[1]}
            </div>
          );
        }
        
        // Regular list items
        if (line.startsWith('- ')) {
          return <div key={index} className="article-list-item">{line.slice(2)}</div>;
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // Regular paragraphs
        return <p key={index} className="article-paragraph">{line}</p>;
      });
  };

  return (
    <div className="page-container">
      <div className="content-wrapper-narrow">
        <BackButton setCurrentPage={setCurrentPage} />

        <h1 className="title-page">Thoughts</h1>

        <div className="space-y-medium">
          {data.content.map((thought, index) => (
            <article 
              key={index} 
              className="thought-card"
              onClick={() => openArticle(thought)}
            >
              {/* Article Image */}
              {thought.image && (
                <div className="thought-image-container">
                  <img 
                    src={process.env.PUBLIC_URL + thought.image} 
                    alt={thought.title}
                    className="thought-image"
                  />
                </div>
              )}
              
              <div className="thought-content">
                <div className="article-header">
                  <h2 className="title-article">{thought.title}</h2>
                  <div className="article-meta">
                    <time className="date-badge">
                      {thought.date}
                    </time>
                    {thought.readTime && (
                      <span className="read-time">
                        <Clock size={14} />
                        {thought.readTime}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Tags */}
                {thought.tags && (
                  <div className="article-tags">
                    {thought.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="article-tag">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <p className="text-gray leading-relaxed">{thought.excerpt}</p>
                <button className="read-more-btn">Read Full Article →</button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="article-modal-overlay" onClick={closeArticle}>
          <div className="article-modal" onClick={(e) => e.stopPropagation()}>
            <div className="article-modal-header">
              <button 
                className="close-button"
                onClick={closeArticle}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="article-modal-content">
              {/* Featured Image */}
              {selectedArticle.image && (
                <div className="article-featured-image">
                  <img 
                    src={process.env.PUBLIC_URL + selectedArticle.image} 
                    alt={selectedArticle.title}
                  />
                </div>
              )}
              
              {/* Article Meta */}
              <div className="article-modal-meta">
                <time className="article-date">{selectedArticle.date}</time>
                {selectedArticle.readTime && (
                  <span className="article-read-time">
                    <Clock size={16} />
                    {selectedArticle.readTime}
                  </span>
                )}
              </div>
              
              {/* Tags */}
              {selectedArticle.tags && (
                <div className="article-modal-tags">
                  {selectedArticle.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="article-modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Article Content */}
              <div className="article-body">
                {formatContent(selectedArticle.content)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThoughtsPage;