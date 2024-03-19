import voidImage from "../assets/void.png"
const EventPage = () => {
    return (
        <div className="mt-10">
           <div className="h-40 py-16  text-center w-80  rounded-md bg-stone-50 mt-10">
                <h1 className="text-3xl font-extrabold text-amber-500">Events/Activities</h1>
            </div>  
            <div className="flex bg-amber-500 font-medium text-stone-50 text-sm capitalize justify-between px-4 py-2">
                <p>event</p>
                <p>place</p>
                <p>Time</p>
                <p>date</p>
            </div>
            {/* <div className="flex">
                <p>pensdown</p>

            </div> */}
            <div className="">
                <img src={voidImage} alt="void image" />
                <p className="text-center font-bold">No events at the moment</p>
            </div>
            
        </div>
    );
}

export default EventPage;
