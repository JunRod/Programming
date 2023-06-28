export const Input = ({ funcion, value, name }) => {
  return (
    <input
      type={name}
      placeholder={0}
      name={name}
      value={value}
      onChange={funcion}
    />
  );
};
