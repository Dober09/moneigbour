

const Card = ({id,tag,image,imageName,title,desc,author,date,handleClick}) => {
    return (
        <article 
       
        className="w-72 h-96 mx-auto mt-10 shadow-stone-200 relative rounded-md shadow-sm overflow-hidden">
            <div  className="absolute capitalize bg-amber-500 px-4 right-0 text-center font-extrabold text-stone-50">
                <p>{tag}</p>
            </div>
            <img src={image} alt={imageName} />
            <h3 className="text-center mt-3">{title}</h3>
            <p className="text-center mt-5">
            {desc.slice(0,50)}...
             <span onClick={()=>handleClick(id)} className="underline">read more</span>
            </p>
            <div className="flex justify-around capitalize mt-7">
                <div>
                    <p>author : <span>{author}</span> </p>
                </div>
                <div>
                    <p>date : <span>{date}</span></p>
                </div>
            </div>
        </article>
    );
}

export default Card;
