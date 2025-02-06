import type { About, Benefit, Question, Team } from "./types";

export const ITEMS_ABOUT: About[] = [
    {
        title: 'Visionario Digital',
        description: '¿Tienes una idea innovadora y quieres transformarla en una aplicación que impacte? Nosotros convertimos tus conceptos en experiencias digitales atractivas y funcionales, ayudándote a marcar la diferencia en el mercado y conectarte con tu audiencia de manera única.',
        img: 'customer.png'
    },
    {
        title: 'Emprendedor en Expansión',
        description: 'Si buscas hacer crecer tu negocio con tecnología eficiente, nuestras soluciones están diseñadas para optimizar tus procesos, mejorar la experiencia de tus clientes y maximizar tu alcance. Llevamos tu visión al siguiente nivel con plataformas que funcionan y destacan.',
        img: 'market-analysis.png'
    },
    {
        title: 'Consultor en Búsqueda de Impacto',
        description: 'Como experto en tu industria, sabes que una plataforma robusta y confiable marca la diferencia. Nosotros creamos aplicaciones personalizadas que te permiten conectar con tus clientes, automatizar procesos y brindar tus servicios de forma profesional y sin complicaciones.',
        img: 'businessman.png'
    },
    {
        title: 'Empresa en Transformación Digital',
        description: 'Si tu negocio necesita modernizarse y adaptarse a la era digital, te ofrecemos soluciones que integran lo último en tecnología para que puedas mejorar la eficiencia, reducir costos y alcanzar a más clientes. Nos encargamos de transformar tus procesos, asegurando que tu empresa esté lista para el futuro.',
        img: 'consulting.png'
    },
]

export const ITEMS_BENEFITS: Benefit[] = [
    {
        title: 'Transformamos tus ideas en experiencias digitales excepcionales',
        description: 'Nuestro equipo convierte tu visión en aplicaciones personalizadas, optimizadas y seguras. Nos especializamos en crear soluciones innovadoras que elevan tu marca y mejoran la experiencia de tus usuarios, para que te destaques en el mercado y construyas una conexión duradera con tus clientes.',
        tag: 'Soluciones a Medida',
        img: 'example.webp',
        direction: "left"
    },
    {
        title: 'Calidad, seguridad y compromiso en cada proyecto',
        description: 'Sabemos que confiarnos tu proyecto significa mucho más que contratar un servicio; significa confiar en un equipo dedicado a cumplir con los más altos estándares de calidad y seguridad. Nuestra experiencia y compromiso garantizan que cada aplicación funcione de forma confiable y esté siempre alineada con tus metas. Nos enorgullece ofrecer un servicio personalizado y un soporte continuo que te permita concentrarte en lo que realmente importa: tu negocio.',
        tag: 'Tecnología que Inspira Confianza',
        img: 'equipo.webp',
        direction: "right"
    }
]

