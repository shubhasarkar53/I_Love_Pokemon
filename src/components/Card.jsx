
import React, { useEffect, useState } from "react";

function Card({ props }) {
  const [typePic, setTypePic] = useState([]);
  const typeImageUrl = [];
  props.types.forEach((element) => {
    typeImageUrl.push(element.type.url);
  });

  // console.log(typeImageUrl);


 

  useEffect(() => {
    
    async function fetchTypePic(typePicUrlArr) {
      try {
        const promiseArr = typePicUrlArr.map((url)=>{
          return fetch(url).then((data)=>data.json());
        })
        // console.log(promiseArr);

        const finalData = await Promise.all(promiseArr).then((val)=>val.map((item)=>{
          return item.sprites["generation-viii"]["brilliant-diamond-and-shining-pearl"].name_icon
        }));
        setTypePic(finalData)
        
      } catch (error) {
        console.log(error)
      }
    }

    fetchTypePic(typeImageUrl);
  }, []);

 
  return (
    <div className=" w-[300px] border-2  bg-gray-200 p-6 rounded-2xl cursor-pointer hover:scale-105 transition-all ease-in duration-150 hover:shadow-sm">
      <div className=" flex flex-col gap-1">
        <h1 className="text-4xl font-semibold capitalize">{props.name}</h1>
        <div className="w-full">
          <div>
            <img
              className="drop-shadow-lg "
              src={props.sprites.other.home.front_default}
              alt=""
            />
          </div>

          <div className="flex flex-wrap  items-start gap-2 w-full my-4   ">
            {
            typePic.map((type,index) => {
              return (
                <div key={index} className="w-[30%] rounded-sm overflow-hidden">
                  <img
                    className="object-cover object-center"
                    src={type}
                    alt="TYPE"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <p className="font-medium text-lg">{props.weight} kg.</p>
      </div>
    </div>
  );
}

export default Card;
