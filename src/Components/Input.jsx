import style from "./Input.module.css";

function Input({ dispatch, value, text, type, name, id, placeholder }) {
  return (
    <div className={style.input}>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => dispatch({ type: name, payload: e.target.value })}
        id={id}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
