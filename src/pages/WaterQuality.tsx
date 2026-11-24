import WaterQualityCharts from "../charts/WaterQualityCharts";
import ModulePage from "../components/ModulePage";

export default function WaterQuality() {
  return (
    <ModulePage
      title="Water Quality"
      moduleDescription="Explore the water quality data collected from the Yaquina Bay estuary."
      learningDescription="Is there a relationship between water depth and salinity? How might this affect the organisms that live in the estuary?"
      content={<WaterQualityCharts />}
      dataPagePath="/WaterQuality"
      learningPagePath="/WaterQuality/learning"
    />
  );
}
