import BuzCard from "../components/BuzCard";
const BussinesPage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="h-40 py-16 w-80 text-center  rounded-md bg-stone-50 mt-10">
                <h1 className="text-4xl font-extrabold text-amber-500">Business</h1>
            </div>
            <p></p>
            <BuzCard/>
            <BuzCard/>
            <BuzCard/>
            <BuzCard/>
        </div>
        
    );
}

export default BussinesPage;
