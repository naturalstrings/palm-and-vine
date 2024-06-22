import { useState, useEffect } from 'react';

export default function GearFromDB() {
  interface Gear {
    gear_id: number;
    name: string;
  }
  const [gearList, setGear] = useState<Gear[]>([]);

  useEffect(() => {
    let ignore = false;
    const getGear = async (): Promise<Gear[] | undefined> => {
      try {
        const response = await fetch('/api/gear');
        console.log('**** Fetched Response:', response);
        const data: Gear[] = (await response.json()) as Gear[];
        console.log('Gear[] data: ', data);
        return data;
      } catch (err) {
        console.log('Error from GearFromDB.tsx, getGear(): ', err);
      }
    };
    // can not use async/await inside useEffect
    getGear()
      .then((data) => {
        // if data, assign it to artists state object
        if (!ignore && data) setGear(data);
        console.log('getGear() completed');
      })
      .catch((err) => {
        console.log('getGear() catch block: ', err);
      });

    // cleanup function
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      {gearList.map((item) => (
        <p key={item.gear_id}>{item.name}</p>
      ))}
    </div>
  );
}
