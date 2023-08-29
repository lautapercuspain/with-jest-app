const Card = (props) => {
    return (
      <div className="card">
        {props.imageUrl && <img src={props.imageUrl} alt={props.title} />}
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    );
  };
  
export default Card;
