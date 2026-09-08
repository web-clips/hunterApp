import './FormField.css'

export const FormField = ({
    id,
    name,
    label,
    value,
    onChange,
    type = 'text',
    placeholder,
    className = '',
    required = false,
    ...props
}) => {
    return (
        <div className={`form-field ${className}`.trim()}>
            <label htmlFor={id} className="form-field__label">
                {label}

                {required && (
                    <span className="form-field__required">*</span>)}
            </label>

            <input
                className="form-field__control"
                id={id}
                name={name || id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                {...props}
            />
        </div>
    )
}