//Import some styling to div container
import "./App.css";
//Import User profiles from assets profile.jsx
import Profile from "./assets/profile.jsx";
//Import a specific component from assets profile.jsx

//Displays the profile file from assets folder
export default function UserProfile() {
  return (
    <>
      <div id="container">
        {/*Displays a profile image and gives size styling*/}
        <Profile
          size={100}
          person={{
            name: "man",
            imageId:
              "photo-1692975006834-945cc3190219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
          }}
        />
      </div>
    </>
  );
}
