import React from "react";
import { Feed } from "semantic-ui-react";
import { BotData } from "./BotData";
import "../../layout/styles.css";

export const Content = () => {
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label>
          <img src={BotData.botAvatar} />
        </Feed.Label>
        <Feed.Content className="bot-content">
          {/* <Feed.Summary>
            <Feed.User>AI Bot </Feed.User>
            <Feed.Date>1 Hour Ago</Feed.Date>
          </Feed.Summary> */}
          <Feed.Extra text style={{ color: "white" }}>
            Ours is a life of constant reruns. We're always circling back to
            where we'd we started, then starting all over again. Even if we
            don't run extra laps that day, we surely will come back for more of
            the same another day soon.
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Content className="user-content">
          <Feed.Extra text style={{ color: "white" }}>
            Ours is a life of constant reruns. We're always circling back to
            where we'd we started, then starting all over again. Even if we
            don't run extra laps that day, we surely will come back for more of
            the same another day soon.
          </Feed.Extra>
        </Feed.Content>
        <Feed.Label>
          <img src="/logo192.png" />
        </Feed.Label>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label>
          <img src={BotData.botAvatar} />
        </Feed.Label>
        <Feed.Content className="bot-content">
          <Feed.Extra text style={{ color: "white" }}>
            Ours is a life of constant reruns. We're always circling back to
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event className="user-content">
        <Feed.Content className="user-content">
          <Feed.Extra text style={{ color: "white" }}>
            Ours is a life of constant reruns. We're always circling back to
            where we'd we started, then starting all over again. Even if we
            don't run extra laps that day, we surely will come back for more of
            the same another day soon.
          </Feed.Extra>
        </Feed.Content>
        <Feed.Label>
          <img src="/logo192.png" />
        </Feed.Label>
      </Feed.Event>
    </Feed>
  );
};
