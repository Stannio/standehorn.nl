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
        text: "MySQL",
        variant: "mysql",
      },
    ],
  },
  {
    title: "SaaS Asset tracker",
    description:
      "A SaaS that allows clients to track their assets using bluetooth labels and gateways",
    tags: [
      {
        text: "Typescript",
        variant: "ts",
      },
      {
        text: "React",
        variant: "react",
      },
      {
        text: "Elastic search",
        variant: "es",
      },
      {
        text: "MySQL",
        variant: "mysql",
      },
    ],
  },
];

export default cards;
