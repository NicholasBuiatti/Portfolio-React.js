import { getTypes, getLanguages } from "../api";
import { useProjects } from "../hooks";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import { useState } from "react";

const ProjectsFilters = ({ page }) => {
  const [form, setForm] = useState({});
  const [filters, setFilters] = useState(form);
  const { data, isLoading, error } = useProjects(page, filters);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters(form);
    console.log(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Qui puoi aggiungere i filtri per i progetti */}
      <h2>Filtri Progetti</h2>
      <Input
        label={"Nome Progetto"}
        name="name_project"
        placeholder="Cerca progetto..."
        value={form.name_project}
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />

      {/* VEDERE DELLA SELEZIONE MULTIPLA ANCHE LATO BACKEND */}
      <Select
        endpoint={getTypes}
        value={form.type}
        name="type"
        multiple
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

      <Select
        endpoint={getLanguages}
        value={form.language}
        name="language"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        mapOptions={(data) =>
          data.languages.map((language) => ({
            value: language.id,
            label: language.name,
          }))
        }
      />
      <button type="submit">Filtra</button>
    </form>
  );
};

export default ProjectsFilters;
