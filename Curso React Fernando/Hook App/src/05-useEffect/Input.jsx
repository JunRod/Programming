export const Input = ({ funcion, name, value }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder={name}
      name={name}
      value={value}
      onChange={funcion}
    />
  );
};
