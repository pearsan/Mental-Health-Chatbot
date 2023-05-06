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

const Chatbox = ({ props }) => {
  const [messages, setMessages] = React.useState(() => {
    if (props) {
      return [
        {
          message: props,
          sender: "user",
          direction: "outgoing",
        },
      ];
    } else
      return [
        {
          message: "Hello, how are you?",
          sender: "Chatbot",
        },
      ];
  });

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
      className="absolute h-5/6 w-full md:py-7 sm:py-3 md:px-72 sm:px-28 px-14 py-3"
      // style={{
      //   position: "relative",
      //   height: "500px",
      //   width: "100%",
      //   padding: "50px 300px",
      // }}
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
        className="rounded-full sm:mt-3 shadow-md bg-white  mt-3"
      ></MessageInput>
    </div>
  );
};

export default Chatbox;
