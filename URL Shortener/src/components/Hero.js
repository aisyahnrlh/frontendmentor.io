import React from 'react';
import { ReactComponent as Illustration } from '../images/illustration-working.svg';
import '../styles/Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero__text">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="cyan">Get Started</button>
            </div>
            <Illustration className="hero__img" />
        </section>
    )
}

export default Hero
