import React, { useState } from 'react';
import axios from 'axios';
import URLs from './URLs';

function Input() {
    const [isUrl, setIsUrl] = useState(true)
    const [url, setUrl] = useState("")
    const [urlList, setUrlList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const postUrl = () => {
        setIsLoading(true)
        axios.post("https://api.shrtco.de/v2/shorten?url=" + url)
            .then(response => {
                const url = {
                    code: response.data.result.code,
                    original_url: response.data.result.original_link,
                    short_url: response.data.result.full_short_link,
                    isCopied: false
                }
                setUrlList(urlList => [...urlList, url])
                setIsLoading(false)
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    const submitUrl = (e) => {
        e.preventDefault()
        if (url === "") {
            setIsUrl(false)
        } else {
            postUrl()
        }

        setUrl("")
    }

    return (
        <section className="input__container">
            <form className="input" onSubmit={(e) => submitUrl(e)}>
                <input className={isUrl ? "success" : "danger"} type="text" placeholder="Shorten a link here..." value={url} onChange={(e) => { setUrl(e.target.value); setIsUrl(true) }} />
                {
                    !isUrl && <p><i>Please add a link</i></p>
                }
                <button className={isLoading ? "disabled" : "cyan"} type="submit" disabled={isLoading && true}>
                    {
                        isLoading ?
                            <img className="loading" src="https://gifimage.net/wp-content/uploads/2017/11/gif-loading-transparent.gif" alt="" />
                            : "Shorten It!"
                    }
                </button>
            </form>
            <URLs urls={urlList}></URLs>
        </section>
    )
}

export default Input
