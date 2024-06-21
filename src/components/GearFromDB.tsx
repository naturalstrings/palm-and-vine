//import { response } from 'express';
import { useState, useEffect } from 'react';



export default function GearFromDB() {
  interface Gear {
    gear_id: number;
    name: string;
    
  }
  const [gearList, setGear] = useState<Gear[]>([]);

  useEffect(() => {
    const getGear = async () => {
    try{const response = await fetch('/api/gear');
    console.log('**** Fetched Response:', response); 
    //const data = await response.json();
    const data: Gear[] = (await response.json()) as Gear[];
    console.log(data)
    setGear(data);
    }
    catch (err) {
        console.log('Text:',err)
    };
    // return gearList;
    };
    
    
    getGear();
   
    },[]
   
  );
  return (
    <>
      {gearList.map((item) => (
        <div key={item.gear_id}>
         
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
}
