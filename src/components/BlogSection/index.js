import "./styles.css";
import ArticleImage1 from "../../assets/images/ArticleImage1.jpg";
import ArticleImage2 from "../../assets/images/ArticleImage2.jpg";
import ArticleImage3 from "../../assets/images/ArticleImage3.jpg";


const BlogSection = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <h2 className="blog-title">
          Profitez de nos{" "}
          <span className="highlight-text">dernières actualités</span>
        </h2>
        <div className="articles-container">
          {/* Article 1 */}
          <div className="article">
            <img src={ArticleImage1} alt="Article 1" className="article-image" />
            <p className="date">Date de publication</p>
            <h3 className="article-title">Titre de l'article</h3>
            <p className="article-summary">Résumé de l'article.</p>
            <div className="article-footer">
              <span className="clock-icon">&#128336;</span>
              <p className="read-time">3min à lire</p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="article">
            <img src={ArticleImage2} alt="Article 2" className="article-image" />
            <p className="date">Date de publication</p>
            <h3 className="article-title">Titre de l'article</h3>
            <p className="article-summary">Résumé de l'article.</p>
            <div className="article-footer">
              <span className="clock-icon">&#128336;</span>
              <p className="read-time">3min à lire</p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="article">
            <img src={ArticleImage3} alt="Article 3" className="article-image" />
            <p className="date">Date de publication</p>
            <h3 className="article-title">Titre de l'article</h3>
            <p className="article-summary">Résumé de l'article.</p>
            <div className="article-footer">
              <span className="clock-icon">&#128336;</span>
              <p className="read-time">3min à lire</p>
            </div>
          </div>
        </div>

        {/* Bouton "Voir plus d'articles" */}
        <button className="view-more-button">
          Voir plus d'articles
        </button>
      </div>
    </section>
  );
};

export default BlogSection;