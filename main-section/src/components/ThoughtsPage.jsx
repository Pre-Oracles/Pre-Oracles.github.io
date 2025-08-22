import React, { useState } from 'react';
import BackButton from './BackButton';
import { X, Clock, Tag } from 'lucide-react';

const ThoughtsPage = ({ data, setCurrentPage }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articleContent, setArticleContent] = useState('');
  const [loading, setLoading] = useState(false);

  const openArticle = async (thoughtItem) => {
    setLoading(true);
    setSelectedArticle(thoughtItem);
    
    try {
      // Dynamically import the article content
      setArticleContent(thoughtItem.articleFile.content);
    } catch (error) {
      console.error('Error loading article:', error);
      setArticleContent('Error loading article content.');
    }
    
    setLoading(false);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    setArticleContent('');
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


  const parseInlineFormatting = (text) => {
      const parts = [];
      let currentIndex = 0;
      let key = 0;
      
      // Regular expression to find bold (*text*) and italic (^text^) patterns
      const formatRegex = /(\*[^*]+\*|\^[^^]+\^)/g;
      let match;
      
      while ((match = formatRegex.exec(text)) !== null) {
        // Add text before the match
        if (match.index > currentIndex) {
          parts.push(text.slice(currentIndex, match.index));
        }
        
        const matchedText = match[0];
        const innerText = matchedText.slice(1, -1); // Remove surrounding markers
        
        if (matchedText.startsWith('*')) {
          // Bold text
          parts.push(<strong key={key++}>{innerText}</strong>);
        } else if (matchedText.startsWith('^')) {
          // Italic text
          parts.push(<em key={key++}>{innerText}</em>);
        }
        
        currentIndex = formatRegex.lastIndex;
      }
      
      // Add remaining text
      if (currentIndex < text.length) {
        parts.push(text.slice(currentIndex));
      }
      
      return parts.length > 1 ? parts : text;
    };

  const formatContent = (content) => {
    if (!content) return null;
    
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
        
        // Bold text in lists
        if (line.startsWith('- **') && line.includes('**:')) {
          const parts = line.slice(4).split('**:');
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
        return <p key={index} className="article-paragraph">{parseInlineFormatting(line)}</p>;
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
              key={thought.id}
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
                {loading ? (
                  <div className="loading-spinner">Loading article...</div>
                ) : (
                  formatContent(articleContent)
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThoughtsPage;