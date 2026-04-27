import { useState } from "react";
import { useDebounce } from 'use-debounce';
import CountryList from "./CountryList"; // Import your new file


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch] = useDebounce(searchTerm, 500);

  return (
    <div style={{ padding: "20px" }}>
      <h1>World Explorer</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />

      {/* Passing the search term as a prop */}
      <CountryList searchTerm={debouncedSearch} />
    </div>
  );
}

export default App;
