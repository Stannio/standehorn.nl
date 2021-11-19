import type { ReactElement } from "react";
import React from "react";
import { Tag, TagProps } from "../Tags";

export interface CardProps {
  title: string;
  description: string;
  tags: TagProps[];
}

export const Card = ({ title, description, tags }: CardProps): ReactElement => {
  return (
    <div
      className={`col-span-6 p-6 font-medium prose transition-colors bg-gray-800 rounded-md dark:bg-gray-100 lg:col-span-3`}
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
