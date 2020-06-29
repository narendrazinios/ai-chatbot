import React, { useState } from "react";
import "./styles.css";

import SimpleForm from "../../features/SimpleForm";
import { Button, Icon, Grid } from "semantic-ui-react";

const App = (props: any) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <Grid>
        <Grid.Row className="header" verticalAlign="top">
          <Grid.Column textAlign="center">
            <h2>AI Bot!!!</h2>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row verticalAlign="middle">
          <Grid.Column textAlign="center">
            <h3>Chat Bot </h3>
            {/* <p>
              Sample content to fill the gap as much as possible. Sample content
              to fill the gap as much as possible. Sample content to fill the
              gap as much as possible.Sample content to fill the gap as much as
              possible.
            </p>
            <p>
              More content to fill the available area of the main contect. More
              content to fill the available area of the main contect. More
              content to fill the available area of the main contect.More
              content to fill the available area of the main contect.{" "}
            </p> */}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row verticalAlign="bottom">
          <Grid.Column>
            <div className="bot">
              <div> {showChat ? <SimpleForm></SimpleForm> : null} </div>
              <div>
                {!showChat ? (
                  <Button size="massive" onClick={() => startChat()}>
                    <Icon name="chat" /> click to chat...
                  </Button>
                ) : (
                  <Button size="massive" onClick={() => hideChat()}>
                    <Icon name="chat" /> click to hide...
                  </Button>
                )}
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default App;
