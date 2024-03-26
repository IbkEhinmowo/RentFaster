export default function Video() {
  return (
    <div>
      <div className="vidtext">
        <h1>Find the Perfect Car for your Next Adventure</h1>
      </div>
      <video autoPlay loop muted playsInline>
        <source src="src/assets/special.mp4" type="video/mp4" />
      </video>
      <button id="playbutton">Book now</button>
    </div>
  );
}
