import React, {useState, useEffect} from 'react';

export const Fetchapi = () => {

    const [data, setData] = useState();

    const url = "https://jsonplaceholder.typicode.com/users";

    async function fetchData (){
        try{
            

            const res = await fetch(url);
            const result = await res.json();
            setData(result)

        }
        catch(err){

            console.log("error", err)

        }
    }
    


    useEffect( () => {

        fetchData()

    }, [url]);

    return (

        <>

        <h1>Api Call Method</h1>

        {
            data?.map((item, index) => (
            <ul  key={index}> 
                {/* <li>{item.id}</li> */}
                <li>{item.name}</li>
                {console.log(item.name)}
            </ul>
            
           
            ))
        }

       
        
        </>

        



    )
}