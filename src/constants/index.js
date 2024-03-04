import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    react,
    sass,
    summiz,
    movierecommendationsystem,
    conversationalgeminillmchatapp,
    multilanguageinvoiceextractor,
    tailwindcss,
    java,
    sql,
    python
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Development",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Development and Machine Learning",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];



export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ArnabNath1',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/arnabnath07',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://summizekai.netlify.app/',
        github: 'https://github.com/ArnabNath1/AIArticleSummarizerApp'
    },
    {
        iconUrl: movierecommendationsystem,
        theme: 'btn-back-black',
        name: 'Movie Recommendation System',
        description: 'A content based movie recommendation system that uses Python and Machine Learning to recommend movies based on the movie you choose.',
        link: 'https://moviereckai.streamlit.app/',
        github: 'https://github.com/ArnabNath1/Movie-Recommendation-System',
    },
    {
        iconUrl: multilanguageinvoiceextractor,
        theme: 'btn-back-yellow',
        name: 'Multi Language Invoice Extractor',
        description: 'An AI based web app that uses Python, Google Gemini Pro Vision model and the Streamlit framework for effortlessly extracting data from invoices in various languages.',
        link: 'https://huggingface.co/spaces/arnabbumba077/MultiLanguageInvoiceExtractor',
        github: 'https://github.com/ArnabNath1/Multi-Language-Invoice-Extractor-App',
    },
    {
        iconUrl: conversationalgeminillmchatapp,
        theme: 'btn-back-blue',
        name: 'Conversational Gemini LLM Chat App',
        description: 'App that uses Python, Google Gemini Pro model and the Streamlit framework to respond to questions asked by the user and also stores the question and the answer as chat history.',
        link: 'https://huggingface.co/spaces/arnabbumba077/ConversationalQAchatbot',
        github: 'https://github.com/ArnabNath1/Conversational-Gemini-LLM-Chat-App',
    }
];