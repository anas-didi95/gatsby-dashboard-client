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
      <LoginForm />
    </div>
  </section>
)

const LoginForm: React.FC<{}> = () => (
  <div className="container">
    <div className="columns">
      <div className="column" />
      <div className="column is-6">
        <div className="box">
          <p className="title has-text-black is-4">Login Form</p>
          <form>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input is-success" type="text" placeholder="Text input" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input is-danger" type="password" placeholder="Text input" />
              </div>
              <p className="help is-danger">Password is mandatory!</p>
            </div>
            <div className="buttons is-right">
              <button className="button is-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
      <div className="column" />
    </div>
  </div>
)

export default IndexPage
