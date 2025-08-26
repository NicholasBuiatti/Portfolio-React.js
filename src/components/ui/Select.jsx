import { useQuery } from "@tanstack/react-query";

export default function Select({ endpoint, onChange, value, mapOptions }) {
  const { data, isLoading, error } = useQuery({
    queryKey: [endpoint.name],
    queryFn: endpoint,
    enabled: !!endpoint,
  });

  const options = data && mapOptions ? mapOptions(data) : [];

  if (isLoading)
    return (
      <select disabled>
        <option>Caricamento...</option>
      </select>
    );
  if (error)
    return (
      <select disabled>
        <option>Errore!</option>
      </select>
    );

  return (
    <select className="border p-2" onChange={onChange} value={value}>
      <option value="">Seleziona...</option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
