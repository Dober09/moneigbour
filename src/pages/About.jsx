import UserCard from "../components/UserCard";
import { adminData } from "../data/userData";
const About = () => {
    return (
        <div className="mt-10 flex flex-col items-center">
        <div className="h-40 py-16 w-80 text-center  rounded-md bg-stone-50 mt-10">
            <h1 className="text-3xl font-extrabold text-amber-500">About Sand-Sloot</h1>
        </div>
            <h2 className="my-4 text-2xl">The Leaders</h2>
        <div className="flex">
        {
                adminData.map(item=>(
                    <UserCard 
                    key={item.id}
                    image={item.image} 
                    title={item.title}
                    imageName={item.imageName}
                    tag={item.tag}
                    />
                ))
               }

        </div>
        <h2 className="my-4 text-xl text-center">Community  General Infomation</h2>
        <ul className="">
            <li>Place-name: SandSoolt Ga-Mabusela</li>
            <li>Nearest Town : Mokopane</li>
            <li>Postal-code : 0600 </li>
            <li>Schools :
                
                    <li>Madikoti-putsa primary School</li>
                    <li>Mpirwabirwa Secondary School</li>
                
            </li>
            <li>

            </li>
        </ul>
            
        </div>
    );
}

export default About;
