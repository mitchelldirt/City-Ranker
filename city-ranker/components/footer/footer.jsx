import Attribution from './attribution';
import ShamelessPlug from './shamelessPlug';

// Using this data to throw content into my footer
const attributions = [
    { resourceSrc: 'https://www.walkscore.com/professional/', imgSrc: '/walkScoreLogo.png', aria: 'Walkscore website which is used to get data on walking, biking, and transit for a city', id: 0 },
    { resourceSrc: 'https://www.pexels.com', imgSrc: 'https://images.pexels.com/lib/api/pexels.png', aria: 'Pexels website used to get stock images', id: 1 },
    { resourceSrc: 'https://developers.google.com/fonts/faq', imgSrc: '/googleFontsLogo.png', aria: 'Google Fonts FAQ website which includes the license and links to finding free fonts and icons (I\'ve used the icons in this website.', id: 2 }
]


const footerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '5%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.87)',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backdropFilter: 'blur(4px)'
}

export default function Footer() {
    return (
        <>
            <footer style={footerStyles}>
                {attributions.map(attr => (
                    <a id={'attribution'.concat(attr.id)} aria-label={attr.aria} href={attr.resourceSrc} target='_blank' key={attr.id}>
                        <Attribution
                            imgSrc={attr.imgSrc}
                            aria={'attribution'.concat(attr.id)}
                        />
                    </a>
                ))}

                <ShamelessPlug />
            </footer>
        </>
    )
}