import { useEffect, useState } from "react";
import { FarmCard } from "./FarmCard";
import { getAllFarms } from "../api/farms.api";

export function FarmList() {
  const [farm, setFarms] = useState([]);

  useEffect(() => {
    async function loadFarms() {
      const res = await getAllFarms();
      setFarms(res.data)
    }
    loadFarms();
  }, []);

  return <div className="grid grid-cols-3 gap-3">
    {farm.map(farm => (
        <FarmCard key={farm.id} farm={farm}/>
    ))}
  </div>;
}
