import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["bitcoin"],
    queryFn: () =>
      axios
        .get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
        )
        .then((res) => res.data),
    refetchInterval: 10000,
  });

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>TanStack Crypto Tracker</h1>
      {isLoading && <p>Loading price...</p>}
      {isError && <p>Error fetching data</p>}
      {data && <h2>Bitcoin: ${data.bitcoin.usd}</h2>}
      <p>
        <small>Updates automatically every 10 seconds</small>
      </p>
    </div>
  );
}
export default App;
