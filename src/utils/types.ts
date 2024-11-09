export interface About {
    title: string;
    description: string;
    img: string;
}

export interface Benefit {
    title: string;
    img: string;
    tag: string;
    description: string;
    direction: 'left' | 'right'
}

export interface Team {
    image: string;
    name: string;
    rol: string;
    experience: string;
    about: string;
    starred_experience: Experience[];
    skills: Experience[];
    certifications?: Experience[];
    records?: Experience[];
    new_oportunities?: Experience[];
    events?: Experience[];
}

export interface Experience {
    title: string;
    description: string;
}