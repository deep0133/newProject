import PropTypes from "prop-types";

function Input({
  type,
  name,
  onChange,
  value,
  required,
  placeholder,
  className,
  checked,
}) {
  const inputProps = {
    type,
    name,
    onChange,
    className,
    placeholder,
    ...(type === ("radioField" || "checkBox")
      ? { checked }
      : { value, required }),
  };

  return <input {...inputProps} />;
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  value: "",
  required: false,
  checked: false,
};

export default Input;
