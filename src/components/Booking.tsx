import bookingpic from "/bookingpic.png"

export default function Booking() {
    return (
      <>
        <div className="booking-wrap">
          <h1>Booking</h1>
          <hr></hr>
          <div className="booking-main">
                <img src={bookingpic} alt="recording studio"></img>
                
                <h2>Booking</h2>
                
                <p>
                
                For rates and booking sessions at Palm & Vine Recorders please contact 
                us at 203-213-7332 or fill out the form bellow We recommend a phone 
                conversation to discuss an individualized approach to your projects needs.
                </p>
          </div>
        </div>
      </>
    );
  }
  