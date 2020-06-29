import React from "react";
import { Feed, Icon } from "semantic-ui-react";

export const Content = () => {
  return (
    <Feed>
      <Feed.Event className="bot-content">
        <Feed.Label>
          <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User> added you as a friend
            {/* <Feed.Date>1 Hour Ago</Feed.Date> */}
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
};
