import { ReactComponent as Facebook } from '../images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../images/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../images/icon-instagram.svg';

const footer_links = [
    {
        title: "Features",
        links: [
            "Link Shortening",
            "Branded Links",
            "Analytics"
        ]
    },
    {
        title: "Resources",
        links: [
            "Blog",
            "Developers",
            "Support"
        ]
    },
    {
        title: "Company",
        links: [
            "About",
            "Our Team",
            "Contact"
        ]
    },
]

const footer_socmed = [
    <Facebook />,
    <Twitter />,
    <Pinterest />,
    <Instagram />
]

export { footer_links, footer_socmed }