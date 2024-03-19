import lebo from "../assets/lebo.jpg"

const BuzCard = () => {
    return (
        <div className='mt-4 flex w-3/4 h-22  rounded-md overflow-hidden shadow-sm shadow-stone-800'>
              
        <img src={lebo} alt="lebo" width={90} height={90} className="object-contain"/>
      
        <div className="flex flex-col justify-between items-center">
            <p className="text-md ml-2">Tuckshop </p>
            <p>no. 20525</p>
            <p className="text-sm text-cente p-1 text-stone-50 rounded-md bg-amber-500 ml-12 ">@Manyonyong</p>
        </div>
    </div>
    );
}

export default BuzCard;
