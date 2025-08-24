const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Delish",
            tech: ["JavaScript", "SQL", "React", "Next.js", "Tailwind CSS", "Express.js", "Node.js", "PostgreSQL"],
            description: "A recipe management platform with functionality that includes searching for recipes, saving favorites, posting reviews, and generating shopping lists.",
            codeLink: "https://github.com/Chaoster3/recipes",
            liveLink: "https://recipes-azure-ten.vercel.app/"
        },
        {
            id: 2,
            title: "OS Simulator",
            tech: ["C"],
            description: "A simulated Unix-like operating system featuring a fully-functional FAT file system, kernel, and shell.",
            codeLink: "https://drive.google.com/drive/u/1/folders/1XrA7ilgkm9d2XUJiIa-vj_jVm_JJYpiL",
            liveLink: null
        },
        {
            id: 3,
            title: "Pennstagram",
            tech: ["JavaScript", "Java", "SQL", "React", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "AWS", "Kafka", "Spark", "Socket.io"],
            description: "A social media platform that allows users to post photos, follow other users, like/comment on posts, and live chat with other users.",
            codeLink: "https://github.com/Chaoster3/pennstagram",
        },
        {
            id: 4,
            title: "Personal Website",
            tech: ["JavaScript", "React", "Tailwind CSS"],
            description: "This personal website.",
            codeLink: "https://github.com/Chaoster3/Chaoster3.github.io",
        },
        {
            id: 5,
            title: "Dwellify",
            tech: ["JavaScript", "React", "Express.js", "Node.js", "Tailwind CSS", "AWS", "PostgreSQL"],
            description: "A web app for viewing and filtering house listings on various criteria.",
            codeLink: "https://github.com/Chaoster3/Chaoster3.github.io",
        },
        {
            id: 6,
            title: "Map Generator",
            tech: ["Python", "NumPy"],
            description: "A randomized map generator for building mult-agent pathfinding environments with graph representations.",
            codeLink: "https://github.com/Chaoster3/map-generator",
        }
    ];

    const ProjectCard = ({ project }) => {
        return (
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-blue-500 bg-opacity-20 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-300 border-opacity-30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                
                <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex gap-4">
                    <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 border border-white border-opacity-30"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        View Code
                    </a>
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Link
                        </a>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="grow flex flex-col items-center text-white py-8 z-50 font-quicksand">
            <div className="w-full max-w-4xl px-8">
                <div className="mb-12 text-center">
                    <h1 className="text-6xl mb-6 animate-fade-right font-quicksand">Projects</h1>
                </div>
                
                <div className="w-full">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
