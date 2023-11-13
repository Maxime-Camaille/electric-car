import "./styles.css";
import ArticleImage1 from "../../assets/images/ArticleImage1.jpg";
import ArticleImage2 from "../../assets/images/ArticleImage2.jpg";
import ArticleImage3 from "../../assets/images/ArticleImage3.jpg";
import ClockIcon from "../../assets/images/horloge.svg";

const BlogSection = () => {
  return (
    <section className='blog-section' id='blog'>
      <div className='blog-container'>
        <h2 className='blog-title'>
          Profitez de nos{" "}
          <span className='highlight-text'>dernières actualités</span>
        </h2>
        <div className='articles-container'>
          {/* Article 1 */}
          <div className='article'>
            <img
              src={ArticleImage1}
              alt='Article 1'
              className='article-image'
            />
            <p className='date'>Publié le 12 Novembre 2023</p>
            <h3 className='article-title'>
              Lorem ipsum dolor sit amet, consectetur.
            </h3>
            <p className='article-summary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              elit nec est bibendum mollis.
            </p>
            <div className='article-footer'>
              <img
                className='clock-icon'
                src={ClockIcon}
                alt='clock-icon'
              ></img>
              <p className='read-time'>3min à lire</p>
            </div>
          </div>

          {/* Article 2 */}
          <div className='article'>
            <img
              src={ArticleImage2}
              alt='Article 2'
              className='article-image'
            />
            <p className='date'>Publié le 12 Novembre 2023</p>
            <h3 className='article-title'>
              Lorem ipsum dolor sit amet, consectetur.
            </h3>
            <p className='article-summary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              elit nec est bibendum mollis.
            </p>
            <div className='article-footer'>
              <img
                className='clock-icon'
                src={ClockIcon}
                alt='clock-icon'
              ></img>
              <p className='read-time'>3min à lire</p>
            </div>
          </div>

          {/* Article 3 */}
          <div className='article'>
            <img
              src={ArticleImage3}
              alt='Article 3'
              className='article-image'
            />
            <p className='date'>Publié le 12 Novembre 2023</p>
            <h3 className='article-title'>
              Lorem ipsum dolor sit amet, consectetur.
            </h3>
            <p className='article-summary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              elit nec est bibendum mollis.
            </p>
            <div className='article-footer'>
              <img
                className='clock-icon'
                src={ClockIcon}
                alt='clock-icon'
              ></img>
              <p className='read-time'>3min à lire</p>
            </div>
          </div>
        </div>

        {/* Bouton "Voir plus d'articles" */}
        <button className='view-more-button'>Voir plus d'articles</button>
      </div>
    </section>
  );
};

export default BlogSection;
