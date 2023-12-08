import livestreampost1 from '/livestreampost1.png';
import livestreampost2 from '/livestreampost2.png';
import livestreampost3 from '/livestreampost3.png';
import streamingSongs from '/streamingSongs.png';
import lessonspost1 from '/lessonspost1.png';
import lessonspost2 from '/lessonspost2.png';

export default function Posts() {
  return (
    <div>
      <h2
        className="posts-titles"
        style={{ textAlign: 'left', marginLeft: 275 }}
      >
        FEATURED HEIRLOOM CONTENT- Andrew Carriere <br />& Annie Staninec
      </h2>
      <hr style={{ marginBottom: 20, width: 275 }} />
      <p className="posts-subtitles">
        LIMITED TIME FREE CONTENT / SATURDAY, MARCH 28TH, 2020
      </p>
      <img src={streamingSongs} width="700" height="400" alt="streamingSongs" />

      <h1 className="posts-titles">LIVESTREAMS</h1>
      <h2 className="posts-titles">
        Mitch Polzak- Banjo Bonanza from The Polzak Ponderosa
      </h2>
      <hr style={{ marginBottom: 20, width: 275 }} />
      <img
        src={livestreampost1}
        width="700"
        height="400"
        alt="streamingSongs"
      />
      <p
        className="posts-subtitles"
        style={{ textAlign: 'left', marginLeft: 275 }}
      >
        LIVE STREAMS, MITCH <br />
        7:00-8:00pm Tuesday the 14th
        <br />
        Event Link here: https://www.facebook.com/events/1118555148523698/
        <br />
        April 14, 2020
      </p>

      <h2 className="posts-titles">Cedric Watson Live Streams</h2>
      <hr style={{ marginBottom: 20, width: 275 }} />
      <img
        src={livestreampost2}
        width="700"
        height="400"
        alt="streamingSongs"
      />
      <p
        className="posts-subtitles"
        style={{ textAlign: 'left', marginLeft: 275 }}
      >
        LIVE STREAMS, CEDRIC <br />
        Cedric Watson is streaming most days. Here are some highlights…. Please
        tip him these ways!
        <br />
        PayPal: cedricwatson83@gmail.com
        <br />
        Cash app:$cedricwatson83
        <br />
        Venmo:Cedric-Watson-5
        <br />
        Zelle:Cedricwatson83@gmail.com
        <br />
        April 14, 2020
      </p>

      <h2 className="posts-titles">Wilson Savoy Daily Solo Accordion Stream</h2>
      <hr style={{ marginBottom: 20, width: 275 }} />
      <img
        src={livestreampost3}
        width="700"
        height="400"
        alt="streamingSongs"
      />
      <p
        className="posts-subtitles"
        style={{ textAlign: 'left', marginLeft: 275 }}
      >
        LIVE STREAMS, WILSON <br />
        Roll on over to the Pine Leaf Boy Facebook page
        https://www.facebook.com/pineleafboys <br />
        Wilson Savoy is doing something amazingly musical almost everyday!
        <br />
        April 14, 2020
      </p>
      <h1 className="posts-titles">LESSONS</h1>
      <h2 className="posts-titles">
        Cascada De Flores Kids and Family Music Lessons
      </h2>
      <hr style={{ marginBottom: 20, width: 275 }} />
      <img src={lessonspost1} width="700" height="400" alt="streamingSongs" />
      <p
        className="posts-subtitles"
        style={{ textAlign: 'left', marginLeft: 275 }}
      >
        LESSONS <br />
        On the Cascada de Flores Facebook page!
        <br />
        https://www.facebook.com/cascadadeflores/
        <br />
        Join us for Music classes this week! Tuesday and Thursday morning 10am
        PST and 10:30am PST. Pay what you can, come even if you can’t pay!
        <br />
        Come to virtual music classes! Tuesday and Thursday mornings 10 a.m. PST
        and 10:30 a.m. PST. Pay what you can, come even if you can’t pay!
        <br />
        April 13, 2020
      </p>

      <h2 className="posts-titles">Guy in a Music Shop</h2>
      <hr style={{ marginBottom: 20, width: 275 }} />
      <img src={lessonspost2} width="700" height="250" alt="streamingSongs" />
      <p
        className="posts-subtitles"
        style={{ textAlign: 'left', marginLeft: 275 }}
      >
        COME BUY INSTRUMENTS <br />
        On the Music Shop Facebook page!
        <br />
        https://www.heirloomrecordinglabel.com/
        <br />
        Join us for Music classes this week! Tuesday and Thursday morning 10am
        PST and 10:30am PST. Pay what you can, come even if you can’t pay!
        <br />
        Come to virtual music classes! Tuesday and Thursday mornings 10 a.m. PST
        and 10:30 a.m. PST. Pay what you can, come even if you can’t pay!
        <br />
        April 12, 2020
      </p>
    </div>
  );
}
