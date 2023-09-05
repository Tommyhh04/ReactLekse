//Simple profile picture to be exported to APP.jsx

//Profile picture
function Profile() {
  return (
    <div>
      <img
        className="Avatar"
        src="https://images.unsplash.com/photo-1692975006834-945cc3190219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        alt="man on a boat"
        height={300}
        width={400}
      />
      {/*AI generated text to be placed under the profile picture*/}
      <p>
        “Meet John, a seasoned sailor with a passion for the open sea. He spends
        his days navigating the waters on his trusty boat, exploring new
        horizons and discovering hidden treasures.
      </p>
    </div>
  );
}

//Displays Profile. Displays the same profile 2 times
export default function App() {
  return (
    <>
      <Profile />
      <Profile />
    </>
  );
}
