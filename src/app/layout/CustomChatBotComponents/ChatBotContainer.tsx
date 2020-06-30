import React from "react";
import { Grid, Container } from "semantic-ui-react";
import "../../layout/styles.css";

interface IProps {
  Header?: string;
}

const ChatBotContainer: React.FC<IProps> = ({ Header, children }) => {
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
        <Grid.Column className="main-content-holder">{children}</Grid.Column>
      </Grid.Row>
      <Grid.Row verticalAlign="bottom">
        <Grid.Column></Grid.Column>
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
