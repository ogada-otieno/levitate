import React from "react";

function Content() {
  return (
    <body>
      {/* Search and add section */}
      <section>
        <div class="ui placeholder brown segment">
          <div class="ui stackable center aligned two column brown grid">
            <div class="ui vertical divider">Or</div>
            <div class="middle aligned row">
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
                  <div class="results transition">
                    <div class="message empty">
                      <div class="header">No results found.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="ui icon header">
                  <i aria-hidden="true" class="world icon"></i>Add New Project
                </div>
                <button class="ui brown button">Create</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About us and conect with friends section */}
      <section>
        <div class="ui segment">
          <div class="ui very relaxed two column grid">
            <div class="column">
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
            <div class="column">
              <h4>Connect with friends</h4>
              <div role="list" class="ui list">
                <div role="listitem" class="item">
                  <img
                    src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                    class="ui avatar image"
                  />
                  <div class="content">
                    <a class="header">Rachel</a>
                    <div class="description">
                      Last upload{" "}
                      <a>
                        <b>6 Hours</b>
                      </a>{" "}
                      ago.
                    </div>
                  </div>
                </div>
                <div role="listitem" class="item">
                  <img
                    src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                    class="ui avatar image"
                  />
                  <div class="content">
                    <a class="header">Lindsay</a>
                    <div class="description">
                      Last upload{" "}
                      <a>
                        <b>2 days</b>
                      </a>{" "}
                      ago.
                    </div>
                  </div>
                </div>
                <div role="listitem" class="item">
                  <img
                    src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                    class="ui avatar image"
                  />
                  <div class="content">
                    <a class="header">Ali</a>
                    <div class="description">
                      Last upload{" "}
                      <a>
                        <b>12 hours</b>
                      </a>{" "}
                      ago.
                    </div>
                  </div>
                </div>
                <div role="listitem" class="item">
                  <img
                    src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                    class="ui avatar image"
                  />
                  <div class="content">
                    <a class="header">Rodgers</a>
                    <div class="description">
                      Last upload{" "}
                      <a>
                        <b>Yesterday</b>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div role="listitem" class="item">
                  <img
                    src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg"
                    class="ui avatar image"
                  />
                  <div class="content">
                    <a class="header">Mayaka Osinde</a>
                    <div class="description">
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
          <div class="ui vertical divider">And</div>
        </div>
      </section>
      {/* A list of my projects */}
      <section>
        <div role="list" class="ui divided relaxed list">
          <h4>Recent Projects & Quick Actions</h4> 
          <div role="listitem" class="item">
            <i
              aria-hidden="true"
              class="folder open outline large icon middle aligned"
            ></i>
            <div class="content">
              <a class="header">Semantic-Org/Semantic-UI</a>
              <span>
                <div>
                  <div class="ui right floated buttons">
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align left icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align center icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align right icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align justify icon"></i>
                    </button>
                  </div>{" "}
                  <div class="ui right floated buttons">
                    <button class="ui icon button">
                      <i aria-hidden="true" class="bold icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="underline icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="text width icon"></i>
                    </button>
                  </div>
                </div>
              </span>
              <a class="description">Updated 10 mins ago</a>
            </div>
          </div>
          <div role="listitem" class="item">
            <i
              aria-hidden="true"
              class="folder open outline large icon middle aligned"
            ></i>
            <div class="content">
              <a class="header">Semantic-Org/Semantic-UI-Docs</a>
              <span>
                <div>
                  <div class="ui right floated buttons">
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align left icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align center icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align right icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align justify icon"></i>
                    </button>
                  </div>{" "}
                  <div class="ui right floated buttons">
                    <button class="ui icon button">
                      <i aria-hidden="true" class="bold icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="underline icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="text width icon"></i>
                    </button>
                  </div>
                </div>
              </span>
              <a class="description">Updated 22 mins ago</a>
            </div>
          </div>
          <div role="listitem" class="item">
            <i
              aria-hidden="true"
              class="folder open outline large icon middle aligned"
            ></i>
            <div class="content">
              <a class="header">Semantic-Org/Semantic-UI-Meteor</a>
              <span>
                <div>
                  <div class="ui right floated buttons">
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align left icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align center icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align right icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="align justify icon"></i>
                    </button>
                  </div>{" "}
                  <div class="ui right floated buttons">
                    <button class="ui icon button">
                      <i aria-hidden="true" class="bold icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="underline icon"></i>
                    </button>
                    <button class="ui icon button">
                      <i aria-hidden="true" class="text width icon"></i>
                    </button>
                  </div>
                </div>
              </span>
              <a class="description">Updated 34 mins ago</a>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}
export default Content;
