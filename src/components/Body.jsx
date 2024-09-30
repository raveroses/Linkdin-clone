import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Body() {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate(); // Get the navigate function here

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/dashboard"); // Navigate to dashboard after sign-in
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="mother-flex">
      <div className="first-content">
        <h2>Welcome to your professional community</h2>
        <div className="first-radius" onClick={handleGoogleSignIn}>
          <div className="p-content">
            <p>
              <b>Continue as Odekunle Waris</b>
            </p>
            <p>odekunlewaris@gmail.com</p>
          </div>
          <div className="google-image">
            <img src="./images/google.svg" alt="search" />
          </div>
        </div>
        <div className="second-radius">Sign in with email</div>
        <div className="small-content">
          <p>
            By clicking Continue to join or sign in, you agree to LinkedIn’s
            <span> User Agreement, Privacy Policy, </span>and{" "}
            <span>Cookie Policy</span>.
          </p>
        </div>
        <div className="link-content">
          New to Diamond? <span> Join now</span>
        </div>
      </div>

      <div className="second-content">
        <img src="/images/geek-hero.svg" alt="geek" />
      </div>
    </div>
  );
}
