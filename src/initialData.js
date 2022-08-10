const maps = [
  {
    name: "street-waldo",
    photo: "./assets/street-waldo.png",
    characters: [
      { name: "Green Waldo", position: { x: [555, 627], y: [606, 795] } },
      { name: "Blonde Waldo", position: { x: [676, 716], y: [144, 229] } },
      { name: "Black Waldo", position: { x: [940, 972], y: [251, 338] } },
    ],
  },
  {
    name: "beach-waldo",
    photo: `./assets/beach-waldo.jpg`,
    characters: [
      { name: "Green Waldo", position: { x: [237, 259], y: [361, 430] } },
      { name: "Waldo", position: { x: [521, 564], y: [357, 412] } },
      { name: "Small Waldo", position: { x: [652, 677], y: [608, 648] } },
    ],
  },
  {
    name: "space-waldo",
    photo: "./assets/space-waldo.jpg",
    characters: [
      { name: "Waldo", position: { x: [1505, 1541], y: [327, 384] } },
      {
        name: "Blonde Waldo",
        position: { x: [1679, 1718], y: [1252, 1326] },
      },
      { name: "Black Waldo", position: { x: [435, 477], y: [679, 736] } },
    ],
  },
];

export default function getInitialData() {
  return maps;
}
