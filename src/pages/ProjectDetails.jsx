import { useProjectDetails } from "../features/projects/hooks";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Error, Loading } from "../components/ui/Error&Loading";
import Section from "../components/ui/Section";
import StartingPage from "../components/ui/StartingPage";
import moment from "moment";

const ProjectDetails = () => {
  const { slug } = useParams(); // Ottieni lo slug dall'URL
  const { data, error, isLoading } = useProjectDetails(slug);
  const navigate = useNavigate();
  // const [project, setProject] = useState([]);
  // const [isLoading, setIsLoading] = useState(false)

  const [isOpen, setIsOpen] = useState(null);

  const handleMouseEnter = (index) => {
    setIsOpen(index);
  };

  const handleMouseLeave = () => {
    setIsOpen(null);
  };

  // Esegui la chiamata API per recuperare i dettagli del progetto
  // const getDetails = async () => {
  //     setIsLoading(true)
  //     try {
  //         const response = await axios(`http://127.0.0.1:8000/api/projects/${slug}`);

  //         if (!response.data.project) {
  //             navigate('/error')
  //         }

  //         setProject(response.data.project);
  //         setIsLoading(false)
  //     } catch (err) {
  //         console.log(err);
  //         navigate('/error')
  //     }
  // };

  // useEffect(() => {
  //     getDetails();
  // }, [slug]);

  //TODO INSTALLARE IL PACCHETTO MOMENT

  // const formatDate = (dateString) => {
  //     const date = new Date(dateString);
  //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //     return date.toLocaleDateString(undefined, options); // Formatta la data
  // };

  if (isLoading)
    return <Loading message="Caricamento in corso. Attendi un istante..." />;

  if (error)
    return (
      <Error
        message={
          error.message ||
          "Ops... si è verificato un errore. Contatta l'assistenza."
        }
      />
    );
  console.log(data);

  return (
    <div className="min-h-screen">
      <Section>
        <StartingPage
          title={
            <>
              {data.project.name_project}
              <hr />
            </>
          }
          semiTitle={
            <div className="flex justify-between">
              <div>{data.project.type ? data.project.type.name : "N/A"}</div>
              <div>
                {data.project.date
                  ? moment(data.project.date).format("DD/MM/YYYY")
                  : "N/A"}
              </div>
            </div>
          }
          description={data.project.description}
          image={
            <img
              src={data.project.img}
              className="rounded-2xl object-cover h-full w-full"
              alt={data.project.name_project}
            />
          }
        />
      </Section>

      {/* <>
                <div className="">
                    <img src={data.img} className="rounded-2xl object-cover h-full w-full" alt={data.name_project} />
                </div>
                <div className="p-5 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold mb-4">{data.name_project}</h1>
                        <p className="mb-4">{data.description}</p>
                        <p className="mb-2"><strong>Creazione:</strong> {formatDate(data.date)}</p>
                        <p className="mb-2"><strong>Tipologia:</strong> {data.type ? data.type.name : 'N/A'}</p>
                        <p className="mb-2"><strong>GitHub URL:</strong> <a href={data.git_URL} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">View Project</a></p>
                        <div className="mt-4">
                            <strong>Linguaggi usati:</strong>
                            <ul className="list-disc list-inside mt-2">
                                {data.languages ?
                                    data.languages.map((language, index) => (
                                        <li key={language.id} className="text-gray-300 relative">
                                            <span onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                                                {language.name}
                                            </span>
                                            Elemento flottante per questo linguaggio
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
            </> */}
    </div>
  );
};

export default ProjectDetails;
