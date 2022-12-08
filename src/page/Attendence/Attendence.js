import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'

const Attendence = () => {
    const [item, setitem] = useState([])
    console.log(item)
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            // method: 'GET',  
            // withCredentials: true,  
            // crossorigin: true,  
            // mode: 'no-cors', 

            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }

        })
            .then(res => res.json())
            .then(data => setitem(data))
    }, [])
    return (
        <div>
            <div className='mx-4 mt-3'>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-center m-12 '>
                <h1 className='text-4xl text-center w-1/2  bg-cyan-600 text-white py-2'> Attendance Information</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>date</th>
                            <th>employee name</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>

                      

                    </tbody>
                </table>
            </div>
            {
                item.map(items => <tr
                    key={items.id}
                >
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr>)
            }

        </div>
    );
};

export default Attendence;