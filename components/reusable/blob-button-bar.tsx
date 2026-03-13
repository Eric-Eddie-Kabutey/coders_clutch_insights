'use client';

import React, { useMemo, useState } from "react";
import { BlobButton } from "./blob-button";

export default function BlobButtonBar({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
}) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const visualActive = hoveredCategory ?? selectedCategory;

  return (
    <div
      className="blob-btn-group pb-3 flex justify-center items-center gap-2 md:gap-6 flex-wrap"
      onPointerLeave={() => setHoveredCategory(null)}
    >
      {categories.map((category) => (
        <BlobButton
          key={category}
          active={visualActive === category}
          onClick={() => setSelectedCategory(category)}
          onPointerEnter={() => {
            if (category !== selectedCategory) setHoveredCategory(category);
          }}
        >
          {category}
        </BlobButton>
      ))}
    </div>
  );
}
