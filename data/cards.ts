import type { CardProps } from "../components/card/Card";

export const cards: CardProps[] = [
  {
    title: "GPS Ingest server",
    description:
      "A server that receives GPS data from a mobile device and stores it in a database using GO.",
    tags: [
      {
        text: "Go",
        variant: "go",
      },
      {
        text: "MySql",
        variant: "mysql",
      },
    ],
  },
];

export default cards;
