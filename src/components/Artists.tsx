import { useState, useEffect } from 'react';
import data from '../artists.json';

export default function Artists() {
  interface Artist {
    id: number;
    name: string;
    image: string;
    bio: string;
    contentTitle: string;
    content: string;
  }
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const getArtists = () => {
      // TODO
      // Here, we would fetch the artist data from a database

      // console.log(data.artists);

      return data.artists;
    };

    const currArtists = getArtists();
    // console.log(currArtists);
    setArtists(currArtists);
  }, []);

  return (
    <>
      <h1>Artists</h1>
      {artists.map((artist) => (
        <div  key={artist.id}>
          <h2>
            {artist.name}
          </h2>
          <hr/>

        <div>
            <img
              style={{ float: 'left', marginRight: 20 }}
              src={`/${artist.image}.png`}
              height="300"
              alt="Andrew Carriere Pic">
            </img>
            <p
              style={{
                textAlign: 'justify',
                
              }}
            >
              {artist.bio}
            </p>
        </div>
          <hr/>
          <h2>
            {artist.contentTitle}
          </h2>
          <img
            
            src={`/${artist.content}.png`}
            width="700"
            height="400"
            alt="streamingSongs"
          />
          <hr/>
        </div>
      ))}
    </>
  );
}
