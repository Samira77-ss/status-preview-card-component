import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="image">
          <img
            src="https://github.com/amirhossein-peyvand/status-preview-card-component/blob/main/src/assets/image-header-desktop.jpg?raw=true"
            alt="women coding"
          />
        </div>
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
            <div>
              <span>10k+</span>
              <span>COMPANIES</span>
            </div>
            <div>
              <span>314</span>
              <span>TEMPLATES</span>
            </div>
            <div>
              <span>12M+</span>
              <span>QUERIES</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
