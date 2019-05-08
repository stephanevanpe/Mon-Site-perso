import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Réaliser par: Stephane Van Pe 2019. 
            <br />
            <a target="_blank" href="https://github.com/stephanevanpe">
                <span className="icon fa-github fa-2x"></span>
            </a> 
            {'  '}
            <a target="_blank" href="https://fr.linkedin.com/in/stephane-van-pe">
                <span className="icon fa-linkedin"></span>
            </a> 
            {'  '}
            <a target="_blank" href="https://www.facebook.com/stephane.vanpe">
                <span className="icon fa-facebook"></span>
            </a> 
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
