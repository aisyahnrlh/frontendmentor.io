import React from 'react';
import URLCard from './URLCard';

function URLList({ urls }) {
    return (
        <>
            {
                urls.map(url => {
                    return <URLCard url={url} key={url.code} />
                })
            }
        </>
    )
}

export default URLList