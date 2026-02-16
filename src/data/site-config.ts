import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Mariana Pineda'
    },
    title: 'Mariana Pineda',
    subtitle: 'Bienvenidos',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
       
    ],
    socialLinks: [
    
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Hola a todos y bienvenidos a mi primer blog y portafolio web!',
        text: "Soy **Mariana Pineda**, una ingeniera de sistemas en proceso de formación en la Universidad el Bosque, soy programadora competitiva con un conocimiento alto en Java, un conocimiento medio en c++ y un conocimiento basico en Python.\nPoseo habilidades analíticas y tecnológicas ademas de la honestidad, la persistencia, el trabajo en equipo y el liderazgo.\nA parte tengo grandes pasiones y hobbies como lo son cantar, tocar piano, dibujar y armar.",
        image: {
            src: hero,
            alt: 'A image about me created by ChatGPT'
        },
       
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
