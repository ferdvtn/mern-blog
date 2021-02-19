import React from 'react'
import { SVGFacebook, SVGGitub, SVGReact, SVGWhatsapp } from '../../../assets'
import './footer.scss'

const SocialIcon = ({ img }) => {
    return (
        <div className='social-wrapper'>
            <img className='social-icon' src={ img } alt="social-icon"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className="footer-logo">
                <img className='App-logo' src={ SVGReact } alt="MERN Blog logo"/>
            </div>
            <div className="footer-social">
                <SocialIcon img={ SVGGitub } />
                <SocialIcon img={ SVGFacebook } />
                <SocialIcon img={ SVGWhatsapp } />
            </div>
        </div>
    )
}

export default Footer
