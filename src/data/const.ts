export const SITE_TITLE: string = "Eclipse Astro Template";
export const SITE_DESCRIPTION: string = "Explore the Eclipse Astro Template, a versatile theme crafted with Astro.js and Tailwind CSS, ideal for blogs and portfolios.";
export const X_ACCOUNT: string = "@zab_thomas";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};


export type SiteConfig = {
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
};

const siteConfig: SiteConfig = {
    headerNavLinks: [
        {
            text: 'Projects',
            href: '/works'
        },
        {
            text: 'Blog',
            href: '/posts'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Markdown style',
            href: '/markdown'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/Thomas-Zabalo/astro-template'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
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
        title: 'Showcasing My Work: A Journey in Web Development',
        text: "Hello, I'm Emily Johnson, a passionate web developer driven by creativity and a love for crafting exceptional digital experiences. My journey in web development is marked by a deep curiosity for cutting-edge technologies and a commitment to delivering innovative solutions. I thrive in dynamic environments where I merge creativity with technical expertise to build impactful websites and applications. With a sharp eye for detail and a dedication to user-centric design, I aim to enhance user experiences through intuitive interfaces and robust backend solutions.",
        image: {
            src: '/hero.jpg',
            alt: 'A person sitting at a desk in front of a computer at work',
            caption: '',
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
};

export default siteConfig;