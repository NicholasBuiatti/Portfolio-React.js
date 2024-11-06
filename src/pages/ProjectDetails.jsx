import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectDetail = () => {
    const { slug } = useParams(); // Ottieni lo slug dall'URL
    const navigate = useNavigate();
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const [isOpen, setIsOpen] = useState(null);

    const handleMouseEnter = (index) => {
        setIsOpen(index);
    };

    const handleMouseLeave = () => {
        setIsOpen(null);
    };

    // Esegui la chiamata API per recuperare i dettagli del progetto
    const getDetails = async () => {
        setIsLoading(true)
        try {
            const response = await axios(`http://127.0.0.1:8000/api/projects/${slug}`);

            if (!response.data.project) {
                navigate('/error')
            }

            setProject(response.data.project);
            setIsLoading(false)
        } catch (err) {
            console.log(err);
            navigate('/error')
        }
    };


    useEffect(() => {
        getDetails();
    }, [slug]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options); // Formatta la data
    };

    return (

        <div className="min-h-screen bg-black bg-opacity-50 text-white mx-5 shadow-2xl rounded-2xl flex flex-wrap">
            {
                isLoading ?
                    <div className="mx-auto self-center">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-16 h-16 animate-spin text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </div>
                    </div>
                    :
                    <>
                        <div className="lg:w-6/12">
                            <img src={project.img} className="rounded-2xl object-cover h-full w-full" alt={project.name_project} />
                        </div>
                        <div className="lg:w-6/12 p-5 flex flex-col justify-between">
                            <div>
                                <h1 className="text-2xl md:text-5xl font-bold mb-4">{project.name_project}</h1>
                                <p className="mb-4">{project.description}</p>
                                <p className="mb-2"><strong>Creazione:</strong> {formatDate(project.date)}</p>
                                <p className="mb-2"><strong>Tipologia:</strong> {project.type ? project.type.name : 'N/A'}</p>
                                <p className="mb-2"><strong>GitHub URL:</strong> <a href={project.git_URL} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">View Project</a></p>
                                <div className="mt-4">
                                    <strong>Linguaggi usati:</strong>
                                    <ul className="list-disc list-inside mt-2">
                                        {project.languages ?
                                            project.languages.map((language, index) => (
                                                <li key={language.id} className="text-gray-300 relative">
                                                    <span onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                                                        {language.name}
                                                    </span>
                                                    {/* Elemento flottante per questo linguaggio */}
                                                    {isOpen === index && (
                                                        <div className="absolute text-black p-3 rounded-xl shadow-md z-10 bg-slate-300">
                                                            {language.description}
                                                        </div>
                                                    )}
                                                </li>
                                            ))
                                            : 'N/A'
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div >

    );
};

export default ProjectDetail;
