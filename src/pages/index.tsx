import React from "react"

const IndexPage: React.FC<{}> = () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img
                src="https://bulma.io/images/bulma-type-white.png"
                alt="Logo"
              />
            </a>
            <span
              className="navbar-burger burger"
              data-target="navbarMenuHeroA"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">Home</a>
              <a className="navbar-item">Examples</a>
              <a className="navbar-item">Documentation</a>
              <span className="navbar-item">
                <a className="button is-primary is-inverted">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-6">
            <div className="box">
              <h1 className="title has-text-black is-4">Login Form</h1>
            </div>
          </div>
          <div className="column" />
        </div>
      </div>
    </div>
  </section>
)

export default IndexPage
