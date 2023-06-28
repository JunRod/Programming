export const Image = ({ data: { name, image } }) => {

  return (
    <div className="card" >
      <img src={image} alt={name} className="card-img-top"/>
      <h1 className="card-title">{name}</h1>
    </div>
  );
};
