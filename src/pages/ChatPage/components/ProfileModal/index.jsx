import { IoIosArrowBack } from "react-icons/io";
import {
  ArrowBack,
  ProfileModalButtonBlock,
  ProfileModalContainerStyle,
  ProfileModalHeader,
  ProfileModalTop,
} from "./ProfileModal.styled";
import SaveButtonProfile from "./SaveButton";
import ReturnButtonProfile from "./ReturnButton";
import BodyProfile from "./BodyProfile";

const ProfileModal = ({ isOpen, onClose }) => {
  return (
    <ProfileModalContainerStyle $open={isOpen}>
      <ProfileModalTop>
        <ProfileModalHeader>
          <ArrowBack onClick={onClose}>
            <IoIosArrowBack />
          </ArrowBack>
          <div>Edit profile</div>
        </ProfileModalHeader>

        <BodyProfile />
      </ProfileModalTop>

      <ProfileModalButtonBlock>
        <ReturnButtonProfile onClick={onClose} />
        <SaveButtonProfile />
      </ProfileModalButtonBlock>
    </ProfileModalContainerStyle>
  );
};

export default ProfileModal;
