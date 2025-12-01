import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineAddAPhoto } from "react-icons/md";
import {
  AddPhoto,
  Icon,
  IconProfile,
  InputStyle,
  InputWrapper,
  Label,
} from "./BodyProfile.styled";

const BodyProfile = ({}) => {
  return (
    <div>
      <Avatar />

      <InputWrapper>
        <Label>First name</Label>
        <InputStyle
          type="text"
          placeholder="John"
          //   value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Last name</Label>
        <InputStyle
          type="text"
          placeholder="Dorian"
          //   value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Email</Label>
        <InputStyle
          type="email"
          placeholder="example@gmail.com"
          //   value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputWrapper>
    </div>
  );
};

export default BodyProfile;

export const Avatar = () => {
  return (
    <IconProfile>
      {/* <Circle /> */}
      <Icon>
        <IoPersonOutline />
      </Icon>

      <AddPhoto>
        <MdOutlineAddAPhoto />
      </AddPhoto>
    </IconProfile>
  );
};
