import React, { useState } from "react";

export default function Search(props) {
  const { setQueries, onSearch, onClear, fields, queries } = props;
  const [errors, setErrors] = useState({});
  const onInputChange = (e) => {
    const { value, name } = e.target;
    setQueries({
      ...queries,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: null,
    });
  };

  const handleSearch = () => {
    let isValid = true;
    let validation = fields.reduce((prev, curr) => {
      if (!queries[curr.name] && curr.isRequired) {
        isValid = false;
        prev = { ...prev, [curr.name]: `${curr.label} is required` };
      }
      return prev;
    }, {});

    if (!isValid) {
      setErrors({
        ...errors,
        ...validation,
      });
    } else {
      console.log("Test");
      onSearch();
    }
  };
  return (
    <div className="w-2/5 mb-4 relative">
      {fields &&
        fields.map((field, id) => {
          const inputClassName = `input ${
            errors[field.name] ? "inputError" : ""
          }`;
          return (
            <div key={`field-${id}`}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
                {field.isRequired && <span className="text-red-500">*</span>}
              </label>
              <input
                className={`w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${inputClassName}`}
                id={field.id}
                name={field.name}
                value={queries[field.name]}
                placeholder={field.placeholder}
                onChange={onInputChange}
              />
              {errors[field.name] && (
                <div className="text-red-500 text-sm">{errors[field.name]}</div>
              )}
            </div>
          );
        })}

      <div className="flex py-2 space-x-4">
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-800"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
