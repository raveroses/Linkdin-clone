export default function Dropdown() {
  return (
    <div className="dropdown-mother">
      <div className="profile-flex">
        <div className="profile-images">
          <img src="./images/waris.JPG" alt="" />
        </div>
        <div className="username">
          <p>Odekunle Waris</p>
        </div>
      </div>
      <div className="viewprofile">View Profile</div>
      <hr
        style={{
          backgroundColor: "lightgray",
          width: "100%",
          marginTop: "5px",
        }}
      />

      <div className="accounts">
        <h3>Account</h3>
        <a href="/">Try Premium for free</a>
        <a href="/">Settings</a>
        <a href="/">Help</a>
        <a href="/">Language</a>
      </div>
      <hr />
      <div className="accounts">
        <h3> Manage</h3>
        <a href="/">Posts & Activity</a>
        <a href="/">Job Posting Account</a>
      </div>
      <hr />
      <div className="sign-out">
        <a href="/">Sign Out</a>
      </div>
    </div>
  );
}
