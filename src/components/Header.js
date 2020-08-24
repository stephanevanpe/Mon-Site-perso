import React from 'react'
import PropTypes from 'prop-types'
import cv from '../pages/cv Van_Pe_Stephane.pdf'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-rocket"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Stéphane Van Pe</h1>
                <p>Développeur web junior
                <br/>- Freelance -</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Réalisations</a></li>
                <li><a target="_blank" href={cv}>C.V.</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact </a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
