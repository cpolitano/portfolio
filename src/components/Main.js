import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/starfruit.jpg'
import pic02 from '../images/blueberries.jpg'
import pic03 from '../images/foraged-mushrooms.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            In 2017, I left a corporate engineering job in Washington, DC and set out to reconnect
            with the Earth and learn how I could apply my technical skills to solving our most
            pressing planetary challenges. My journey took me to Northern California, Mexico, Costa Rica,
            and sailing up the coast of Central America all the way to Hawaii.
          </p>
          <p>
            Along the way, I fell in love with permaculture, regenerative agriculture,
            and traditional ecological knowledge, traditions with profound leverage to
            restore balance to our biosphere. Over the last few years, I've had the pleasure
            of helping land projects in Costa Rica and California by sharing my
            skills in communications, software engineering, and getting my hands in the soil.
            I've learned from incredible teachers about the wisdom of plants, the paramount
            importance of soil, the Earth's capacity to regenerate herself, and our responsibility to help.
          </p>
          <p>
            I'm now making a home in San Francisco and stewarding <a href="https://www.terran.io/" target="_blank">Terran Collective</a>, a
             community of care and practice building systems and tools for a regenerative future.
             I accept contracts in software engineering, communications, and corporate strategy.
             Please reach out to collaborate with me. We're in the transition together.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>My skills are wide-ranging from my years working in nonprofits, tech companies, and
          sustainable and regenerative businesses, with an emphasis on software engineering,
          communications, business strategy, and permaculture. I write production-level code for
          enterprise software. I work across the stack, but I am particularly passionate about
          creating beautiful, usable interfaces that are a joy for people to interact with.
          </p>
          <p>It's important to me to apply my skills to projects that are in some way building
          towards the more beautiful world our hearts know is possible: a regenerative culture
          that heals more than it extracts, caring for the greatest good of all beings. I'm excited
          about creating tech that advances this future, as well as helping companies transition
          to regenerative practices. And I'm always on the lookout for opportunities to step away
          from the screen and engage directly with the Earth.
          </p>
          <p>
            <h3>Software Engineering</h3>
            <ul>
              <li>Data Stores: MySQL, PostgreSQL, PostGIS, NoSQL, DynamoDB, Elasticsearch</li>
              <li>Backend: Node.js, Go, Python, AWS services, Google Cloud Platform</li>
              <li>Frontend: JavaScript (ES6+), React, Redux, Webpack, GraphQL, Gatsby.js, Mapbox, Google Maps, D3, CSS Frameworks, HTML</li>
              <li>Product Management, Sprint Planning, Code Review, Dev Team Lead</li>
            </ul>
            <h3>Software Examples</h3>
            <ul>
              <li>Terran Collective - <a href="https://www.terran.io/" target="_blank" rel="noopener noreferrer">Community site</a> - I developed the frontend (React, Gatsby.js)</li>
              <li>Regen Network - <a href="https://app.regen.network/" target="_blank" rel="noopener noreferrer">Farmer Data mapping app</a> - simple geospatial app to collect farming practices from regenerative farmers. I developed the frontend (React, GraphQL) and contributed to the backend (PostGIS)</li>
              <li>Social Tables - <a href="https://www.socialtables.com/product/check-in/" target="_blank" rel="noopener noreferrer">Event Check In app</a> - I led this team and developed both the frontend (React/Redux) and backend (Node.js, RethinkDB)</li>
              <li>The Mushroom Farm - <a href="https://www.themushroom.farm/" target="_blank" rel="noopener noreferrer">Membership site</a> - built with Squarespace</li>
            </ul>
            <h3>Regenerative Business Strategy</h3>
            <ul>
              <li>Mission, Vision, and Values Development</li>
              <li>Company Culture Building</li>
              <li>Strategy - Positioning, Fundraising, Partnerships</li>
              <li>Communications, Marketing, Copywriting</li>
              <li>Online Community Development and Membership Programs</li>
              <li>B Corp Consulting</li>
            </ul>
            <h3>Permaculture Design</h3>
            <ul>
              <li>Landscape Assessment and Visioning</li>
              <li>Garden Design and Implementation</li>
              <li>Permaculture for Business</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            To get in touch, please drop me a line at clare [at] terran [dot] io.
          </p>
          <ul className="icons">
            <li>
              <a href="https://www.instagram.com/claritymangolapa/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cpolitano"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
