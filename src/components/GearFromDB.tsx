//import { response } from 'express';
import { useState, useEffect } from 'react';



export default function GearFromDB() {
  interface Gear {
    gear_id: number;
    name: string;
    
  }
  const [gearItem, setGear] = useState<Gear[]>([]);

  useEffect(() => {
    const getGear = () => {
    
    
      console.log(gearItem);

      return gearItem;
    };
   }
  );
  return (
    <>
      {gearItem.map((item) => (
        <div key={item.gear_id}>
         
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
}
