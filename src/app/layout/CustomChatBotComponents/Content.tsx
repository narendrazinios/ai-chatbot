import React from "react";
import { Feed } from "semantic-ui-react";
import { BotData } from "./BotData";
import "../../layout/styles.css";

import { IChatContent } from "../../models/CustomChatBotModels";

interface IProps {
  chatContents: IChatContent[];
}

export const Content: React.FC<IProps> = ({ chatContents }) => {
  const botContent = (chatContent: IChatContent) => (
    <Feed.Event key={chatContent.id}>
      <Feed.Label>
        <img src={BotData.botAvatar} />
      </Feed.Label>
      <Feed.Content className="bot-content">
        {/* <Feed.Summary>
    <Feed.User>AI Bot </Feed.User>
    <Feed.Date>1 Hour Ago</Feed.Date>
  </Feed.Summary> */}
        <Feed.Extra text style={{ color: "white" }}>
          {chatContent.message}
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  );

  const userContent = (chatContent: IChatContent) => (
    <Feed.Event key={chatContent.id}>
      <Feed.Content className="user-content">
        <Feed.Extra text style={{ color: "white" }}>
          {chatContent.message}
        </Feed.Extra>
      </Feed.Content>
      <Feed.Label>
        <img src="/logo192.png" />
      </Feed.Label>
    </Feed.Event>
  );

  return (
    <Feed>
      {chatContents.map((content) =>
        content.isBot ? botContent(content) : userContent(content)
      )}
    </Feed>
  );
};
