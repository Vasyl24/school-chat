import { useState } from "react";
import { ChatMainContainerStyle } from "./Chat.styled";
import ChatContainer from "./components/ChatContainer";
import ContactsContainer from "./components/ContactsContainer";
import EmptyChatContainer from "./components/EmptyChatContainer";
import ProfileModal from "./components/ProfileModal";

const Chat = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <>
      <ChatMainContainerStyle>
        <ContactsContainer onOpenProfile={() => setIsProfileOpen(true)} />
        {/* <EmptyChatContainer /> */}
        <ChatContainer />
        <ProfileModal
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
        />
      </ChatMainContainerStyle>
    </>
  );
};

export default Chat;
