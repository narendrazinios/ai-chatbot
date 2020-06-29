import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ReviewModel } from "../../app/models/ChatBotModel";
import models from "../../app/models/SampleModels";

class SimpleForm extends Component {
  state: ReviewModel = { age: "", gender: "", name: "" };
  render() {
    return <ChatBot userAvatar="/logo192.png" steps={models.DemoSteps} />;
  }
}

export default SimpleForm;
