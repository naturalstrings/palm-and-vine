import { useState, useEffect} from 'react';
import engineerpic1 from "/engineerpic1.png";
import engineerpic2 from "/engineerpic2.png";
import engineerpic3 from "/engineerpic3.png";

export default function EngineerFromDB() {

    interface Engineer {
    engineer_id: number,
    name: string,
    engineer_bio:string,
}
let ignore = false
const [engineerList, setEngineer] = useState<Engineer[]>([]);
const engineerPics = [engineerpic1,engineerpic2,engineerpic3];

useEffect ( () => {
 
const getEngineer = async ():Promise<Engineer[] | undefined> => {
 
    try{
    const response = await fetch( 'api/engineer_bios');
    console.log('*****Fetched response:', response);
    const data: Engineer[] = (await response.json()) as Engineer[];
    console.log('Engineer[]:', data)
    return data
} catch (err){
    console.log('Unable to fetch data:', err)
} 

};
getEngineer()
.then( (data) => {
    if (!ignore && data) {
        setEngineer(data);
        console.log('getEngineer() completed.')
    }
}) .catch ((err) => {
    console.log('getEngineer() did not complete:', err)
})
//cleanup
return () => {
    ignore = true;
};


},[]); //useEffect end

return (
    <div>
            {engineerList.map((item,index) => (
            <div key={ item.engineer_id } className='engineer-item'>
               
                    <h2>{item.name}<hr/></h2>
                    <img src={engineerPics[index % engineerPics.length]} alt={item.name + 'Engineer Pic'}></img>
                    <p>{item.engineer_bio}</p>
               
            </div>
            ))}
    </div>
 );
}