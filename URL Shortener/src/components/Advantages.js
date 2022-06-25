import React from 'react';
import '../styles/Advantages.css';
import AdvantageCard from './AdvantageCard';
import { contents } from '../data/advantage_contents';

function Advantages() {
    return (
        <section className="advantages">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className="advantages__points">
                {
                    contents.map(content => <AdvantageCard content={content} key={content.id} />)
                }
            </div>
        </section>
    )
}

export default Advantages
