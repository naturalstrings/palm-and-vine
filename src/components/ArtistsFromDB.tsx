import { useState, useEffect } from 'react';
import './Filters/Filters.css';

export interface Artist {
  id: number;
  first_name: string;
  last_name: string;
  video_link: string | null;
  photo_link: string;
  bio: string;
  
}
export default function Filter() {
  const [artists, setArtists] = useState<Artist[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState('');
  const [artistsA_J, setArtistsA_J] = useState<Artist[]>([]);
  const [artistsK_Q, setArtistsK_Q] = useState<Artist[]>([]);
  const [artistsR_Z, setArtistsR_Z] = useState<Artist[]>([]);
  const [selectedArtistElements, setSelectedArtistElements] = useState<JSX.Element[]>([]);

  
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

      const handleCategoryClick = (category: string) => {
        if (!artistsA_J.length && !artistsK_Q.length && !artistsR_Z.length) {
        return;
        }
          const artistsToDisplay = {
          A_J: artistsA_J,
          K_Q: artistsK_Q,
          R_Z: artistsR_Z,
        }[category];
        
       
        const artistElements = artistsToDisplay.map((artist) => (
          <span key={artist.id}>{artist.first_name} </span>
         
        )
        );
      
        setSelectedArtistElements(artistElements);
       
      
   };

  

  return (
    <div className="filter-menu">
       {artists.length > 0 ? (
        <>
      <button
        className="filter-menu-item"
        onClick={() => handleCategoryClick('A-J')}
      >
        A-J
      </button>
      <button
        className="filter-menu-item"
        onClick={() => handleCategoryClick('K-Q')}
      >
        K-Q
      </button>
      <button
        className="filter-menu-item"
        onClick={() => handleCategoryClick('R-Z')}
      >
        R-Z
      </button>
      
      
      {selectedCategory && (
      <div className="artist-list">
        {selectedArtistElements}
      </div>
    )}
    </>
            
    ) : (
      <p>loading...</p>
  )}

      
    </div>
  
  );
};



