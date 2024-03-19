


const NewsPage = ({data,setDetail}) => {
   
    return (
        <div >
        <div onClick={()=>setDetail(null) }
         className="bg-amber-400 w-14 fixed text-center text-stone-50">
            <p>back</p>
        </div>
            {data.map(item=>(
                <div className="flex flex-col " key={item.id}>
                    <img src={item.image} alt={item.imageName} />
                    <div className="flex justify-around capitalize mt-7">
                        <div>
                            <p>author : <span>{item.author}</span> </p>
                        </div>
                        <div>
                            <p>date : <span>{item.date}</span></p>
                        </div>
                    </div>
                    <h3 className="my-2 text-center text-xl font-semibold">{item.title}</h3>
                    <p className="px-6">{item.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default NewsPage;
