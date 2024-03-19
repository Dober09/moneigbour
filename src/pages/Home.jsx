import NewsPage from './NewsPage';
import UserCard from '../components/UserCard';
import Card from "../components/Card"
import { newsData } from '../data/newsData';
import { useState } from 'react';
import { userdata } from '../data/userData';
import bell from "../assets/icons8-bell.png"
import { Link,Outlet } from 'react-router-dom';

const Home = () => {
    const [detail,setDetail] = useState(null)

    const handleClick = (id)=>{   
        const newData =newsData.filter((item)=>item.id == id)
        setDetail(()=>newData)
    
    }
    
    return (
        <div className='mt-20'>
            {detail?
            <NewsPage  data={detail} setDetail ={setDetail}/>
            :
            <>
            <p className='text-center font-semibold capitalize text-amber-500 text-md'>Taskies in Your area</p>
            <div className="mt-8 ml-3 flex justify-between ">
               {
                userdata.map(item=>(
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
            { newsData.map((item)=>(
            <Card 
              id={item.id}
              key={item.id}
              image={item.image}
              imageName={item.imageName}
              tag={item.tag}
              title={item.title}
              author={item.author}
              date={item.date}
              desc={item.desc}
              handleClick = {handleClick}
            />
            ))} 
            <Link to={"/events"}>

            <div className='fixed bottom-3 right-3 bg-slate-50 rounded-md overflow-hidden shadow-md shadow-black'>
                <p className='bg-amber-500 font-bold text-2xl text-slate-50 w-6 text-center rounded-full absolute right-0'>0</p>
                <img src={bell} alt="bell" className='w-16' />
            </div>
            </Link>
            </>

            }
        </div>
    );
}

export default Home;
