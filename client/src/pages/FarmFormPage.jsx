import { useForm } from "react-hook-form";
import { createFarm, deleteFarm, updateFarm, getFarm } from "../api/farms.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function FarmFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateFarm(params.id, data);
      toast.success("Farm updated", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createFarm(data);
      toast.success("Farm created", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/farms");
  });

  useEffect(() => {
    async function loadFarm() {
      if (params.id) {
        const { data } = await getFarm(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("tree", data.tree);
        setValue("average_cost", data.average_cost);
        setValue("average_revenue", data.average_revenue);
        setValue("average_profit_per_hour", data.average_profit_per_hour);
      }
    }
    loadFarm();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <h1 className="font-bold uppercase">Title</h1>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounder-lg block w-full mb-3"
        />
        {errors.title && <span>Title is required</span>}
        <h1 className="font-bold uppercase">Description</h1>
        <textarea
          cols="3"
          placeholder="Description"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounder-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>Description is required</span>}
        <h1 className="font-bold uppercase">Atlas Tree</h1>
        <a href="https://poeplanner.com/atlas-tree/" className="font-bold uppercase w-full " target="_blank">Poe Planner Link</a>
        <input
          type="text"
          placeholder="Atlas Tree"
          {...register("tree", { required: true })}
          className="bg-zinc-700 p-3 rounder-lg block w-full mb-3"
        />
        
        {errors.tree && <span>Tree is required</span>}
        <h1 className="font-bold uppercase">Average Cost</h1>
        <input
          type="number"
          step="0.1"
          placeholder="Average Cost"
          {...register("average_cost", { required: true })}
          className="bg-zinc-700 p-3 rounder-lg block w-full mb-3"
        />
        {errors.average_cost && <span>Average Cost is required</span>}
        <h1 className="font-bold uppercase">Average Revenue</h1>
        <input
          type="number"
          step="0.1"
          placeholder="Average Revenue"
          {...register("average_revenue", { required: true })}
          className="bg-zinc-700 p-3 rounder-lg block w-full mb-3"
        />
        {errors.average_revenue && <span>Average Revenue is required</span>}
        <h1 className="font-bold uppercase">Average Profit Per Hour</h1>
        <input
          type="number"
          step="0.1"
          placeholder="Average Profit Per Hour"
          {...register("average_profit_per_hour", { required: true })}
          className="bg-zinc-700 p-3 rounder-lg block w-full mb-3"
        />
        {errors.average_profit_per_hour && <span>Average Profit Per Hour is required</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                await deleteFarm(params.id);
                toast.success("Farm deleted", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/farms");
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
