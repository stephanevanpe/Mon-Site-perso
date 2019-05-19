import React from 'react'
import PropTypes from 'prop-types'

import margouillat from '../images/margouillat.jpg'
import code from '../images/IMG_4193.jpg'
import pouring from '../images/Pouring.jpg'
import cv from '../pages/cv Van_Pe_Stephane.pdf'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={margouillat} alt="" /></span>
          <p>Bienvenu sur mon site personnel.</p>
          <p>Ce site a été créé afin que vous puissiez découvrir mon travail de jeune developpeur . Bonne visite . </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Travail</h2>
          <span className="image main"><img src={code} alt="" /></span>
          <p>Après plusieurs années de travail dans le secteur de la biologie marine, j'ai du faire face à un changement de vie.</p>
          <p>C'est pour cela que début 2019, j'ai debuté ma formation de developpeur web au sein de la Wild Code School de Bidart. Durant mon cursus de formation, j'ai peu étudier: Html/CSS, JavaScript, React, SQL. De même plusieurs projets ont été réalisés; vous pouvez les retrouver sur mon github.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">A Propos</h2>
          <span className="image main"><img src={pouring} alt="" /></span>
          <p>Il est très dure de ce décrire sois même. Passionné par un tas de choses je vous laisse le soin de me découvrir via les photos suivantes. </p>
          <p>J'espère que cela vous a plus, n'hesitez pas à me contacter.</p>          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact / <a target="_blank" href={cv}>c.v.</a></h2>
          <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://github.com/stephanevanpe" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://fr.linkedin.com/in/stephane-van-pe" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
            <li><a href="https://www.facebook.com/stephane.vanpe" className="icon fa-facebook"><span className="label">Facebook</span></a></li>

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