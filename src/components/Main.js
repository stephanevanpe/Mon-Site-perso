import React from 'react'
import PropTypes from 'prop-types'
import Gallery from '../components/Gallery'

import margouillat from '../images/margouillat.jpg'
import code from '../images/IMG_4193.jpg'
import pouring from '../images/Pouring.jpg'
import cv from '../pages/cv Van_Pe_Stephane.pdf'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Panorama sur la plaine des sables.' },
  { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Une habitante du jardin.' },
  { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Cascade Réunionaise.' },
  { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Vue sur l\' Océan depuis la terrasse à Guéthary.' },
  { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'La rosée du matin sur une rose.' },
  { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Couché de soleil sur la baie de St-Jean-De-Luz.' }
];

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={margouillat} alt="" /></span>
          <p>Bienvenu sur mon site personnel.</p>
          <p>Après plusieurs années de travail dans le secteur de la biologie marine, j'ai du faire face à un changement de vie.</p>
          <p>C'est pour cela que début 2019, j'ai debuté ma formation de developpeur web au sein de la Wild Code School de Bidart. Durant mon cursus de formation, j'ai pu étudier: Html/CSS, JavaScript, React, SQL. De même plusieurs projets ont été réalisés; vous pouvez les retrouver sur mon github.</p>
          <p>Ce site a été créé afin que vous puissiez découvrir mon travail de jeune developpeur . Bonne visite . </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Réalisations</h2>
          <span className="image main"><img src={code} alt="" /></span>
          <p>Après plusieurs années de travail dans le secteur de la biologie marine, j'ai du faire face à un changement de vie.</p>
          <p>C'est pour cela que début 2019, j'ai debuté ma formation de developpeur web au sein de la Wild Code School de Bidart. Durant mon cursus de formation, j'ai pu étudier: Html/CSS, JavaScript, React, SQL. De même plusieurs projets ont été réalisés; vous pouvez les retrouver sur mon github.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major"><a target="_blank" href={cv}>c.v.</a></h2>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
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