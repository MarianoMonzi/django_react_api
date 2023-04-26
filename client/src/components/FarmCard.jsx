import { useNavigate } from "react-router-dom";

export function FarmCard({ farm }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/farms/${farm.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{farm.title}</h1>
      <p className="text-slade-400">{farm.description}</p>
      <hr />
    </div>
  );
}
