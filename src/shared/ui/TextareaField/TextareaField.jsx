import "./TextareaField.css";

export const TextareaField = ({
    id,
    label,
    name,
    value,
    onChange,
    placeholder,

}) => {
    return (
        <div className={`form-field`}>
            <label
                className="form-field__label"
                htmlFor={id}
            >
                {label}
            </label>

            <textarea
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            >

            </textarea>
        </div>
    );
};