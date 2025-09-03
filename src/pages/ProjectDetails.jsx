import { useProjectDetails } from "../features/projects/hooks";
import { useParams } from "react-router-dom";
import { Error, Loading } from "../components/ui/Error&Loading";
import Section from "../components/ui/Section";
import StartingPage from "../components/ui/StartingPage";
import moment from "moment";

const ProjectDetails = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useProjectDetails(slug);

  //TODO INSTALLARE IL PACCHETTO MOMENT

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
          // <p className="mb-2"><strong>GitHub URL:</strong> <a href={data.git_URL} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">View Project</a></p>
          // <div className="mt-4">
          //                   <strong>Linguaggi usati:</strong>
          //                   <ul className="list-disc list-inside mt-2">
          //                       {data.languages ?
          //                           data.languages.map((language, index) => (
          //                               <li key={language.id} className="text-gray-300 relative">
          //                                   <span onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className="cursor-pointer">
          //                                       {language.name}
          //                                   </span>
          //                               </li>
          //                           ))
          //                           : 'N/A'
          //                       }

          //                   </ul>
          //               </div>
          image={
            <img
              src={data.project.img}
              className="rounded-2xl object-cover h-full w-full"
              alt={data.project.name_project}
            />
          }
        />
      </Section>

      {/* TODO INSERIRE CAROSELLO PER POTER VEDERE LE VARIE IMMAGINI SALVATE DEI PROGETTI */}
      
    </div>
  );
};

export default ProjectDetails;
