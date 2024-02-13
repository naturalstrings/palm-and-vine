import { useState, useEffect } from 'react';
import ArtistDisplay from './Filters/ArtistsDisplay';
import './Filters/Filters.css';

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

  const getArtists = async () => {
    // TODO
    // Here, we would fetch the artist data from a database
    try {
      console.log('Fetching data.');
      const response = await fetch('/api/artists');
      const data: Artist[] = (await response.json()) as Artist[];
      // console.log(data);
      setArtists(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArtists()
      .then(() => {
        // console.log('In then block.')
      })
      .catch(() => {
        // console.log('In catch block.')
      });
  }, []);

  return <ArtistDisplay allArtists={artists} />;
}
