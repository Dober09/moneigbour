import React from 'react';

const OrganizationPage = () => {
    return (
        <div className="mt-10">
            <div className="h-40 py-16 w-80 text-center  rounded-md bg-stone-50 mt-10">
                <h1 className="text-3xl font-extrabold text-amber-500">Organization</h1>
            </div>
            <div className='my-4 grid grid-cols-2 gap-1 place- place-items-center text-center uppercase'>
                <div className='bg-orange-600 h-36 '>
                    <p>Goverment Institution</p>
                </div>
                <div>
                    <p>schools</p>
                </div>
                <div>
                    <p>churches</p>
                </div>
                <div className='bg-orange-600 h-36 w-full'>
                    <p>NGO's</p>
                </div>

            </div>
       
        </div>
    );
}

export default OrganizationPage;
