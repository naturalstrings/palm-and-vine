import { useState, useEffect } from 'react';
import './Filters/Filters.css';
import ArtistRendering from './ArtistRendering';
import ArtistNavbar from './Filters/ArtistNavbar';

export interface Artist {
  id: number;
  first_name: string;
  last_name: string;
  video_link: string | null;
  photo_link: string;
  bio: string;
}

export default function Artists() {
  const [artists, setArtists] = useState<Artist[]>([]);
  
  const [artistsA_J, setArtistsA_J] = useState<Artist[]>([]);
  const [artistsK_Q, setArtistsK_Q] = useState<Artist[]>([]);
  const [artistsR_Z, setArtistsR_Z] = useState<Artist[]>([]);

  useEffect(() => {
    let ignore = false;

    const getArtists = async () => {
      // TODO
      // Here, we fetch the artist data from a database
      try {
        console.log('Fetching data.');
        const response = await fetch('/api/artists');
        const data: Artist[] = (await response.json()) as Artist[];
        // if data, assign it to artists state object
        if (!ignore && data) setArtists(data);

        const filteredA_J = data.filter((artist) => artist.first_name[0].toUpperCase() >= 'A' && artist.first_name[0].toUpperCase() <= 'J');
        const filteredK_Q = data.filter((artist) => artist.first_name[0].toUpperCase() >= 'K' && artist.first_name[0].toUpperCase() <= 'Q');
        const filteredR_Z = data.filter((artist) => artist.first_name[0].toUpperCase() >= 'R' && artist.first_name[0].toUpperCase() <= 'Z');
        
        setArtistsA_J(filteredA_J);
        setArtistsK_Q(filteredK_Q);
        setArtistsR_Z(filteredR_Z);

      } catch (err) {
        console.log(err);
      }
    };

    // can not use async/await inside useEffect
    getArtists()
      .then(() => {
        // console.log('In then block.')
      })
      .catch(() => {
        // console.log('In catch block.')
      });

    // cleanup function
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
          <ArtistRendering artistsA_J={artistsA_J} artistsK_Q={artistsK_Q} artistsR_Z={artistsR_Z} />
          
    </>
  );
}
