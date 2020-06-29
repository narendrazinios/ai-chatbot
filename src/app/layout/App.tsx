import React, { useState, useEffect } from "react";
import "./styles.css";
import { IStep } from "../../app/models/ChatBotModel";
import { Button, Icon, Grid } from "semantic-ui-react";
import Chat from "../../features/Chat/Chat";
import agent from "../../app/api/agent";
import { ChatData } from "../../app/stores/Data";
import { IChatResponse } from "../models/ChatModels";

const App = () => {
  //const { message, setMessage } = useContext(ChatContext);
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

  let currentResponse: IChatResponse;
  let isExit = false;
  var stepCount: number = 1;

  const Steps = async () => {
    var loginResponse = await agent.Chat.login(ChatData.LoginTokenId); //JSON.parse(ChatData.TempLoginData);
    //var loginResponse = JSON.parse(await DemoSleepData()); //await agent.Chat.login(ChatData.LoginTokenId);
    var chatResponse = (currentResponse = await agent.Chat.chat(
      ChatPostData(loginResponse.text, loginResponse.token)
    ));

    var steps: IStep[] = [
      { id: stepCount++, message: loginResponse.text, trigger: stepCount }, //1
      { id: stepCount++, user: true, trigger: stepCount }, //2
      { id: stepCount++, message: currentResponse.text, trigger: stepCount }, //3
      {
        //4
        id: stepCount++,
        user: true,
        trigger: stepCount,
        validator: validator,
      },

      { id: "lastMessage", message: "last message", end: true },
    ];

    debugger;
    for (let index = 0; index < 50; index++) {
      steps.push(
        { id: stepCount++, message: chatResponse.text, trigger: stepCount },
        {
          id: stepCount++,
          user: true,
          trigger: index == 49 ? "lastMessage" : stepCount,
          validator: validator,
        }
      );
    }

    return steps;
  };

  const validator = (value: string) => {
    debugger;
    agent.Chat.chat(ChatPostData(value, currentResponse.token)).then((resp) => {
      debugger;
      currentResponse = resp;
    });
    return true;
  };

  const ChatPostData = (message: string, token: string) => {
    var chatPostData: IChatResponse = { text: message, token: token };
    return chatPostData;
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

// const LoadingSteps: IStep[] = [{ id: 1, message: "Loading...", end: true }];

export const View: React.FC<{ message: string }> = ({ message }) => {
  return <div style={{ width: "100%" }}>{message}</div>;
};
