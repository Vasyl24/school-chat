"use client";

import { useEffect, useRef } from "react";
import {
  ArrowBack,
  ButtonCancel,
  ButtonDelete,
  CreateButtonStyle,
  CreateChatContainer,
  CreateChatContent,
  CreateChatFooter,
  CreateChatHeader,
  InputStyle,
  InputWrapper,
  Label,
} from "./CreateChat.styled";
import { IoIosArrowBack } from "react-icons/io";

export function CreateChat({ onCancel, onConfirm }) {
  const deleteRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (deleteRef.current && !deleteRef.current.contains(e.target)) {
        onCancel();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onCancel]);

  return (
    <>
      <CreateChatContainer>
        <CreateChatContent ref={deleteRef}>
          <div>
            <CreateChatHeader>
              <ArrowBack onClick={onCancel}>
                <IoIosArrowBack />
              </ArrowBack>
              <div>Create chat</div>
            </CreateChatHeader>
            <InputWrapper>
              <Label>Name</Label>
              <InputStyle
                type="text"
                placeholder="# Name your chat"
                //   value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
          </div>

          <CreateChatFooter>
            <CreateButton />
          </CreateChatFooter>
        </CreateChatContent>
      </CreateChatContainer>
    </>
  );
}

const CreateButton = ({}) => {
  return <CreateButtonStyle>Create</CreateButtonStyle>;
};

export default CreateButton;
