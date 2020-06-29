import React from "react";
import { Grid } from "semantic-ui-react";
import ChatBotContainer from "./CustomChatBotComponents/ChatBotContainer";
import { Content } from "./CustomChatBotComponents/Content";

export const CustomChatBot = () => {
  return (
    <div>
      <ChatBotContainer>
        <Content></Content>
      </ChatBotContainer>
    </div>
  );
};
