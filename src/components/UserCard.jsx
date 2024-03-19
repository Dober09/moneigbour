import React from 'react';
import lebohang from "../assets/lelehut022.jpg"


const UserCard = ({image,imageName,title,tag}) => {
    return (
        <div className='mx-3 shadow-stone-200 shadow-sm bg-opacity-90   min-w-32 w-32 flex flex-col justify-center items-center capitalize rounded-md'>
            <p>{tag}</p>
            <img src={image} alt="lebo" className='w-16  h-16 rounded-full object-cover'/>
            <p>{title}</p>
        </div>
    );
}

export default UserCard;
