

export interface NavLink {
    id: number;
    target: string;
    label: string;
}

export const NavLinks: NavLink[] = [
    {
        id: 1,
        target: "#features",
        label: "Features",
    },
    {
        id: 2,
        target: "#benefits",
        label: "Benefits",
    },
    {
        id: 3,
        target: "#about",
        label: "About",
    },
];


export const HeroLinks: Array<string> = [
    "Politics", "Entertainment", "Sport", "Tech", "Business",
];


export const featuresImage: Array<string> = [
    "/images/people.png", "/images/tech.png", "/images/entertainment.png", "/images/political.png",
];

export interface AboutPage {
    title: string;
    desp: string;
    img: string;
}

export const AboutPage: AboutPage[] = [
    {
        title: "Download App",
        desp: "Palpol",
        img: "/images/phone1.png",
    }, {
        title: "Check Your Choice",
        desp: "Easy Steps",
        img: "/images/phone2.png",
    }, {
        title: "Setup Profile",
        desp: "User Profile",
        img: "/images/phone3.png",
    },
]
export const Faq = [
    {
        auestion: "What is the purpose of this app?",
        answer: "The app is designed to connect people with similar interest, facilitate discussions on various topics, and provide resources for civic engagement."
    },
    {
        auestion: "Is this app free to download and use?",
        answer: "Yes the app is completely free to download and use."
    },
    {
        auestion: "How do i create an account on this app?",
        answer: "You can create an account using your phone number or email address"
    },
    {
        auestion: "How do i find people to connect with?",
        answer: "You can browse profiles based on interests, location or other criteria. You can join forums or communities related to your interests."
    },
    {
        auestion: "Can i have private conversations with other users?",
        answer: "Yes you can send private messages to other users."
    },
    {
        auestion: "How does the voting assistance feature work?",
        answer: "The app will provide information on upcoming elections, polling locations, and registration deadlines. You can also find resources to learn more about the candidates and issues."
    },
    {
        auestion: "Is my data safe on this app?",
        answer: "We take data security very seriously. We use industry-standard security measures to protect your personal information."
    },
    {
        auestion: "What devices is the app compatible with?",
        answer: "The  app is compatible with IOS and Android devices."
    },
    {
        auestion: "How can i report a problem or issue with the app?",
        answer: "You can contact our support team through the app or by email."
    },
]