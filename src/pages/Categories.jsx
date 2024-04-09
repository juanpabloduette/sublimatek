import { useState , useEffect } from "react";

const Categories = () => {
    
    const [data, setData] = useState(null);
  
    useEffect( () => {
        fetch('../../src/api/api.json')
        .then(response => response.json())
        .then((data)=> setData(data))
        .catch((error) => console.log("error", error))
    },[]);
    return (
        <div className="flex justify-center flex-col">
            {data?.map( (product,index) => (
                // {console.log(product)}
                <div key={index}>
                    <img src={product.img} alt={product.title} className="w-40"/>
                    <div><p>{product.title}</p></div>
                    <div><p>{product.id}</p></div>
                </div>
            ))}
        </div>
    )
}

export default Categories