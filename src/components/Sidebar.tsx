export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="booking">
        <h2>Booking</h2>
        <p>
        For rates and booking sessions at Palm & Vine Recorders please contact 
                us at <br/>203-213-7332 or fill out the form bellow. We recommend a phone 
                conversation to discuss an individualized approach to your projects needs.
        </p>
        
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
      <form action="/api/subscribe" method="post" className="signup">
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
