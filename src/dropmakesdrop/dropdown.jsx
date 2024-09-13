import React, { useState } from "react";
import "./drop.css";

const data = {
  animals: {
    carnivores: ["Lion", "Tiger", "Wolf", "Leopard", "Hyena"],
    herbivores: ["Elephant", "Giraffe", "Deer", "Zebra", "Bison"],
    omnivores: ["Bear", "Raccoon", "Wild Boar", "Baboon", "Crow"],
    aquatic: ["Shark", "Dolphin", "Crocodile", "Octopus", "Seal"],
    scavengers: ["Vulture", "Hyena", "Jackal", "Coyote", "Marabou Stork"],
  },
  birds: {
    raptors: ["Eagle", "Hawk", "Falcon", "Owl", "Vulture"],
    waterfowl: ["Duck", "Swan", "Goose", "Pelican", "Heron"],
    game: ["Pheasant", "Quail", "Turkey", "Grouse", "Partridge"],
    wading: ["Flamingo", "Stork", "Ibis", "Crane", "Spoonbill"],
  },
  flowers: {
    perennial: ["Rose", "Lavender", "Peony", "Daisy", "Chrysanthemum"],
    biennial: [
      "Foxglove",
      "Hollyhock",
      "Sweet William",
      "Canterbury Bells",
      "Evening Primrose",
    ],
    bulb: ["Tulip", "Daffodil", "Lily", "Hyacinth", "Crocus"],
  },
  trees: {
    deciduous: ["Oak", "Maple", "Birch", "Cherry", "Elm"],
    evergreen: ["Pine", "Spruce", "Cedar", "Holly", "Fir"],
    coniferous: ["Redwood", "Cypress", "Douglas Fir", "Juniper", "Larch"],
    fruits: ["Apple", "Orange", "Cherry", "Peach", "Lemon"],
  },
  foods: {
    meats: ["Chicken", "Beef", "Pork", "Lamb", "Turkey"],
    seafood: ["Salmon", "Shrimp", "Tuna", "Crab", "Lobster"],
  },
};



export default function Dropdown() {
  const [selected, setSelected] = useState([]);
  const [drop, setDrop] = useState("");
  const [secDrop, setSecdrop] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (!selected.includes(selectedValue)) {
      setSelected([...selected, selectedValue]);
      console.log(selected);
    }
    setSecdrop("")
  };

  const handleClick = (item) => {
    setDrop(item);
  };
  const secondClick = (item) => {
    setSecdrop(item);
    console.log(secDrop);
  };
  return (
    <div>
      <select className="first" onChange={handleChange}>
        <option hidden>Select an option</option>
        {Object.keys(data).map((item, index) => (
          <option key={index} onClick={() => handleClick(item)}>
            {item}
          </option>
        ))}
      </select>
      <div>
        {drop && (
          <select className="second">
            {Object.keys(data[drop]).map((item) => (
              <option onClick={() => secondClick(item)}>{item}</option>
            ))}
          </select>
        )}
      </div>
      <div>
        {secDrop && (
          <select className="third">
            {(data[drop][secDrop]).map((item) => (
              <option>{item}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
