import React, { useState, useEffect } from "react";
import "./styles.css";
import { IStep } from "../../app/models/ChatBotModel";
import SimpleForm from "../../features/SampleSteps/SimpleForm";
import { Button, Icon, Grid } from "semantic-ui-react";
import Chat from "../../features/Chat/Chat";

import agent from "../../app/api/agent";
import { ChatData } from "../../app/stores/Data";
import Axios from "axios";

const App = (props: any) => {
  let [showChat, setShowChat] = useState(false);
  let [steps, setSteps] = useState({});

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  useEffect(() => {
    Steps().then((resp) => {
      setSteps(resp);
    });
  }, []);

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
              <div> {showChat ? <Chat steps={steps}></Chat> : null} </div>
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

const Steps = async () => {
  var loginResponse = JSON.parse(ChatData.TempLoginData); //await agent.Chat.login(ChatData.LoginTokenId);
  var chatResponse = JSON.parse(ChatData.ChatResponse); //await agent.Chat.login(ChatData.LoginTokenId);
  var stepCount: number = 1;
  var steps: IStep[] = [
    { id: stepCount++, message: loginResponse.text, trigger: stepCount },
    { id: stepCount++, user: true, trigger: stepCount },
    { id: stepCount++, message: chatResponse.text, trigger: stepCount },
    { id: stepCount++, user: true, trigger: stepCount },
    { id: stepCount++, message: "last message", end: true },
  ];

  return steps;
};

const LoadingSteps: IStep[] = [{ id: 1, message: "Loading...", end: true }];
