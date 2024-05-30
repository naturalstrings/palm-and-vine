import palmvinelogo from '/palmvinelogo-no-bg.png';

export default function Main() {
  return (
    <div className="landing">
      <section id="first-view">
        <div className="logo">
          <img src={palmvinelogo} alt="Palm and Vine Recording logo" />
        </div>
        <h1>Palm & Vine Recording</h1>
        
        <p className="subtitle">
          Regional and traditional music recordings worth passing down
        </p>
      </section>
      <section id="walking-tour">
        <h2>Studio Walking Tour</h2>
        <iframe
          src="https://www.youtube-nocookie.com/embed/O88gVlkgG40"
          allowFullScreen
        />
      </section>

      
    </div>
  );
}
