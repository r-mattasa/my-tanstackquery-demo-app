import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Move the logic here
const fetchCountries = async (searchTerm) => {
  const url = searchTerm
    ? `https://restcountries.com/v3.1/name/${searchTerm}`
    : `https://restcountries.com/v3.1/all`;
  const { data } = await axios.get(url);
  return data;
};

// Export your component
export default function CountryList({ searchTerm }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries", searchTerm],
    queryFn: () => fetchCountries(searchTerm),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>No countries found.</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
      }}
    >
      {data?.map((country) => (
        <div
          key={country.cca3}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <img
            src={country.flags.svg}
            alt={country.name.common}
            style={{ width: "100%" }}
          />
          <h3>{country.name.common}</h3>
        </div>
      ))}
    </div>
  );
}
