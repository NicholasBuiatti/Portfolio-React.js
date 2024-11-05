import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectDetail = () => {
    const { slug } = useParams(); // Ottieni lo slug dall'URL
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Esegui la chiamata API per recuperare i dettagli del progetto
        const getDetails = async () => {
            try {
                const response = await axios(`http://127.0.0.1:8000/api/projects/${slug}`);

                setProject(response.data);
            } catch (err) {
                setError(err.message);
            }
        };
        getDetails();
        console.log(project);

    }, [slug]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!project) {
        return <div>Caricamento...</div>;
    }

    return (
        <div>
            <h1>{project.project.name_project}</h1>
            <p>{project.project.description}</p>
            {/* Altri dettagli del progetto */}
        </div>
    );
};

export default ProjectDetail;
