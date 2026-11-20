import { useEffect, useState } from "react";
import ModulePage from "../components/ModulePage";

export default function WaterQuality() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the CORIOLIX API endpoint
    const fetchData = async () => {
      try {
        // Placeholder request fetching the last item from the SensorMixLg3 model
        const response = await fetch(
          "https://hmsc-cms.dri.oregonstate.edu/api/decimateData/?model=SensorMixLg3&last_item=1&format=json",
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // return (
  //   <div>
  //     <h1>Yaquina Water Quality Data</h1>
  //     {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
  //     <button
  //       onClick={() => (window.location.href = "/")}
  //       className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
  //     >
  //       Home
  //     </button>
  //   </div>
  // );

  return <ModulePage title="Yaquina Water Quality Data" description="This is a placeholder layout page" />;
}
