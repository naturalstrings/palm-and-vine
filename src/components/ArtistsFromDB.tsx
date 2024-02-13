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

export default function Artists() {
  const [artists, setArtists] = useState<Artist[]>([]);

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
      <h1>Artists</h1>
      {artists.map(({ id, first_name, last_name, photo_link, bio }) => (
        <div key={id}>
          <hr />
          <h2>
            {first_name} {last_name}
          </h2>
          <hr />
          <div>
            <img
              style={{ float: 'left', marginRight: 20 }}
              src={photo_link}
              height="300"
              alt={`${first_name} ${last_name} Pic`}
            ></img>
            <p style={{ textAlign: 'justify' }}>{bio}</p>
          </div>
        </div>
      ))}
    </>
  );
}
