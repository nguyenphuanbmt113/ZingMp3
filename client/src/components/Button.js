import React from "react";

export const Button = ({ text, style }) => {
  return (
    <button
      type="button"
      className={
        style
          ? style
          : "px-3 py-2 rounded-l-full rounded-r-full border bg-transparent"
      }>
      {text}
    </button>
  );
};
