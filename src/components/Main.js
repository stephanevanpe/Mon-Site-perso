import React from 'react'
import PropTypes from 'prop-types'


import margouillat from '../images/margouillat.jpg'
import code from '../images/IMG_4193.jpg'


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
					<div ref={this.props.setWrapperRef} id='main' style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
						<article
							id='intro'
							className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
							style={{ display: 'none' }}
						>
							<h2 className='major'>Intro</h2>
							<span className='image main'>
								<img src={margouillat} alt='' />
							</span>
							<p>Bienvenue sur mon site personnel</p>
							<p>Après plusieurs années de travail dans le secteur de la biologie marine, j'ai dû faire face à un changement de vie.</p>
							<p>
								C'est pour cela que début 2019, j'ai débuté ma formation de développeur web au sein de la Wild Code School de Bidart. Durant mon cursus, j'ai
								étudié : <b>Html/CSS, JavaScript, React, Node js, SQL</b> et réalisé plusieurs projets que vous pouvez retrouver sur mon github.
							</p>
							<p>Ce site a été créé afin que vous puissiez découvrir mon travail de jeune développeur.</p>
							<p>Bonne visite. </p>
							{close}
						</article>

						<article
							id='work'
							className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
							style={{ display: 'none' }}
						>
							<h2 className='major'>Réalisations</h2>
							<span className='image main'>
								<img src={code} alt='' />
							</span>
							<p>
								<li>
									<a target='_blank' href='https://khrisma.fr'>
										<b>Khrisma</b>
									</a>
								</li>
								<li>
									<b>I Clean My Sea</b> (Le lien de la web app sera présent lorsque ce dernier aura été dévoilé au public.)
								</li>
								<li>
									<a target='_blank' href='https://blogteam.netlify.app/'>
										<b>Blog Big Pig Junk Food</b>
									</a>
								</li>
							</p>

							{close}
						</article>

						<article
							id='contact'
							className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
							style={{ display: 'none' }}
						>
							<h2 className='major'>Contact</h2>
							<form name='contact-form' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
								<input type='hidden' name='bot-field' />
								<input type='hidden' name='form-name' value='contact' />
								<div className='field half first'>
									<label htmlFor='name'>Name</label>
									<input type='text' name='name' id='name' />
								</div>
								<div className='field half'>
									<label htmlFor='email'>Email</label>
									<input type='text' name='email' id='email' />
								</div>
								<div className='field'>
									<label htmlFor='message'>Message</label>
									<textarea name='message' id='message' rows='4'></textarea>
								</div>
								<ul className='actions'>
									<li>
										<input type='submit' value='Send Message' className='special' />
									</li>
									<li>
										<input type='reset' value='Reset' />
									</li>
								</ul>
							</form>
							<ul className='icons'>
								<li>
									<a href='https://github.com/stephanevanpe' className='icon fa-github'>
										<span className='label'>GitHub</span>
									</a>
								</li>
								<li>
									<a href='https://fr.linkedin.com/in/stephane-van-pe' className='icon fa-linkedin'>
										<span className='label'>Linkedin</span>
									</a>
								</li>
							</ul>
							{close}
						</article>
					</div>
				);
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