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
      {artists.map((artist) => (
        <div  key={artist.id}>
          <h1 className="posts-titles">
            {artist.name}
          </h1>
          <hr
            style={{
              border: '1px solid black',
              backgroundColor: '#D3D3D3',
              height: 1,
              margin: 20,
              
            }}
          />

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
          <hr
            style={{
              border: '1px solid black',
              backgroundColor: '#D3D3D3',
              height: 1,
              margin: 20
              
            }}
          />
          <h2
            className="posts-titles"
            
          >
            {artist.contentTitle}
          </h2>
          <img
            
            src={`/${artist.content}.png`}
            width="700"
            height="400"
            alt="streamingSongs"
          />
          <hr
            style={{
              border: '1px solid black',
              backgroundColor: '#D3D3D3',
              height: 1,
              margin: 20
              
            }}
          />
        </div>
      ))}
    </>
  );
}
