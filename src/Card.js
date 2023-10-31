import "./Card.css";

function Card() {
  return (
    <div className="container">
      <div className="card">
        <div className="image"></div>
        <div className="content">
          <div className="info">
            <h1>
              Get <spn className="insight">insights</spn> that help your
              business grow.
            </h1>
            <p>
              {" "}
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.{" "}
            </p>
          </div>
          <div className="features">
            <div className="feature">
              <span className="number">10k+</span>
              <span className="further">COMPANIES</span>
            </div>
            <div className="feature">
              <span className="number">314</span>
              <span className="further">TEMPLATES</span>
            </div>
            <div className="feature">
              <span className="number">12M+</span>
              <span className="further">QUERIES</span>
            </div>
          </div>
        </div>
      </div>
      <footer>
        This page was coded by Samira Seyfi
        <a
          href="https://github.com/Samira77-ss/status-preview-card-component"
          target="_blank"
          alt="GithHub Profile"
          rel="noreferrer"
        >
          open-source-code on GitHub
        </a>
        , and hosted on
        <a
          href="https://fastidious-queijadas-ec3eeb.netlify.app"
          alt="Netlify link"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default Card;
