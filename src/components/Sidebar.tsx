export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="booking">
        <h2>Booking</h2>
        <p>
          For rates and booking sessions at Palm & Vine Recorders, please
          contact us at <br />
          203-213-7332 or fill out the form below. We recommend a phone
          conversation to discuss an individualized approach to your
          project&apos;s needs.
        </p>
        <hr></hr>
        <form action="" method="post">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              required
            />
          </div>
          <div>
            <label htmlFor="description">
              Brief Description of Your Project
            </label>
            <textarea
              rows={6}
              cols={35}
              name="description"
              id="description"
              required
            />
          </div>
          <p>
            <span>*</span>All fields required.
          </p>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
