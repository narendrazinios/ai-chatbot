import React, { useState, useEffect } from "react";
import { Grid, Input, Button, InputOnChangeData } from "semantic-ui-react";
import "../../layout/styles.css";
import SubmitIcon from "../../../icons/SubmitIcon";
import { Content } from "./Content";
import { IChatContent } from "../../models/CustomChatBotModels";
import agent from "../../api/agent";
import { ChatData } from "../../stores/Data";
import { IChatResponse } from "../../models/ChatModels";

interface IProps {
  Header?: string;
}

const ChatBotContainer: React.FC<IProps> = ({ Header }) => {
  // const defaultValue: IChatContent[] = [
  //   { isBot: true, message: "BotMessage" },
  //   { isBot: false, message: "UserMessage" },
  // ];

  const [message, setMessage] = useState("");
  const [chatContents, setChatContents] = useState<IChatContent[]>([]);
  const [activities, setActivities] = useState<IChatContent[]>([]);
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setMessage(data.value);
  };

  const submit = () => {};
  const ChatPostData = (message: string, token: string) => {
    var chatPostData: IChatResponse = { text: message, token: token };
    return chatPostData;
  };

  var currentResponse: IChatResponse;

  useEffect(() => {
    debugger;
    steps();
  }, []);

  const steps = async () => {
    debugger;
    var loginResponse = await agent.Chat.login(ChatData.LoginTokenId); //JSON.parse(ChatData.TempLoginData);
    //var loginResponse = JSON.parse(await DemoSleepData()); //await agent.Chat.login(ChatData.LoginTokenId);
    var chatResponse = (currentResponse = await agent.Chat.chat(
      ChatPostData(loginResponse.text, loginResponse.token)
    ));

    var chatContent: IChatContent = {
      isBot: true,
      message: loginResponse.text,
    };
    setChatContents([...chatContents, chatContent]);
  };

  return (
    <Grid>
      <Grid.Row verticalAlign="top">
        <Grid.Column className="bot-header" textAlign="center">
          <h3>{Header ?? "AI Bot"}</h3>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row
        style={{ overflow: "auto", maxHeight: 400 }}
        verticalAlign="middle"
      >
        <Grid.Column className="main-content-holder">
          <Content chatContents={chatContents}></Content>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row verticalAlign="bottom">
        <Grid.Column>
          <Input name="message" onChange={handleInputChange} type="text" fluid>
            <input />
            <Button
              onClick={() => submit()}
              icon={SubmitIcon}
              style={{ background: "transparent" }}
            ></Button>
          </Input>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ChatBotContainer;

export const defaultTheme = {
  background: "#f5f8fb",
  fontFamily: "monospace",
  headerBgColor: "#6e48aa",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#6E48AA",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};
