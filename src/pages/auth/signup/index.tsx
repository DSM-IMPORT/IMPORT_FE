import styled from "styled-components";
import { Colors } from "../../../styles/theme/color";
import { Fonts } from "../../../styles/theme/font";
import { Weights } from "../../../styles/theme/weight";
import Alert from "../../../assets/icons/Alert";

function Signup_Index(){
  return (
    <Layout>
      <RightLayout>
        <Logo/>
      </RightLayout>
      <LeftLayout>
        <Title>Sign Up</Title>
        <SubTitle>회원가입</SubTitle>
        <InputLayout>
          <InputWrapper>
            <InputName>전화번호</InputName>
            <Input placeholder="번화번호를 입력해 주세요"/>
          </InputWrapper>
          <InputWrapper>
            <AuthInputWrapper>
              <InputName>인증번호</InputName>
              <AuthText>3:00</AuthText>
            </AuthInputWrapper>
            <Input placeholder="인증번호를 입력해 주세요"/>
          </InputWrapper>
        </InputLayout>
        <UnderLayout>
          <AuthButton>계속</AuthButton>
          <UnderBottomLayout>
            <div>회원이신가요? </div>
            <SignupText>로그인</SignupText>
          </UnderBottomLayout>
        </UnderLayout>
      </LeftLayout>
    </Layout>
  )
}

function Logo(){
  return (
    <svg width="154" height="175" viewBox="0 0 154 175" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.33594 145.719H0.914062V174H8.33594V145.719ZM12.1641 145.719V174H19.4297V157.242H19.6641L26.0703 173.805H30.5234L36.9688 157.359H37.2031V174H44.4688V145.719H35.2109L28.4922 162.164H28.1406L21.4219 145.719H12.1641ZM48.2969 174H55.7188V165.484H60.0938C66.5391 165.504 70.7969 161.695 70.7969 155.641C70.7969 149.684 66.6562 145.719 60.3281 145.719H48.2969V174ZM55.7188 159.703V151.656H58.6094C61.4023 151.676 63.043 153.18 63.0234 155.641C63.043 158.121 61.4023 159.684 58.6094 159.703H55.7188ZM100.914 159.859C100.914 150.445 94.8789 145.328 87.2422 145.328C79.5273 145.328 73.5508 150.445 73.5312 159.859C73.5508 169.215 79.5273 174.391 87.2422 174.391C94.8789 174.391 100.914 169.273 100.914 159.859ZM81.1875 159.859C81.1875 154.645 83.3359 151.812 87.2422 151.812C91.1094 151.812 93.2773 154.645 93.2578 159.859C93.2773 165.055 91.1094 167.887 87.2422 167.906C83.3359 167.887 81.1875 165.055 81.1875 159.859ZM104.547 174H111.969V164.586H114.879L119.898 174H127.984L122.203 163.395C125.25 161.949 127.047 159.195 127.047 155.289C127.047 149.312 122.906 145.719 116.578 145.719H104.547V174ZM111.969 158.766V151.656H114.859C117.652 151.676 119.293 152.789 119.273 155.289C119.293 157.75 117.652 158.766 114.859 158.766H111.969ZM129.586 151.734H138.102V174H145.445V151.734H153.961V145.719H129.586V151.734Z" fill="#0F75F8"/>
      <path d="M82.5015 54.3109C79.3373 48.3043 81.6394 40.8659 87.6435 37.6968L89.4604 36.7378C95.4644 33.5687 102.897 35.869 106.061 41.8756L123.271 74.545C126.435 80.5516 124.133 87.99 118.129 91.159L116.312 92.1181C110.308 95.2871 102.876 92.9869 99.7115 86.9803L82.5015 54.3109Z" fill="#0F75F8"/>
      <path d="M44.0706 54.4543C40.9064 48.4477 43.2085 41.0094 49.2126 37.8403L51.0295 36.8813C57.0335 33.7122 64.4658 36.0124 67.63 42.019L84.84 74.6885C88.0042 80.6951 85.7021 88.1334 79.6981 91.3025L77.8812 92.2615C71.8772 95.4306 64.4449 93.1303 61.2806 87.1238L44.0706 54.4543Z" fill="#0F75F8"/>
      <path d="M44.4878 84.4638C44.4878 90.1269 39.9015 94.7177 34.2439 94.7177C28.5864 94.7177 24 90.1269 24 84.4638C24 78.8007 28.5864 74.2098 34.2439 74.2098C39.9015 74.2098 44.4878 78.8007 44.4878 84.4638Z" fill="#0F75F8"/>
    </svg>
  )
}
export default Signup_Index;

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;
const RightLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58.4vw;
`
const LeftLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10.41vw;
  background-color: ${Colors.gray50};
  width: 41.6vw;
`
const AuthInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const AuthText = styled.p`
  color: ${Colors.blue500};
  font-weight: 600;
  font-size: 16px;
`
const Title = styled.div`
  font-size: ${Fonts["40"]}px;
  font-weight: ${Weights.black};
`
const SubTitle = styled.div`
  font-size: ${Fonts["24"]}px;
  font-weight: ${Weights.regular};
`
const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 80px;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const InputName = styled.div`
  font-size: ${Fonts["16"]};
  font-weight: ${Weights.semiBold};
  `
const Input = styled.input`
  width: 20.83vw;
  height: 50px;
  background-color: white;
  padding-left: 20px;
  border-radius: 8px;
  
  &::placeholder {
    color: ${Colors.gray400};
  }
`
const UnderLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 13.8vh;
`
const AuthButton = styled.button`
  width: 20.83vw;
  height: 48px;
  color: white;
  background-color: ${Colors.blue500};
  border-radius: 8px;
`
const UnderBottomLayout = styled.div`
  display: flex;
  width: 20.83vw;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 19px;
`
const SignupText = styled.div`
  font-size: ${Fonts["16"]};
  font-weight: ${Weights.regular};
  color: ${Colors.blue500};
`