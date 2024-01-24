
const Card = ({image,title,description}) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <p>{description}</p>            
        </div>
    );
}

export default Card;
