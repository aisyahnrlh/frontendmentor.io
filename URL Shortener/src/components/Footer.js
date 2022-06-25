import React from 'react';
import '../styles/Footer.css';
import { ReactComponent as Logo } from '../images/logo-white.svg';
import { footer_links, footer_socmed } from '../data/footer';

function Footer() {
    return (
        <footer>
            <Logo />
            <div className="footer_right">
                {
                    footer_links.map(link => (
                        <div>
                            <h5>{link.title}</h5>
                            {
                                link.links.map(link => <p>{link}</p>)
                            }
                        </div>
                    ))
                }
                <div className="social__media">
                    {
                        footer_socmed.map(link => link)
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer
