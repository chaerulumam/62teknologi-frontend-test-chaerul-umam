import React from "react";

export default function PageLimit({ options, pageLimit, onChange }) {
  return (
    <div>
      <label className="mr-4 font-sans" htmlFor="pageLimit">
        Show
      </label>
      <select
        className="h-8 border px-4 rounded focus:outline-none focus:border-blue-400"
        value={pageLimit}
        id="pageLimit"
        onChange={onChange}
      >
        {options &&
          options.map((item, id) => (
            <option key={id} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}
