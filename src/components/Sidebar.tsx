export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <p className="covid">
          Heirloom 2020 Covid-19 <br />
          Relief Project! <br />
          <br />
          <p />
          <p className="covid-blurb" />
          As a response to the unprecedented crisis facing local musicians, this
          site aims to raise money for artists while sharing memorable events
          with a community separated by the necessity of social distancing .{' '}
          <br />
          <br />
          THE ARTISTS CONTRIBUTING TO THIS PROJECT CONSENT TO THE USE OF
          INDIVIDUAL LIVE RECORDINGS SHARED HERE, AND ARE NOT REPRESENTED OR
          CONTRACTED IN ANY CAPACITY BY HEIRLOOM RECORDS OUTSIDE THE SCOPE OF
          THIS PROJECT. <br />
          <br /> All the profits of this project are split evenly amongst the
          contributing artists. More info about official releases outside the
          immediate effort for this crisis will be made available as time goes
          forward.
        </p>
        <p />
      </div>

      <section className="message">
        <h1>Contact Us</h1>
        <p className="post-subtitles" style={{ marginTop: 20 }}>
          For general questions & inquiries <br />
          please email: <br />
          <a href="#" id="emailaddress">
            heirloomrecordlabel@gmail.com
          </a>
        </p>
        <p className="post-subtitles" style={{ marginTop: 20 }}>
          {' '}
          for ongoing updates…{' '}
        </p>
      </section>
      <form action="/api/form" method="post" className="signup">
        <h2>Subscribe to Mailing List</h2>
        <div className="post-subtitles">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            autoComplete="given-name"
            required
          />
        </div>
        <div className="post-subtitles">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            autoComplete="family-name"
            required
          />
        </div>
        <div className="post-subtitles">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
          />
        </div>
        <button
          style={{
            borderRadius: 5,
            backgroundColor: '#D3D3D3',
            marginTop: 20,
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
