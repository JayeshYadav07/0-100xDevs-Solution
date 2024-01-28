/* eslint-disable react/prop-types */
import "./App.css";

function App() {
  let details = {
    name: "Jayesh",
    description: "Hello, my self jayesh",
    interest: ["cricket", "games", "coding"],
    socialMedia: ["LinkedIn", "Github"],
  };
  return (
    <>
      <Card {...details} />
    </>
  );
}

export default App;

// Card Component
function Card({ name, description, interest, socialMedia }) {
  const socialMediaBtn = socialMedia.map((socialMediaName, index) => {
    return <Button key={index} socialMediaName={socialMediaName} />;
  });
  return (
    <div className="card">
      <Info detail={name} />
      <Info detail={description} />
      <List interest={interest} />
      {socialMediaBtn}
    </div>
  );
}

// Button Component
function Button({ socialMediaName }) {
  return (
    <>
      <button>{socialMediaName}</button>
    </>
  );
}

// Info Component
function Info({ detail }) {
  return (
    <>
      <p>{detail}</p>
    </>
  );
}

// List Component
function List({ interest }) {
  let interestList = interest.map((interestName, index) => {
    return <li key={index}>{interestName}</li>;
  });
  return (
    <>
      <ol>{interestList}</ol>
    </>
  );
}
