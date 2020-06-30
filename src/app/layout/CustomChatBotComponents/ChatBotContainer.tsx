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
  const [messageId, setMessageId] = useState(1);
  const [chatContents, setChatContents] = useState<IChatContent[]>([]);
  const [currentResponse, setCurrentResponse] = useState<IChatResponse>({
    text: "",
    token: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setMessage(data.value);
  };

  const submit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | any
  ) => {
    event.preventDefault();
    if (message === "") return;

    addMessage(false, message);
    var chatResponse = await agent.Chat.chat(
      ChatPostData(message, currentResponse.token)
    );
    setCurrentResponse(chatResponse);
    //setMessage("");
    debugger;
    var count = messageId + 1;
    var contents: IChatContent[] = [
      {
        id: count,
        isBot: false,
        message: message,
      },
      {
        id: count = count + 1,
        isBot: true,
        message: chatResponse.text,
      },
    ];
    setMessageId(count);
    addMultiMessage(contents);
    setMessage("");
    //addMessage(true, chatResponse.text);
  };

  const ChatPostData = (message: string, token: string) => {
    var chatPostData: IChatResponse = { text: message, token: token };
    return chatPostData;
  };

  const addMessage = (isBot: boolean, message: string) => {
    var chatContent: IChatContent = {
      id: messageId,
      isBot: isBot,
      message: message,
    };
    var count = messageId + 1;
    setMessageId(count);
    setChatContents([...chatContents, chatContent]);

    // var newArray = chatContents.slice();
    // newArray.push({
    //   id: messageId,
    //   isBot: isBot,
    //   message: message,
    // });
    // setChatContents([...chatContents, ...newArray]);
  };

  const addMultiMessage = (contents: IChatContent[]) => {
    setChatContents([...chatContents, ...contents]);
  };

  useEffect(() => {
    steps();
  }, [currentResponse]);

  const steps = async () => {
    var loginResponse = await agent.Chat.login(ChatData.LoginTokenId);
    setCurrentResponse(loginResponse);
    addMessage(true, loginResponse.text);
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
          <Input
            name="message"
            value={message}
            onChange={handleInputChange}
            //onKeyDown={submit}
            type="text"
            fluid
          >
            <input />
            <Button
              onClick={(event) => submit(event)}
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
