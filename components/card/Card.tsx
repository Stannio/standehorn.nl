import type { ReactElement } from "react";
import React from "react";
import { Tag, TagProps } from "../Tags";

export interface CardProps {
  title: string;
  description: string;
  tags: TagProps[];
  index?: number;
}

export const Card = ({ title, description, tags }: CardProps): ReactElement => {
  return (
    <div
      className={`p-6 w-full font-medium prose transition-colors bg-gray-800 text-gray-100 prose-headings:text-gray-100 dark:text-gray-800 dark:prose-headings:text-gray-800 rounded-md dark:bg-slate-200`}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="flex flex-wrap">
        {tags.map((tag, key) => (
          <Tag text={tag.text} variant={tag.variant} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Card;
