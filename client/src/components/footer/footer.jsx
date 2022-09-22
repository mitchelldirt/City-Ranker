import Attribution from './attribution';
import ShamelessPlug from './shamelessPlug';

const attributions = [
    { text: 'Walking, biking, and transit data from ', resourceSrc: 'https://www.walkscore.com/professional/', imgSrc: '/src/assets/walk-score-2-sm.png', id: 0 },
    { text: 'Walking, biking, and transit data from ', resourceSrc: 'https://www.walkscore.com/professional/', imgSrc: '/src/assets/walk-score-2-sm.png', id: 1 },
    { text: 'Walking, biking, and transit data from ', resourceSrc: 'https://www.walkscore.com/professional/', imgSrc: '/src/assets/walk-score-2-sm.png', id: 2 }

]

export default function Footer() {
    return (
        <>

            {attributions.map(attr => (
                <li key={attr.id}>
                    <Attribution
                        text={attr.text}
                        resourceSrc={attr.resourceSrc}
                        imgSrc={attr.imgSrc}
                    />
                </li>
            ))}

            <ShamelessPlug />
        </>
    )
}