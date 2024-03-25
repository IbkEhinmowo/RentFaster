export default function Video() {
  return (
    <div>
      <video autoPlay loop muted playsInline>
        <source src="src/assets/special.mp4" type="video/mp4" />
      </video>
      <button id="playbutton">Book now</button>
    </div>
  );
}
