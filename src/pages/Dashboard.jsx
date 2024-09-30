import { useState } from "react";
import Dropdown from "../components/Drop-dow.jsx";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const [drop, setDrop] = useState(false);
  const [modal, setModal] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [textDisplay, setTextDisplay] = useState("");

  const handleClick = () => {
    setModal((prevModal) => !prevModal);
    setOverlay(true);
  };
  const cancelBtn = () => {
    setModal(false);
    setOverlay(false);
  };
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const post = () => {
    setTextDisplay(inputValue);
    setInputValue("");
    cancelBtn();
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    // textHandling();
    post();
  };
  // const textHandling = () => {
  //   setTextDisplay(inputValue);
  // };

  return (
    <div className="dashboard-container">
      <div className="dashboard-mother">
        <div className="container-image-search">
          <div className="logo-images">
            <img src="./images/diamond.jpg" alt="logo" />
          </div>
          <div className="search-bar">
            <div className="search-svg">
              <img src="./images/search-icon.svg" alt="search" />
            </div>
            <div className="search-name">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="icons-container">
          <div className="iconflex">
            <div className="home">
              <img src="./images/nav-home.svg" alt="" />
              <Link to="/dashboard">
                <p>Home</p>
              </Link>
            </div>

            <div className="network">
              <img src="./images/nav-network.svg" alt="" />
              <Link to="/">
                <p>Network</p>
              </Link>
            </div>

            <div className="job">
              <img src="./images/nav-jobs.svg" alt="" />
              <Link to="/">
                <p>Jobs</p>
              </Link>
            </div>

            <div className="messaging">
              <img src="./images/nav-notifications.svg" alt="" />
              <Link to="/">
                <p>Messaging</p>
              </Link>
            </div>

            <div className="notification">
              <img src="./images/nav-notifications.svg" alt="" />
              <Link to="/">
                <p>Notifications</p>
              </Link>
            </div>

            {/* <div
              className="profile-image"
              onClick={() => setDrop({ display: "block" })}
            > */}
            <div
              className="profile-image"
              onClick={() => setDrop(!drop)} // Toggle visibility state
            >
              <img src="./images/waris.JPG" alt="" />
              <div className="dropdown">
                <div className="me-drop">
                  {" "}
                  Me<i className="fa fa-caret-down" aria-hidden="true"></i>
                </div>
                {/* <div className="profile" style={drop}> */}
                <div
                  className="profile"
                  style={{
                    display: drop ? "block" : "none", // Conditional display based on state
                  }}
                >
                  <Dropdown />
                </div>
              </div>
            </div>

            <div
              className="business"
              style={{
                marginLeft: "40px",
                borderLeft: "1px solid lightGray",
                paddingLeft: "20px",
              }}
            >
              <img src="./images/nav-work.svg" alt="" />
              <Link to="/">
                <p>
                  Business
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </p>
              </Link>
            </div>

            <div className="premium">
              <img src="./images/plus-icon.svg" alt="" />
              <Link to="/">
                <p>Try Premium for NGN0</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-second-phase-flex">
        <div className="first-flex">
          <div className="first-section-under-first-flex">
            <div className="color-image">
              <img src="./images/card-bg.svg" alt="" />
            </div>
            <div className="profile-imaging">
              <img src="./images/waris.JPG" alt="" />
              <p className="para">Odekunle Waris</p>
              <p>Nigeria</p>
              <div className="plus-experience">
                <div className="pluss">
                  <img src="./images/plus-icon.svg" alt="" />
                </div>
                <div className="experience">Experience</div>
              </div>
            </div>
          </div>
          <div className="second-section-under-first-flex">
            <p>Achieve your career goals</p>
            <a href="/">Don’t miss: Premium for NGN0</a>
          </div>

          <div className="third-section-under-first-flex">
            <div className="third-sub-flex">
              <p>connection</p>
              <span>15</span>
            </div>
            <a href="/">Grow your network</a>
          </div>
          <div className="fouth-section-under-first-flex">
            <a href="/">
              <img src="./images/item-icon.svg" alt="" /> Saved items Groups
            </a>
            <a href="/">
              <img src="./images/widget-icon.svg" alt="" /> Groups
            </a>
            <a href="/">
              <img src="./images/plus-icon.svg" alt="" /> Events
            </a>
          </div>
        </div>
        <div className="second-flex">
          <div className="first-under-second-flex">
            <img src="./images/waris.JPG" alt="" />
            <h1>Hi Odekunle, are you hiring?</h1>
            <h5>Discover free and easy ways to find a great hire, fast</h5>
            <div className="two-div">
              <div className="first-div">Yes, Im hiring</div>
              <div className="first-div">No, not right now</div>
            </div>
          </div>

          <div className="second-under-second-flex">
            <div className="second-under-second-flex-sub-flex">
              <img src="./images/waris.JPG" alt="" />
              <div className="contents" onClick={handleClick}>
                <p>Start a post, try writing with AI</p>
              </div>
            </div>
            <div className="media-icons">
              <div className="media">
                <i className="fa fa-camera-retro" aria-hidden="true"></i> Media
              </div>
              <div className="event">
                <i className="fa fa-calendar" aria-hidden="true"></i> Event
              </div>
              <div className="write-article">
                <i className="fa fa-pencil" aria-hidden="true"></i>Write article
              </div>
            </div>
          </div>
          <div className="third-under-second-flex">
            <div className="images-flex">
              <div className="image-profile">
                <img src="./images/waris.JPG" alt="" />
              </div>
              <div className="profile-name">
                <h3>Odekunle Waris</h3>
                <p>
                  Software engineer | Helping ambitious Entrepreneurs & Founders
                  build digital solutionsSoftware engineer | Helping ambitious
                  Entrepreneurs & Founders build digital solutions
                </p>
              </div>
            </div>
            <div className="message-place">
              {/* What do I call this? Recently, I was going to go get my cooking
              gas filled, but then, I realized that something had gone wrong
              with it. I tried all I could to get it fixed, but there was
              nothing I could do, even after seeking help from someone around.
              But then it struck me, and subconsciously I said it out loud 'I
              know the gas man would know what to do to get this problem
              solved'. And voila! when I got to him, he really did solve the
              problem in a few minutes. As professionals, it's important that
              our clients or customers have this kind of confidence in us. We
              may craft beautiful posts and attach pretty photos to our posts to
              get clients coming, but the question is, won't they be
              disappointed when they finally do? Prioritizing building ourselves
              and also repeatedly telling ourselves that we must be competent is
              something we must be deliberate about. Many times, even friends I
              have not been in touch with in a really long time reach out to me
              for help and most times they would say 'I know Precious would be
              able to solve this problem' and then they reach out and they truly
              get their problems solved. I am not saying we have to know
              everything in the world, but first having a mindset that
              competence is important to us, is a foundation we must make solid.
              Prioritizing competence helps us to strategize and put systems in
              place to ensure that even if we face a challenge in handling a
              task at certain times, we will do everything possible to not
              disappoint a client. I hope people who work with us get a good
              experience at all times. I'm rooting for us! */}
              {textDisplay}
            </div>

            <div className="received-image">
              <img src="./images/waris.JPG" alt="" />
            </div>
            <div className="like-comment-flex">
              <div className="like-icon">
                {/* <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> */}
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                <span>14</span>
              </div>
              <div className="comment-number">
                4 <span>Comments</span>
              </div>
            </div>
            <hr style={{ margin: "0px 15px" }} />
            <div className="reaction-icons">
              <div className="like">
                <i className="fa fa-thumbs-up" aria-hidden="true"></i> Like
              </div>
              <div className="comment">
                <i className="fa fa-comment" aria-hidden="true"></i> Comment
              </div>
              <div className="repost">
                {" "}
                <i className="fa fa-retweet" aria-hidden="true"></i> Repost
              </div>
              <div className="send">
                <i className="fa fa-paper-plane" aria-hidden="true"></i> Send
              </div>
            </div>
            <div className="comment-area">
              <div className="image">
                <img src="./images/waris.JPG" alt="" />
              </div>
              <div className="comment-input">
                <div className="textarea">
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Add a Comment here"
                  ></textarea>
                </div>
                <div className="emoji">
                  <i className="fas fa-smile smile-icon"></i>
                </div>
                <div className="image-post">
                  <i className="fas fa-camera"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="third-flex">
          <div className="working-div">
            <div className="first-under-third-flex">
              <div className="add-feed">Add to your feed</div>
              <div className="feed-icon">
                <img src="./images/feed-icon.svg" alt="" />
              </div>
            </div>
            <div className="ted-detail">
              <div className="ted-image">
                <img src="./images/ted.jpeg" alt="" />
              </div>
              <div className="ted-name">
                <h5>Ted Conferences</h5>
                <p>Company • Media Production</p>
                <div className="follow">
                  <img src="./images/plus-icon.svg" alt="" />
                  Follow
                </div>
              </div>
            </div>

            {/* <div className="third-flex-image">
            <img src="./images/hiring.png" alt="" />
          </div> */}

            <div className="ted-detail">
              <div className="ted-image">
                <img src="./images/scholarship.jpeg" alt="" />
              </div>
              <div className="ted-name">
                <h5>Scholarship Abroad</h5>
                <p>Company • Education Administration Programs</p>
                <div className="follow">
                  <img src="./images/plus-icon.svg" alt="" />
                  Follow
                </div>
              </div>
            </div>
          </div>
          <div className="hiring-image">
            <img src="./images/hiring.png" alt="" />
          </div>
          <div className="another-div">Try Diamond on Whatsapp </div>
        </div>
      </div>
      <div className="modal" style={{ display: modal ? "block" : "none" }}>
        <div className="pro-flex">
          <div className="profile-images">
            <img src="./images/waris.JPG" alt="" />
          </div>
          <div className="profile-names">
            <h1>
              Odekunle Waris <i className="fas fa-caret-down"></i>
            </h1>
            <p>Post to anyone</p>
          </div>
        </div>
        <div className="post-textarea">
          <form onSubmit={handleSubmission}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputValue}
              placeholder="What do you want to talk about"
            />
          </form>
          {/* hhfhhhffff */}
          <div className="cancel-button" onClick={cancelBtn}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>

        <div className="others-in-modal">
          <div className="emoji-icon">
            <i className="fas fa-smile"></i>
          </div>
          <div className="other-in-modal-flex-cntainer">
            <div className="rewrite">
              <i className="fa fa-star" aria-hidden="true"></i>Re-write with AI
            </div>
            <div className="photo">
              <i className="fa fa-camera" aria-hidden="true"></i>
              <div className="tootip">Add media</div>
            </div>
            <div className="calendar">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <div className="tootip">Create Event</div>
            </div>
            <div className="celebrate">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <div className="tootip">Celebrate an Occasion</div>
            </div>
            <div className="plus">
              <i className="fa fa-plus" aria-hidden="true"></i>
              <div className="tootip">More</div>
            </div>
          </div>
          <div className="post" onClick={post}>
            Post
          </div>
        </div>
      </div>
      <div
        className="overlay"
        style={{ display: overlay ? "block" : "none" }}
      ></div>
    </div>
  );
}
