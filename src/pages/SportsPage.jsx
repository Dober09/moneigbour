

const SportsPage = () => {
    return (
        <div className=" flex flex-col items-center">
            
             <div className="h-40 py-16 w-80 text-center  rounded-md bg-stone-50 mt-10">
                <h1 className="text-3xl font-extrabold text-amber-500">Sport</h1>
            </div>
            
        
            <h1 className="text-xl mt-3 font-semibold">Football</h1>
            <div className="mt-5">
                <table className="border w-72 text-left">
                    <thead className="border">
                        <tr>
                            <th>Team</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td>Makgapa</td>
                            <td>10</td>
                        </tr>
                        <tr className="bg-amber-300 text-stone-50">
                            <td>Figthers</td>
                            <td>7</td>
                        </tr>
                        <tr className="border">
                            <td>Bakwena fC</td>
                            <td>5</td>
                        </tr>
                        <tr className="bg-amber-300 text-stone-50">
                            <td>sandsloot united</td>
                            <td>4</td>
                        </tr>
                        <tr className="border">
                            <td>Mokopane divided</td>
                            <td>3</td>
                        </tr>
                        <tr className="bg-amber-300 text-stone-50">
                            <td>Figthers</td>
                            <td>1</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
            <h1 className="text-xl mt-3 font-semibold">Fixture</h1>
            <div className="">

            </div>
        </div>
    );
}

export default SportsPage;
