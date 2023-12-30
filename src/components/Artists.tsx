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
        <div style={{ marginBottom: 700 }} key={artist.id}>
          <h1
            className="posts-titles"
            style={{ marginRight: 1000, fontSize: 40 }}
          >
            {artist.name}
          </h1>
          <hr
            style={{
              border: '1px solid black',
              backgroundColor: '#D3D3D3',
              height: 1,
              margin: 20,
              marginRight: 500,
            }}
          />

          <div>
            <img
              style={{ float: 'left', marginLeft: 50, marginRight: 20 }}
              src={`/${artist.image}.png`}
              height="300"
              alt="Andrew Carriere Pic"
            ></img>
            <p
              style={{
                textAlign: 'justify',
                marginRight: 500,
                marginBottom: 40,
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
              margin: 20,
              marginRight: 500,
            }}
          />
          <h2
            className="posts-titles"
            style={{ textAlign: 'left', marginRight: 500 }}
          >
            {artist.contentTitle}
          </h2>
          <img
            style={{ marginRight: 500 }}
            src={artist.content}
            width="700"
            height="400"
            alt="streamingSongs"
          />
          <hr
            style={{
              border: '1px solid black',
              backgroundColor: '#D3D3D3',
              height: 1,
              margin: 20,
              marginRight: 500,
            }}
          />
        </div>
      ))}
    </>
  );
}
