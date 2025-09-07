import { useProjectDetails } from "../features/projects/hooks";
import { useParams } from "react-router-dom";
import { Error, Loading } from "../components/ui/Error&Loading";
import Section from "../components/ui/Section";
import StartingPage from "../components/ui/StartingPage";
import CarouselProject from "../features/projects/components/CarouselProject";
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
        <div className="container mx-auto">
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
            description={
              <>
                <div>{data.project.description}</div>
                <hr />
                <div className="mt-4 flex justify-between">
                  <ul className="list-disc list-inside mt-2 col-4">
                    {data.project.languages
                      ? data.project.languages.map((language, index) => (
                          <li
                            key={language.id}
                            className="text-gray-600 relative"
                          >
                            <span>{language.name}</span>
                          </li>
                        ))
                      : "N/A"}
                  </ul>
                  <div className="col-8">
                    <p className="mb-2">
                      <a
                        href={data.project.git_URL}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub project
                      </a>
                    </p>
                  </div>
                </div>
              </>
            }
            image={
              <img
                src={data.project.img}
                className="rounded-2xl object-cover h-full w-full"
                alt={data.project.name_project}
              />
            }
          />
        </div>
      </Section>

      {/* TODO INSERIRE CAROSELLO PER POTER VEDERE LE VARIE IMMAGINI SALVATE DEI PROGETTI */}
      <CarouselProject images={data.project.images} />
    </div>
  );
};

export default ProjectDetails;
