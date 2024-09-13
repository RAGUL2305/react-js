import React, { useState } from "react";
import MultiDropDownRecrusion from "./recursion";
const data = [
  {
    label: "animals",
    children: [
      {
        label: "carnivores",
        children: [
          { label: "Lion" },
          { label: "Tiger" },
          { label: "Wolf" },
          { label: "Leopard" },
          { label: "Hyena" },
        ],
      },
      {
        label: "herbivores",
        children: [
          { label: "Elephant" },
          { label: "Giraffe" },
          { label: "Deer" },
          { label: "Zebra" },
          { label: "Bison" },
        ],
      },
      {
        label: "omnivores",
        children: [
          { label: "Bear" },
          { label: "Raccoon" },
          { label: "Wild Boar" },
          { label: "Baboon" },
          { label: "Crow" },
        ],
      },
      {
        label: "aquatic",
        children: [
          { label: "Shark" },
          { label: "Dolphin" },
          { label: "Crocodile" },
          { label: "Octopus" },
          { label: "Seal" },
        ],
      },
      {
        label: "scavengers",
        children: [
          { label: "Vulture" },
          { label: "Hyena" },
          { label: "Jackal" },
          { label: "Coyote" },
          { label: "Marabou Stork" },
        ],
      },
    ],
  },
  {
    label: "birds",
    children: [
      {
        label: "raptors",
        children: [
          { label: "Eagle" },
          { label: "Hawk" },
          { label: "Falcon" },
          { label: "Owl" },
          { label: "Vulture" },
        ],
      },
      {
        label: "waterfowl",
        children: [
          { label: "Duck" },
          { label: "Swan" },
          { label: "Goose" },
          { label: "Pelican" },
          { label: "Heron" },
        ],
      },
      {
        label: "game",
        children: [
          { label: "Pheasant" },
          { label: "Quail" },
          { label: "Turkey" },
          { label: "Grouse" },
          { label: "Partridge" },
        ],
      },
      {
        label: "wading",
        children: [
          { label: "Flamingo" },
          { label: "Stork" },
          { label: "Ibis" },
          { label: "Crane" },
          { label: "Spoonbill" },
        ],
      },
    ],
  },
  {
    label: "flowers",
    children: [
      {
        label: "perennial",
        children: [
          { label: "Rose" },
          { label: "Lavender" },
          { label: "Peony" },
          { label: "Daisy" },
          { label: "Chrysanthemum" },
        ],
      },
      {
        label: "biennial",
        children: [
          { label: "Foxglove" },
          { label: "Hollyhock" },
          { label: "Sweet William" },
          { label: "Canterbury Bells" },
          { label: "Evening Primrose" },
        ],
      },
      {
        label: "bulb",
        children: [
          { label: "Tulip" },
          { label: "Daffodil" },
          { label: "Lily" },
          { label: "Hyacinth" },
          { label: "Crocus" },
        ],
      },
    ],
  },
  {
    label: "trees",
    children: [
      {
        label: "deciduous",
        children: [
          { label: "Oak" },
          { label: "Maple" },
          { label: "Birch" },
          { label: "Cherry" },
          { label: "Elm" },
        ],
      },
      {
        label: "evergreen",
        children: [
          { label: "Pine" },
          { label: "Spruce" },
          { label: "Cedar" },
          { label: "Holly" },
          { label: "Fir" },
        ],
      },
      {
        label: "coniferous",
        children: [
          { label: "Redwood" },
          { label: "Cypress" },
          { label: "Douglas Fir" },
          { label: "Juniper" },
          { label: "Larch" },
        ],
      },
      {
        label: "fruits",
        children: [
          { label: "Apple" },
          { label: "Orange" },
          { label: "Cherry" },
          { label: "Peach" },
          { label: "Lemon" },
        ],
      },
    ],
  },
  {
    label: "foods",
    children: [
      {
        label: "meats",
        children: [
          { label: "Chicken" },
          { label: "Beef" },
          { label: "Pork" },
          { label: "Lamb" },
          { label: "Turkey" },
        ],
      },
      {
        label: "seafood",
        children: [
          { label: "Salmon" },
          { label: "Shrimp" },
          { label: "Tuna" },
          { label: "Crab" },
          { label: "Lobster" },
        ],
      },
    ],
  },
];
export default function Output() {
  return (
    <div>
      <h1>Recursive Dropdown</h1>
      <MultiDropDownRecrusion data={data} />
    </div>
  );
}
