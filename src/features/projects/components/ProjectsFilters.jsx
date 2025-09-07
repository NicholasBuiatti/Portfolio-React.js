import { getTypes, getLanguages } from "../api";
import { useProjects } from "../hooks";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import PropTypes from "prop-types";

const ProjectsFilters = ({ setFilters }) => {
  const [form, setForm] = useState({
    name_project: "",
    type_id: [],
    language_id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between items-end">
      <div className="md:w-1/3 px-2">
        <Input
          label={"Nome Progetto"}
          name="name_project"
          placeholder="Cerca progetto..."
          value={form.name_project}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </div>

      {/* TODO SELEZIONE MULTIPLA LATO BACKEND */}
      <div className="w-1/3 px-2">
        <Select
          label={"Tipo"}
          endpoint={getTypes}
          value={form.type_id}
          name="type_id"
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: Array.from(
                e.target.selectedOptions,
                (option) => option.value
              ),
            })
          }
          mapOptions={(data) =>
            data.types.map((type) => ({
              value: type.id,
              label: type.name,
            }))
          }
        />
      </div>

      <div className="w-1/3 px-2">
        <Select
          label={"Linguaggio"}
          endpoint={getLanguages}
          value={form.language_id}
          name="language_id"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          mapOptions={(data) =>
            data.languages.map((language) => ({
              value: language.id,
              label: language.name,
            }))
          }
        />
      </div>
      <div>
        <Button text={"Filtra"} variant="outline" className="mb-5" />
      </div>
    </form>
  );
};

ProjectsFilters.propTypes = {
  page: PropTypes.number.isRequired,
};

export default ProjectsFilters;
