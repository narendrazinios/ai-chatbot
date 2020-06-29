import { strict } from "assert";

const ChatData = {
  LoginTokenId: "3b2c4393-040a-4677-82fc-a91e8a0a8fdf",
  TempLoginData: `{"token": "{\\"SessionId\\":\\"0d051002-cd8f-4137-9ec5-9feb00df0936\\",\\"UserId\\":null,\\"AgentId\\":\\"3b2c4393-040a-4677-82fc-a91e8a0a8fdf\\",\\"QuestionId\\":null,\\"Ners\\":{}}", "text":"Hello, I am HR Agent Bot, How can I help u?"}`,
  ChatResponse: `{
    "token": "{\"SessionId\":\"0d051002-cd8f-4137-9ec5-9feb00df0936\",\"UserId\":null,\"AgentId\":\"3b2c4393-040a-4677-82fc-a91e8a0a8fdf\",\"QuestionId\":null,\"Ners\":{}}",
    "text": "I am unable to provide the information requsted by you right now, Can I help you with anything else?"
  }`,
};

export { ChatData };
