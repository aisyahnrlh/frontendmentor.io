import { ReactComponent as BrandRecognitionIcon } from '../images/icon-brand-recognition.svg';
import { ReactComponent as DetailedRecordsIcon } from '../images/icon-detailed-records.svg';
import { ReactComponent as FullyCustomizableIcon } from '../images/icon-fully-customizable.svg';

const contents = [
    {
        id: 1,
        title: "Brand Recognition",
        desc: `Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.`,
        icon: <BrandRecognitionIcon />
    },
    {
        id: 2,
        title: "Detailed Records",
        desc: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
        icon: <DetailedRecordsIcon />
    },
    {
        id: 3,
        title: "Fully Customizable",
        desc: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
        icon: <FullyCustomizableIcon />
    }
]

export { contents }