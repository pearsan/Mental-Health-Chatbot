import React from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./Chatbox.scss";
import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypeIndicator,
  MainContainer,
} from "@chatscope/chat-ui-kit-react";

const Chatbox = () => {
  const [messages, setMessages] = React.useState([
    {
      message: "Hello, how are you?",
      sender: "Hello",
    },
  ]);
  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
  };
  return (
    <div
      style={{
        position: "relative",
        height: "500px",
        width: "100%",
        padding: "50px 300px",
      }}
    >
      <MainContainer className="rounded-xl shadow-md">
        <ChatContainer>
          <MessageList className="py-5">
            {messages.map((message, i) => {
              return <Message key={i} model={message} />;
            })}
          </MessageList>
        </ChatContainer>
      </MainContainer>
      <MessageInput
        placeholder="Type your message"
        onSend={handleSend}
        className="rounded-full mt-5 shadow-md bg-white "
      ></MessageInput>
    </div>
  );
};

export default Chatbox;
