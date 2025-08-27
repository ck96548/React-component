import React, { useEffect, useState } from "react";
import axios from "axios";

function ListApi() {
  const [prod, setProd] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get("https://dummyjson.com/products");
//         console.log(response)
//         setProd(response.data.products);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchData();
//   }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        
        const res = await response.json()
        console.log(res)
        setProd(response.data.products);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>
        Data showed
        <div>
          {prod?.map((item) => (
            <ul key={item?.id}>
              <li>{item?.brand}</li>
              <li>{item?.category}</li>
            </ul>
          ))}
        </div>
      </h1>
    </div>
  );
}

export default ListApi;
