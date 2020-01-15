import React from 'react'
import PropTypes from 'prop-types'
import colibri from '../images/colibri.svg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <div className="logo-icon">
              <img src={colibri} width="50px" />
            </div>
        </div>
        <div className="content">
            <div className="inner">
                <h1>In service to regeneration</h1>
                <p>Hi, I'm Clare. I'm a technologist and ecosocial entrepreneur dedicated<br/>to channeling resources to heal our communities and our planet.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
