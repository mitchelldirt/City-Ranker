import Attribution from './attribution';
import ShamelessPlug from './shamelessPlug';

const attributions = [
    { text: '', resourceSrc: 'https://www.walkscore.com/professional/', imgSrc: '/src/assets/walk-score-2-sm.png', id: 0 },
    { text: '', resourceSrc: 'https://www.pexels.com', imgSrc: 'https://images.pexels.com/lib/api/pexels.png', id: 1 },
    { text: '', resourceSrc: 'https://www.walkscore.com/professional/', imgSrc: '/src/assets/Google_Fonts_logo.svg.png', id: 2 }
]


const footerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '5%',
    alignItems: 'end'
}
export default function Footer() {
    return (
        <>
            <footer style={footerStyles}>
            {attributions.map(attr => (
                <a href={attr.resourceSrc} target='_blank' key={attr.id}>
                    <Attribution
                        text={attr.text}
                        resourceSrc={attr.resourceSrc}
                        imgSrc={attr.imgSrc}
                    />
                </a>
            ))}

            <ShamelessPlug />
            </footer>
        </>
    )
}