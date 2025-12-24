import React from "react";
import DescriptionHeading from "./DescriptionHeading";
import DescriptionPara from "./DescriptionPara";
import Nutrition from "./Nutrition";

const Description = () => {
  const nutritionData = [
    {
      title: "Energy",
      val: "370 Kcal",
    },
    {
      title: "Protein",
      val: "24 G",
    },
    {
      title: "Fat",
      val: "14 G",
    },
    {
      title: "Carbohydrate",
      val: "42 G",
    },
    {
      title: "Moisture",
      val: "10%",
    },
    {
      title: "Crude Fiber",
      val: "3 G",
    },
  ];
  return (
    <div className="bg-[#FAF8E7] pb-20">
      <div className="heading border-b py-3 px-4 ">
        <h2 className="text-xl font-medium">Description</h2>
      </div>
      <div className="flex flex-col gap-8 mt-5 px-4">
        <div className="desc">
          <DescriptionHeading text={"Instruction For Use"} />
          <DescriptionPara
            text={
              "Gradually transition your dog to the new food over 5-7 days. Serve dry or lightly moistened with warm water. Always provide fresh, clean drinking water."
            }
          />
        </div>
        <ul className="capitalize pl-4 px-4">
          <h3 className="text-[#432818] -translate-x-3 font-medium text-2xl">
            Ingredients
          </h3>
          <li className="list-disc">Natural chicken meat</li>
          <li className="list-disc">rice</li>
          <li className="list-disc">salmon oil</li>
          <li className="list-disc">vitamins A,D,E</li>
          <li className="list-disc">Essential Minerals * Amino Acids</li>
          <li className="list-disc">Prebiotics for Healthy Digestion</li>
        </ul>
        <div className="desc px-2">
          <DescriptionHeading text={"Feeding Suggestions"} />
          <DescriptionPara
            text={
              "Store in a cool, dry place. Keep the bag tightly sealed after opening to maintain freshness."
            }
          />
        </div>
        <div className="desc px-2">
          <DescriptionHeading text={"State of Origin"} />
          <DescriptionPara text={"Made in Poland"} />
        </div>
        <div className="desc px-2">
          <DescriptionHeading text={"Nutritional Information"} />
          {nutritionData.map((nutrition, index) => (
            <Nutrition nutrition={nutrition} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
