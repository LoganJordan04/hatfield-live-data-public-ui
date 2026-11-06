import { useEffect, useState } from "react";

export default function Seawater() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the CORIOLIX API endpoint
    const fetchData = async () => {
      try {
        // Placeholder request fetching the last item from the SensorMixLg3 model
        const response = await fetch('https://hmsc-cms.dri.oregonstate.edu/api/decimateData/?model=SensorMixLg3&last_item=1&format=json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Seawater Data</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}