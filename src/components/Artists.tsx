// import { useState, useEffect } from 'react';
// import data from '../artists.json';
import ArtistsFilter from './Filters/ArtistsFilter';
import './Filters/Filters.css';
declare type StringList = string[];



export default function Artists() {

  
  // interface Artist {
  //   id: number;
  //   name: string;
  //   image: string;
  //   bio: string;
  //   contentTitle: string;
  //   content: string;
  // }
  // const [artists, setArtists] = useState<Artist[]>([]);
  
  // useEffect(() => {
  //   const getArtists = () => {
  //     // TODO
  //     // Here, we would fetch the artist data from a database

  //     // console.log(data.artists);

  //     return data.artists;
  //   };
  //  }    
  // );
  return (
    <>
      
      <ArtistsFilter />
      
    </>
  )
  };