import type { ReactElement } from "react";

export interface TagProps {
  text: string;
  variant: keyof typeof TagMap;
}

const TagMap = {
  php: "bg-purple-500 text-purple-200 hover:text-purple-500 hover:bg-purple-200 shadow-md shadow-gray-600/40",
  js: "bg-yellow-300 text-yellow-600 hover:text-yellow-300 hover:bg-yellow-600 shadow-md shadow-gray-600/40",
  ts: "bg-blue-600 text-blue-300 hover:text-blue-600 hover:bg-blue-300 shadow-md shadow-gray-600/40",
  devops:
    "bg-gray-300 text-gray-600 hover:text-gray-300 hover:bg-gray-600 shadow-md shadow-gray-600/40",
  graphql:
    "bg-gray-100 text-graphql hover:text-gray-100 hover:bg-graphql shadow-md shadow-gray-600/40",
  react:
    "bg-gray-700 text-react hover:text-gray-700 hover:bg-react shadow-md shadow-gray-600/40",
  go: "bg-gray-600 text-go hover:bg-go hover:text-gray-600 font-bold shadow-md shadow-gray-600/40",
  mysql:
    "bg-gray-200 text-mysql hover:bg-mysql hover:text-gray-200 font-bold shadow-md shadow-gray-600/40",
  es: "bg-gray-200 text-mysql hover:bg-mysql hover:text-gray-200 font-bold shadow-md shadow-gray-600/40",
};

export const Tag = ({ text, variant }: TagProps): ReactElement => {
  const className = TagMap[variant];
  return (
    <div
      className={`${className} transition-colors cursor-pointer rounded-md font-medium px-2 mr-2 mt-2`}
    >
      {text}
    </div>
  );
};

const Tags = () => {
  return (
    <div className="flex flex-wrap mt-3">
      <Tag text="Go" variant="go" />
      <Tag text="Typescript" variant="ts" />
      <Tag text="JS" variant="js" />
      <Tag text="React" variant="react" />
      <Tag text="GraphQL" variant="graphql" />
      <Tag text="DevOps" variant="devops" />
      <Tag text="PHP" variant="php" />
    </div>
  );
};

export default Tags;
