import React from "react";
import { Grid } from "semantic-ui-react";

interface IProps {
  Header?: string;
}

const ChatBotContainer: React.FC<IProps> = ({ Header, children }) => {
  return (
    <Grid>
      <Grid.Row verticalAlign="top">
        <Grid.Column textAlign="center">{Header ?? "AI Bot"}</Grid.Column>
      </Grid.Row>

      <Grid.Row verticalAlign="middle">
        <Grid.Column>{children}</Grid.Column>
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
