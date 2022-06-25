import React, { useState, useRef } from 'react'
import '../styles/Input.css'

function URL({ url }) {
    const [isCopied, setIsCopied] = useState(url.isCopied)
    const short_link_ref = useRef(null)

    const handleIsCopied = () => {
        short_link_ref.current.select()
        navigator.clipboard.writeText(short_link_ref.current.value)
        setIsCopied(true)
    }

    return (
        <div className="url">
            <p title={url.original_url}>{url.original_url}</p>
            <hr />
            <div className="url__short">
                <input ref={short_link_ref} value={url.short_url} disabled={true} />
                {
                    isCopied ?
                        <button className="purple" disabled={true}>Copied!</button>
                        : <button className="cyan" onClick={handleIsCopied}>Copy</button>
                }
            </div>
        </div>
    )
}

export default URL
