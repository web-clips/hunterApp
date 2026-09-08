import "./SelectField.css";

export const SelectField = ({
  id,
  name,
  label,
  value,
  onChange,
  options,
  className = "",
}) => {
  return (
    <div className={`form-field ${className}`.trim()}>
      <label
        className="form-field__label"
        htmlFor={id}
      >
        {label}
      </label>

      <select
        className="form-field__control form-field__select"
        id={id}
        name={name || id}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};