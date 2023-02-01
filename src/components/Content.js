import React from "react";
import { useNavigate } from "react-router-dom";
// import { isAuthenticated } from "../components/PrivateRoutes";

function Content() {
  const navigate = useNavigate();
  return (
    <>
      {/* <h1>LEVITATE</h1> */}
      {/* Sign up and login section */}
      <section>
        <div className="ui placeholder brown segment">
          <div className="ui stackable center aligned two column brown grid">
            <div className="ui vertical divider">OR</div>
            <div className="middle aligned row">
              <>
                <div class="column">
                  <div class="ui icon header">
                    <i aria-hidden="true" class="search icon"></i>Search your
                    projects
                  </div>
                  <div class="ui search">
                    <div class="ui icon input">
                      <input
                        type="text"
                        autoComplete="off"
                        value=""
                        placeholder="Search projects..."
                        tabindex="0"
                        class="prompt"
                      />
                      <i aria-hidden="true" class="brown search icon"></i>
                    </div>
                  </div>
                </div>
              </>

              <div class="column">
                <div class="ui icon header">
                  <i aria-hidden="true" class="world icon"></i>Add New Project
                </div>
                <button
                  class="ui brown button"
                  onClick={() => {
                    navigate("/create");
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About us and conect with friends section */}
      <section>
        <div className="ui segment">
          <div className="ui very relaxed two column grid">
            <div className="column">
              <p>
                Our mission at Levitate is to enable you to breath life into the
                art your create with us.
                <br />
                We seek to be your source of inspiration, motivation and
                reference. Our app can be as private as your own personal
                thoughts, <br />
                or as loud and as popular as your art commands.
              </p>
            </div>
            <div className="column">
              <h4>Connect with friends</h4>
              <div role="list" className="ui list">
                <div role="listitem" className="item">
                  <img
                    src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                    className="ui avatar image"
                  />
                  <div className="content">
                    <a className="header">Rachel</a>
                    <div className="description">
                      Last upload{" "}
                      <a>
                        <b>6 Hours</b>
                      </a>{" "}
                      ago.
                    </div>
                  </div>
                </div>
                <div role="listitem" className="item">
                  <img
                    src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                    className="ui avatar image"
                  />
                  <div className="content">
                    <a className="header">Lindsay</a>
                    <div className="description">
                      Last upload{" "}
                      <a>
                        <b>2 days</b>
                      </a>{" "}
                      ago.
                    </div>
                  </div>
                </div>
                <div role="listitem" className="item">
                  <img
                    src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                    className="ui avatar image"
                  />
                  <div className="content">
                    <a className="header">Ali</a>
                    <div className="description">
                      Last upload{" "}
                      <a>
                        <b>12 hours</b>
                      </a>{" "}
                      ago.
                    </div>
                  </div>
                </div>
                <div role="listitem" className="item">
                  <img
                    src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                    className="ui avatar image"
                  />
                  <div className="content">
                    <a className="header">Rodgers</a>
                    <div className="description">
                      Last upload{" "}
                      <a>
                        <b>Yesterday</b>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div role="listitem" className="item">
                  <img
                    src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg"
                    className="ui avatar image"
                  />
                  <div className="content">
                    <a className="header">Mayaka Osinde</a>
                    <div className="description">
                      Last upload{" "}
                      <a>
                        <b>just now.</b>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui vertical divider">And</div>
        </div>
      </section>
      {/* A list of my projects */}
      <section>
        <div role="list" className="ui divided relaxed list">
          {/* <DisplayProjects /> */}
        </div>
      </section>
    </>
  );
}
export default Content;
