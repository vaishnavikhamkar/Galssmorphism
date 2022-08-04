import styled  from "styled-components";
import {FaAlignRight, FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa";
import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";
import Icon from "./components/Icon.jsx";

function App() {
  const FacebookBackground="linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground="linear-gradient(to right,#A12AC4 0%,#ED586C 40%,#F0A852 100%)";
  const TwitterBackground="linear-gradient(to right,#56C1E1 0%,#35A9CE 50%)";
  return (
  <MainContainer>
    <WelcomeText>Welcome</WelcomeText>
    <InputContainer>
      <Input type="text" placeholder="Email"/>
      <Input type="password" placeholder="Password"/>
    </InputContainer>
    <ButtonContainer>
        <Button content="Sign Up"/>
    </ButtonContainer>
    <LoginWith>or Login Wth</LoginWith>
    <HorizontalRule/>
    <IconsContainer>
      <Icon color={FacebookBackground}>
        <FaFacebookF/>
      </Icon>
      <Icon color={InstagramBackground}>
        <FaInstagram/>
      </Icon>
      <Icon color={TwitterBackground}>
        <FaTwitter/>
      </Icon>
    </IconsContainer>
    <ForgotPassword>Forgot Password?</ForgotPassword>
  </MainContainer>
  );
}

const MainContainer=styled.div`
display:flex;
align-items:center;
flex-direction:column;
height:80vh;
width:30vw;
background:rgba(255,255,255,0.15);
box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter:blur(4.5px);
border-radius:10px;
color:#ffffff;
text-transorm:uppercase;
letter-spacing:0.4rem;

@media only screen and (max-width:320px){
  width:80vw;
  height:90vh;
  hr{
    margin-bottom:0.3rem;
  }
  h4{
    font-size:small;
  }
}

@media only screen and (max-width:360px){
  width:60vw;
  height:90vh;
  
  h4{
    font-size:small;
  }


}

@media only screen and (max-width:411px){
  width:80vw;
  height:90vh;
}

@media only screen and (max-width:768px){
  width:80vw;
  height:80vh;
}

@media only screen and (max-width:1024px){
  width:70vw;
  height:50vh;
}

@media only screen and (max-width:1280px){
  width:70vw;
  height:80vh;


}

`;

const WelcomeText=styled.h2`
margin:3rem 0px 2rem 0;
`;

const InputContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center,
justify-content:space-around;

height:20%,
width:100%;

@media only screen and (max-width:1280px){
  width: 43%;
}
`;

const ButtonContainer=styled.div`
margin:1rem 0 2 rem 0;
width:90%;
display:flex;
align-items:center;
justify-content:center;
`;

const LoginWith=styled.h5`
cursor:pointer;
margin-top:21px;
`;

const HorizontalRule=styled.hr`
width:90%;
height:0.3rem;
border-radius:0.8rem;
border:none;
margin:1.5rem 0 1rem 0;
background:linear-gradient(to right,#14163c 0%,#03217b 79%);
backdrop-filter:blur(25px);
`;

const IconsContainer=styled.div`
display:flex;
justify-content:space-evenly;
margin:2rem 0 3rem 0;
width:80%;
`;
const ForgotPassword=styled.h4`
 cursor:pointer;
`;




export default App;
