import React from 'react';
import '../styles/Advantages.css';

function AdvantageCard({ content }) {
    const { id, title, desc, icon } = content
    return (
        <div className={`advantage advantage${id}`}>
            <div className="advantage__icon">
                {icon}
            </div>
            <h3 className="advantage__title">{title}</h3>
            <p className="advantage__text">{desc}</p>
        </div>
    )
}

export default AdvantageCard
