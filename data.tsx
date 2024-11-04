import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+1 año de experiencia como dev",
    },
    {
        id: 2,
        name: "Vendedor",
        icon: <UsersRound />,
        description: "+10 años de experiencia en ventas en TELEFONICA MOVILES ARGENTINA SA",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+4 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/emanuelradino/pagina-alquiler-de-autos",
        urlDemo: "https://pagina-alquiler-de-autos.vercel.app/",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/emanuelradino/Landing-bank/",
        urlDemo: "https://radinodev-landing-bank.netlify.app/",
    },
    {
        id: 3,
        title: "Web page",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/emanuelradino/web-spa-yt",
        urlDemo: "https://web-spa-b7f199ejp-emanuel-radinos-projects.vercel.app/",
    },
    {
        id: 4,
        title: "Netflix-clone",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
  
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development ",
        experience: [
            {
                name: "HTML",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "JavaScript",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "React",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "Next.js",
                subtitle: "Intermedio",
                value: 50,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development ",
        experience: [
            {
                name: "Node JS",
                subtitle: "Basico",
                value: 30,
            },
            {
                name: "Mongo DB",
                subtitle: "Basico",
                value: 30,
            },
            {
                name: "prisma",
                subtitle: "Basic",
                value: 30,
            },
            {
                name: "MySQL",
                subtitle: "intermedio",
                value: 50,
            },
           
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
           
            {
                name: "Desarrollo de aplicaciones web",
            },
          
            {
                name: "Comercio electrónico",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Analista Funcional",
        icon: <BellPlus />,
        features: [
            {
                name: "Análisis y diseño de funcionalidades/requerimientos",
            },
            {
                name: " Creación y definición de historias de usuario",
            },
            {
                name: "Diseño y ejecución de casos de prueba",
            },
            {
                name: " Reporte de incidentes (Jira)",
            },
            {
                name: " Pruebas funcionales",
            },
        ],
    },
    {
        id: 3,
        title: "Vendedor/Ejecutivo",
        icon: <UsersRound />,
        features: [
            {
                name: "Cumplí y superé  los objetivos de ventas,demostrando habilidades de negociación",
            },
            {
                name: " Brindé atención especializada a empresas, comprendiendo sus necesidades  para mejorar su productividad",
            },
            {
                name: "manejo de carteras clientes  y seguimiento de su facturación",
            },
            
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "linkedin",
        subtitle: "linkedin.com/in/emanuelradino/",
        link: "https://www.linkedin.com/in/emanuelradino/",
        icon: <FaLinkedin />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/emanuelradino",
        link: "github.com/emanuelradino",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "emanuelradino@hotmail.com",
        link: "emanuelradino@hotmail.com",
        icon: <Inbox />,
    },
];

export const dataFormation = [
    {
        id: 1,
        name: " Título intermedio",
        description:
            "Analista en Sistemas de información",
        
    },
    {
        id: 2,
        name: "Título de grado",
        description:
            "Licenciatura en Informatica",
        
    },
    {
        id: 3,
        name: "Máster en SQL Server",
        description:
            "Curso con certificado",
        
    },
    {
        id: 4,
        name: "Software testing",
        description:
            "Curso con certificado",
        
    },
    
];