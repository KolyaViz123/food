import { FC } from "react";
import { useState } from "react";

const Recipe: FC = () => {
  const [recipe, setRecipe] = useState({ name: "test", description: "test2" });

  const fetchData = async () => {
    const responce = await fetch("http://localhost:3000/recipe/random");
    const data = await responce.json();

    setRecipe({ name: data.name, description: data.description });
  };
  return (
    <div className="flex w-[400px] flex-col items-center justify-center bg-gray-700">
      <h1 className="my-10 rounded-3xl border-2 border-blue-500 bg-blue-100 p-5 text-center text-3xl font-extrabold text-blue-400">
        {recipe.name}
      </h1>
      <p className="my-10 rounded-3xl border-2  border-blue-500 bg-blue-100 p-5 text-center text-lg font-extrabold text-blue-950">
        {recipe.description}
      </p>

      <button
        className="my-10 w-[200px] rounded-3xl border-2 border-blue-500 bg-blue-100 p-5 text-center text-lg font-extrabold text-blue-950"
        onClick={fetchData}
      >
        show recipe
      </button>
    </div>
  );
};

export default Recipe;
