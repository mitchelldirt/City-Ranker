import Attribution from './attribution';
import ShamelessPlug from './shamelessPlug';

const attributions = [
    { text: '', resourceSrc: 'https://www.walkscore.com/professional/', imgSrc: '/src/assets/walkscoreLogo.png', id: 0 },
    { text: '', resourceSrc: 'https://www.pexels.com', imgSrc: 'https://images.pexels.com/lib/api/pexels.png', id: 1 },
    { text: '', resourceSrc: 'https://www.walkscore.com/professional/', imgSrc: '/src/assets/googleFontsLogo.png', id: 2 }
]


const footerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '5%',
    alignItems: 'end',
    height: '100px'
}
export default function Footer() {
    return (
        <>
            <footer style={footerStyles}>
            {attributions.map(attr => (
                <a href={attr.resourceSrc} target='_blank' key={attr.id}>
                    <Attribution
                        text={attr.text}
                        imgSrc={attr.imgSrc}
                    />
                </a>
            ))}

            <ShamelessPlug />
            </footer>
        </>
    )
}