export const TEAM_INTEGRANTS: Team[] = [
    {
        image: 'adrian.webp',
        name: 'César Adrián Hernández Hernández',
        rol: 'Desarrollador Web.',
        experience: '2 años de experiencia.',
        about: 'César colabora actualmente como desarrollador web en el Laboratorio de Desarrollo de Apps de la División Académica de Ciencias y Tecnologías de la Información en la Universidad Juárez Autónoma de Tabasco. En su rol, aplica sus habilidades para crear experiencias digitales de calidad y aportar soluciones tecnológicas a proyectos innovadores.',
        starred_experience: [
            {
                title: 'Casa Universitaria del Cacao y Chocolate',
                description: 'Participó en este proyecto significativo para la Universidad, integrando sus habilidades en desarrollo web y diseño de interfaces.'
            }
        ],
        skills: [
            {
                title: 'Desarrollo Frontend',
                description: 'Experiencia con frameworks como Astro y React, así como con tecnologías de estilo visual como CSS y Tailwind para diseñar interfaces modernas y eficientes.'
            },
            {
                title: 'Desarrollo de videojuegos',
                description: 'Dominio en la creación de juegos utilizando Unity y C#, combinando creatividad y técnica para construir experiencias interactivas atractivas.'
            }
        ],
        new_oportunities: [
            {
                title: 'En Proyectos Actuales',
                description: 'César está involucrado en varios proyectos donde aprovecha sus conocimientos en tecnologías web para desarrollar soluciones innovadoras que marcan la diferencia.'
            }
        ]
    },
    {
        image: 'jesus.webp',
        name: 'Jesús Alayón Dominguez',
        rol: 'Desarrollador Web.',
        experience: '3 años de experiencia.',
        about: 'Jesús es un apasionado del desarrollo de aplicaciones backend y soluciones en la nube, con experiencia en el desarrollo de infraestructura escalable e Internet de las Cosas (IoT). Actualmente, se especializa en implementar soluciones tecnológicas para proyectos de adquisición y transmisión de datos, aprovechando tecnologías avanzadas para entornos industriales y empresariales.',
        starred_experience: [
            {
                title: 'Sistema de Adquisición y Transmisión de Datos en Pozos Petroleros',
                description: 'Como integrante de este proyecto en 2024, Jesús programó sensores para medir variables críticas (temperatura, humedad, presión y gas) y configuró la infraestructura en la nube utilizando AWS y Docker para asegurar la fiabilidad y escalabilidad del sistema.'
            },
            {
                title: 'Freelance Backend Developer en Caribbean Digital Group (2021 - 2023)',
                description: "Jesús colaboró con clientes desarrollando API's en Python y NodeJS para una variedad de aplicaciones, ofreciendo soluciones de backend personalizadas y efectivas."
            }
        ],
        skills: [
            {
                title: 'Desarrollo Backend',
                description: 'Experiencia en NodeJS y Python para crear sistemas backend robustos y eficientes.'
            },
            {
                title: 'Soluciones en la nube',
                description: 'Dominio en configuración y orquestación de aplicaciones en la nube con AWS y contenedores con Docker.'
            },
            {
                title: 'Frameworks de Frontend',
                description: 'Conocimiento en VueJS para la implementación de interfaces interactivas cuando es necesario.'
            }
        ],
        records: [
            {
                title: 'Medalla Homo-Technologicus',
                description: 'Reconocimiento por proyectos destacados en innovación tecnológica.'
            },
            {
                title: 'Premios en competencias',
                description: '1er lugar en concurso de software por "Test del espectro autista" y finalista en la etapa nacional de Startup World Cup.'
            }
        ],
        new_oportunities: [
            {
                title: 'En Búsqueda de Nuevas Oportunidades',
                description: 'Jesús busca seguir creciendo en el ámbito tecnológico y aplicar sus conocimientos en entornos desafiantes, donde pueda desarrollar soluciones tecnológicas que hagan la diferencia.'
            }
        ]
    },
    // {
    //     image: 'paola.webp',
    //     name: 'Ashairy Paola Bolívar Zamudio',
    //     rol: 'Desarrolladora Frontend y Analista de Datos.',
    //     experience: '2 años de experiencia.',
    //     about: 'Ashairy es estudiante de la Licenciatura en Ciencias Computacionales en la UJAT. Con un profundo interés en las nuevas tecnologías, su enfoque se centra en áreas como la inteligencia artificial, la programación y el desarrollo de software. Considera que su carrera le ofrece un campo lleno de desafíos que la motivan a aprender y avanzar profesionalmente.',
    //     starred_experience: [
    //         {
    //             title: 'Desarrollo de Modelos Químicos',
    //             description: 'Trabajó en el desarrollo de modelos de estructuras químicas utilizando tecnologías de diseño y fabricación asistida por computadora (CAD/CAM) con Fusion 360 de Autodesk, bajo la supervisión de la M.T. María Hortensia Almaguer Cantú.'
    //         },
    //         {
    //             title: 'Base de Datos y Desarrollo de Software',
    //             description: 'Colaboró en el desarrollo de una base de datos en SQL Server y en un programa en C# para el control, seguimiento y gestión de permisos, en conjunto con el Lic. Alejandro Rueda.'
    //         }
    //     ],
    //     skills: [
    //         {
    //             title: 'Programación',
    //             description: 'Conocimiento en lenguajes y tecnologías para el desarrollo de software.'
    //         },
    //         {
    //             title: 'Modelación y CAD/CAM',
    //             description: 'Dominio en herramientas como Fusion 360.'
    //         },
    //         {
    //             title: 'Edición de videos',
    //             description: 'Competencia en software de edición para proyectos académicos y personales.'
    //         }
    //     ],
    //     events: [
    //         {
    //             title: 'Ponencia',
    //             description: 'Presentó el trabajo “Percepción de la inteligencia artificial ChatGPT entre estudiantes de química: un estudio exploratorio” en el 3er Congreso Internacional SPIUJAT, enfocado en tecnologías innovadoras y perspectivas de la inteligencia artificial.'
    //         },
    //         {
    //             title: 'Hackaton',
    //             description: 'Participó en el Hackathon organizado por la Asociación Mexicana de Empresas de Hidrocarburos.'
    //         },
    //         {
    //             title: 'Huawei ICT Competition 2023-2024',
    //             description: 'Finalista en la etapa nacional del Computing Track de la competencia.'
    //         },
    //         {
    //             title: 'Premio cultural',
    //             description: 'Obtuvo el primer lugar en el concurso “I love you - Acrostic” organizado por el CELE Chontalpa, Sede 02.'
    //         }
    //     ]
    // },
    {
        image: 'jorge.webp',
        name: 'Jorge Enrique Jiménez Moreno',
        rol: 'Especialista en Producción de Video y Modelado 3D.',
        experience: '8 años en producción de video, 2 años en modelado 3D.',
        about: 'Jorge es un profesional creativo con una sólida trayectoria en la producción y edición de video, sumando ocho años de experiencia en el campo audiovisual. Su interés por las tecnologías emergentes lo ha llevado a especializarse en áreas innovadoras como la realidad aumentada (AR) y la realidad virtual (VR), lo que le permite desarrollar proyectos inmersivos y de alto impacto visual.',
        skills: [
            {
                title: 'Producción Audiovisual',
                description: 'Competencia avanzada en herramientas de edición de video, aportando calidad y creatividad a cada pieza.'
            },
            {
                title: 'Modelado y Animación 3D',
                description: 'Dominio de Blender para desarrollar modelos tridimensionales complejos y atractivos visualmente.'
            },
            {
                title: 'Diseño Gráfico',
                description: 'Conocimiento en Photoshop para el diseño visual y la creación de gráficos, aportando un toque profesional e integral a los proyectos creativos.'
            },
        ],
        starred_experience: [
            {
                title: 'Producción y Edición de Video',
                description: 'Jorge cuenta con amplia experiencia en la creación de contenido audiovisual de calidad, desde la preproducción hasta la edición final, aportando una visión profesional y detallada en cada proyecto.'
            },
            {
                title: 'Modelado 3D',
                description: 'Con dos años de experiencia en Blender, Jorge ha trabajado en proyectos de modelado y animación en 3D, creando entornos y objetos realistas que complementan sus habilidades en AR y VR.'
            },
        ],
        new_oportunities: [
            {
                title: 'Enfoque en Innovación',
                description: 'Apasionado por la tecnología, Jorge integra herramientas avanzadas de realidad aumentada y realidad virtual en sus proyectos, ofreciendo soluciones que combinan creatividad y tecnología en un solo enfoque.'
            }
        ]
    },
    {
        image: 'angel.webp',
        name: 'Ángel Criserio Martínez López',
        rol: 'Diseñador en Experiencia de Usuario e Interfaces de Usuario (UX/UI), Desarrollador Android Jetpack Compose.',
        experience: '3 años de UX/UI, 1 año de desarrollador Android Jetpack Compose.',
        about: 'Ángel es un profesional versátil con experiencia en ingeniería de sistemas, diseño UX/UI y desarrollo en Android. Actualmente, colabora en el rediseño de la página web de la División Académica en la Universidad Juárez Autónoma de Tabasco, donde aplica sus conocimientos en experiencia de usuario y diseño de interfaces para mejorar la usabilidad y apariencia de la plataforma.',
        skills: [
            {
                title: 'Tecnologías de Nube',
                description: 'Experiencia con AWS para la implementación de entornos en la nube y Docker para la contenedorización y despliegue de aplicaciones.'
            },
            {
                title: 'Diseño UX/UI',
                description: 'Competencias en diseño de experiencia de usuario y estética de interfaz, aplicadas en el rediseño de plataformas web académicas.'
            }
        ],
        starred_experience: [
            {
                title: 'Rediseño Web en la Universidad Juárez Autónoma de Tabasco',
                description: 'Actualmente colabora en el rediseño de la página web de la División Académica (https://www.ujat.mx/dacyti). Aplica estudios de UX y principios de diseño UI para mejorar la experiencia y usabilidad de la plataforma, optimizando la navegación y accesibilidad para los usuarios de la universidad.'
            },
            {
                title: 'Diseño Web del laboratorio XDEVLAB',
                description: 'Participa activamente en el diseño y desarrollo de la página web de XDEVLAB, un laboratorio enfocado en la investigación y desarrollo de tecnologías avanzadas. Aplicó principios de diseño UX/UI para crear una plataforma visualmente atractiva y funcional, que facilita la navegación y la presentación de los proyectos del laboratorio. Este proyecto incluyó la integración de tecnologías modernas para optimizar el rendimiento y garantizar una experiencia de usuario óptima en dispositivos tanto de escritorio como móviles.'
            }
        ],
        certifications: [
            {
                title: 'Diseño de Experiencia del Usuario (UX) – Google en Coursera',
                description: 'Completó el curso de diseño de UX a cargo de Google, que profundiza en las mejores prácticas para crear experiencias de usuario efectivas y centradas en el usuario. Certificado obtenido el 6 de noviembre de 2024.'
            },
            {
                title: 'AWS Cloud Solutions Architect – Amazon Web Services en Coursera',
                description: 'Obtuvo el certificado profesional de AWS Cloud Solutions Architect, desarrollando competencias para diseñar, implementar y gestionar soluciones en la nube. Certificado obtenido el 10 de febrero de 2024.'
            },
            {
                title: 'AWS Fundamentals – Amazon Web Services en Coursera',
                description: 'Finalizó la especialización en fundamentos de AWS, adquiriendo conocimientos esenciales sobre los servicios de nube de AWS y su aplicación práctica. Certificado obtenido el 9 de enero de 2024.'
            }
        ]
    }
]

export const DATA_QUESTIONS: Question[] = [
    {
        question: '¿Por qué debería confiar en nuestros servicios?',
        answer: 'Nos enfocamos en ofrecer soluciones de alta calidad y nos dedicamos a entender las necesidades de cada cliente. Nuestra experiencia y compromiso nos permiten crear productos que realmente impactan y ayudan a nuestros clientes a alcanzar sus objetivos.',
    },
    {
        question: '¿Qué tipos de soporte ofrecen?',
        answer: 'Nuestro equipo está disponible para ayudarte en cada paso del proceso. Ofrecemos soporte técnico, consultas personalizadas y seguimiento continuo para garantizar que obtengas los mejores resultados posibles.',
    },
    {
        question: '¿Cómo garantizan la actualización constante de sus servicios?',
        answer: 'Estamos comprometidos con la innovación. Implementamos mejoras y actualizaciones continuas para mantener nuestros servicios y productos alineados con las últimas tendencias y avances tecnológicos.',
    }
]