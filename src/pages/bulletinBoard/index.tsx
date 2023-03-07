import React from 'react'
import { Colors } from '../../styles/theme/color'
import styled from 'styled-components'
import ImportLogo from '../../assets/icons/Import-Logo'
import Alert from '../../assets/icons/Alert'
import { Weights } from '../../styles/theme/weight'
import { Fonts } from '../../styles/theme/font'
import Write from '../../assets/icons/Write'
import Search from '../../assets/icons/Search'
import ArrowLeft from '../../assets/icons/Arrow-Left'
import ArrowRight from '../../assets/icons/Arrow-Right'

const exampleGetApi = [
  { imageUrl: 'https://lh6.googleusercontent.com/W67j0VF81zziQfJfMbogzP-1mDUf3onpDdF747s4JctFgMNXuX-DNt0Rdw9ZKf_P4JjUzqgtjOpuvGM=w1170-h929', name: 'JangJi', title: '오로라 관측 장소 어플리케이션', date: '2023.01.16', tag: ['BackEnd', 'FrontEnd', 'iOS'] },
  { imageUrl: 'https://lh5.googleusercontent.com/Y7CKNYdSeIm3S_uSciH32jrCTZUYDdF0LCxW_p7fAHwhwl6cILCTBhQcsfp8qLBhjUhVLokV9riCIT0=w1170-h929', name: 'JunHa', title: '독서 습관 기르기', date: '2023.01.16', tag: ['BackEnd', 'FrontEnd', 'Design'] },
  { imageUrl: 'https://lh4.googleusercontent.com/v5f5Sgwsz4evZ4lX478GYf0sTlOHgsJZHQM1I6opXr-Mnjh4xaoY5_mEz5OCLaX8MuYFJ7RXaA68v6g=w1170-h929', name: '미스터 홍', title: '클래식 자동차 거래', date: '2023.01.16', tag: ['BackEnd', 'FrontEnd', 'Design', 'Android', 'iOS'] },
  { imageUrl: 'https://lh6.googleusercontent.com/vytZXQYTpxJ4OGGGInpGxxsVi0ZptiKOwOmViYmEDK-skrsPdh0dWHYkiakHPtYBo5ypMgPNcYhLDek=w1170-h929', name: 'SeungWoo', title: '패러글라이딩 어플리케이션', date: '2023.01.16', tag: ['Android', 'iOS', 'BackEnd'] },
  { imageUrl: 'https://lh5.googleusercontent.com/AItqJhebKfoVCgfJnw1gu8U_jDy5aLfWK2DnaZ1zS9d_HX3eh7y5rH7bxF1ztvOc4-jptlnip7jHc1w=w1170-h929', name: 'asdf123', title: '야생 동물 보호', date: '2023.01.16', tag: ['BackEnd', 'FrontEnd', 'Design'] },
  { imageUrl: 'https://lh5.googleusercontent.com/IsO8bb21wVe4_Kka7oF4C5Pt5dhcbIO0x-tpcEGbhzbhsAGRMG4ZjyVJPsqzFFjSBqcGWamYdnSYGpE=w1170-h929', name: 'JunHa', title: '미식축구 스트리밍', date: '2023.01.16', tag: ['BackEnd', 'FrontEnd', 'Design', 'Android', 'iOS'] },
  { imageUrl: 'https://lh4.googleusercontent.com/ypROYzdBuIYpa5kqqK10H31azRwDu3yZnCM7vECLzlfxfnAKaXzfFDtlD98mSHK24iefIRSc83E4mvo=w1920-h929', name: 'SukaBliet', title: '보드카 컬렉션', date: '2023.01.16', tag: ['BackEnd', 'FrontEnd'] },
  { imageUrl: 'https://lh5.googleusercontent.com/kHI7qUjUnr40fiXgP26gIdYHzatV6vImyxRicshqwHizT5Drj5mKlNmFeDoMMyVYmJDFqG8HJXgZn7Q=w1170-h929', name: '임베가희망이다', title: '스마트한 에스컬레이터', date: '2023.01.16', tag: ['BackEnd', 'Embeded'] },
  { imageUrl: 'https://lh3.googleusercontent.com/518lcs5W2Z3prow7AC8MZSZg17-p3BO9M2n4sBkaUetn25TDfRHGlOVNGHVjWeraZrLJ3GcxJZK19Ss=w1170-h929', name: 'tmsla', title: '헤어 스타일 추천', date: '2023.01.16', tag: ['AI', 'FrontEnd', 'BackEnd', 'Design'] },
  { imageUrl: 'https://lh5.googleusercontent.com/SdK83DrRSaIBihJWg1N07zKIteA8pahm_LuykkQ5Us6-GeMKpJjc4CzOgb_BkB7owTWoYDnHNpeuloE=w1170-h929', name: 'Yee', title: '고양이 사진 모음집', date: '2023.01.16', tag: ['BackEnd', 'Android', 'Design'] },
  { imageUrl: 'https://lh4.googleusercontent.com/DZAeTNzJjJP0LEb5IbupctdZJW6CCbmC1PUavrNFaAA9xtUhZldsU0ZCwi87U2vjXGQ7Febi5x6tAKE=w1170-h929', name: '나는자연인이다', title: '캠핑 및 캠프파이어 장소 추천', date: '2023.01.16', tag: ['BackEnd', 'iOS', 'Design'] },
  { imageUrl: 'https://lh5.googleusercontent.com/GjxV9yno7OPIWH2lz8sjWnJlgJEVsZcSG7zqiE1Cg7_5XM1p09iclRjKSO-mgVDLCbV00wcvmGBb6c4=w1170-h929', name: 'RTX', title: '빛에 대해서', date: '2023.01.16', tag: ['FrontEnd', 'Design'] },
  { imageUrl: 'https://lh3.googleusercontent.com/RibcET6znTE-E6lVc5gll2CpnPXgFtNdjCUZVjA9ac_wCJ50lB9PNbPPAoNTAc9DiVHbrLx4X-lG4QA=w1170-h929', name: 'Jhon', title: '좋은 경관이 보이는 캠핑 장소', date: '2023.01.16', tag: ['BackEnd', 'Android'] },
  { imageUrl: 'https://lh6.googleusercontent.com/3EjputuPIJ_GkFOZRFKlAhvgNiON0DWRTnse0LeMVSO_YD5lqCxuXxzEs_oiDtciGs_9M4Yv9pw1JiY=w1170-h929', name: 'Andromeda', title: '은하수 잘보이는 장소', date: '2023.01.15', tag: ['BackEnd', 'Android', 'iOS', 'Design'] },
  { imageUrl: 'https://lh5.googleusercontent.com/VgwJoq7Gdp06Fr_fBVez2FxndTeo1QVUyrsgR9j_8PEN6JL0iB3ZBRjYcyU0ziUvW2osfikRhTn4T4g=w1170-h929', name: 'OldMan', title: '젊은 시절 모습 예측 AI', date: '2023.01.15', tag: ['AI'] },
  { imageUrl: 'https://lh4.googleusercontent.com/2pkjcpPFRzC6yg5DZmQrU8mgAbJz7W0XrW8OCje3knqmjBrbZ_2eYkv9pbqllo3OOx48aje79OrA3Qk=w1170-h929', name: 'BenzOwner', title: '자동차 사전', date: '2023.01.15', tag: ['FrontEnd', 'BackEnd'] }
]

const BulletinBoard: React.FC = () => {
  return (
    <>
      <Header>
        <ImportLogo height='40px' width='40px'/>
        <Menu>
          <TextBtn><Text>홈</Text></TextBtn>
          <TextBtn><Text color={Colors.blue500} weight={Weights.semiBold}>게시판</Text></TextBtn>
          <TextBtn><Text>마이페이지</Text></TextBtn>
          <AlertBtn>
            <Alert/>
          </AlertBtn>
        </Menu>
      </Header>
      <Body>
        <Text size={Fonts['40']} weight={Weights.black} margin='40px 0 6px 0'>프로젝트를<br />함께할 사람들</Text>
        <Text size={Fonts['16']}>다른 사람들과 함께하는 프로젝트를 통해 성장 하고 싶으신가요?<br />여기, 함께 프로젝트를 하고 싶어하는 사람들과 동업해보세요.</Text>
        <Button margin='30px 0'>
          <Write width='16px' height='16px'/>
          <Text>글쓰기</Text>
        </Button>
        <InputDiv>
          <Input placeholder='어떤 프로젝트를 찾고 계신가요?'/>
          <Button padding='0' margin='0 0 0 20px' backColor='none'>
            <Search height='16px' width='16px'/>
          </Button>
        </InputDiv>
        <Content>
          {exampleGetApi.map((info, index) => {
            return (
              <Post key={index}>
                <Image src={info.imageUrl}/>
                <Text size={Fonts['12']} margin='20px 0 6px 0'>{info.name}</Text>
                <Text size={Fonts['16']} weight={Weights.semiBold}>{info.title}</Text>
                <Text size={Fonts['12']} color={Colors.gray400} margin='0 0 20px 0'>{info.date}</Text>
                <Tag>
                  {info.tag.map((tag, index) => {
                    return (
                      <Cheep key={index}>
                        <Text size={Fonts['12']} color={Colors.blue500}>{tag}</Text>
                      </Cheep>
                    )
                  })}
                </Tag>
              </Post>
            )
          })}
        </Content>
        <PageNation>
          <Button><ArrowLeft height='16px'/></Button>
          <Button><Text>1</Text></Button>
          <Button><Text>2</Text></Button>
          <Button><Text>3</Text></Button>
          <Button><Text>4</Text></Button>
          <Button><ArrowRight height='16px'/></Button>
        </PageNation>
      </Body>
      <Footer>
        <FlexDiv justify='space-between'>
          <Text size={Fonts['32']} weight={Weights.black}>import</Text>
          <img src="https://media.discordapp.net/attachments/970500837094875227/1082519008437350492/free-icon-github-logo-silhouette-in-a-square-38401.png" style={{ height: '24px', cursor: 'pointer' }}/>
        </FlexDiv>
        <Text>© IMPORT</Text>
        <FlexDiv>
          <Text margin='70px 0 0 0'>개인정보처리방침</Text>
          <Text margin='70px 10px 0 10px' color={Colors.gray400}>|</Text>
          <Text margin='70px 0 0 0'>이용약관</Text>
        </FlexDiv>
      </Footer>
    </>
  )
}

export default BulletinBoard

interface text {
  size?: number
  weight?: number
  color?: string
  margin?: string
}

interface button {
  width?: string
  height?: string
  backColor?: string
  textColor?: string
  margin?: string
  padding?: string
}

interface flex {
  justify?: string
}

const FlexDiv = styled.div<flex>`
  display: flex;
  justify-content: ${props => props.justify ?? 'start'};
  align-items: center;
`
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 1920px;
  height: 300px;
  padding: 60px 300px;
  background-color: ${Colors.gray50};
`
const PageNation = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin: 100px 0 200px 0;
  & button {
    padding: 0;
    width: 44px;
    height: 44px;
    transition: 0.3s;
    &:hover {
      background-color: ${Colors.blue500};
      & p {
        color: ${Colors.white};
        transition: 0.3s;
      }
    }
  }
`
const Cheep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 10px;
  width: auto;
  height: 29px;
  background-color: ${Colors.gray100};
  border-radius: 8px;
`
const Tag = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`
const Image = styled.img`
  width: 315px;
  height: 177px;
  border-radius: 8px;
  object-fit: cover;
  transition: 0.3s;
`
const Post = styled.div`
  width: 315px;
  margin-top: 40px;
  cursor: pointer;
  &:hover img {
    transform: translateY(-20px);
  }
`
const Content = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 1320px;
`
const Input = styled.input`
  &::placeholder{
    color: ${Colors.gray400};
  }
  background-color: ${Colors.gray50};
  width: 100%;
`
const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  width: 985px;
  height: 50px;
  background-color: ${Colors.gray50};
  border-radius: 8px;
`
const Button = styled.button<button>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${props => props.padding ?? '11px 24px'};
  gap: 12px;
  width: ${props => props.width ?? 'auto'};
  height: ${props => props.height ?? '48px'};
  margin: ${props => props.margin ?? 0};
  background: ${props => props.backColor ?? Colors.gray100};
  color: ${props => props.textColor ?? Colors.black};
  border-radius: 8px;
`
const Body = styled.body`
  display: flex;
  width: 1920px;
  padding: 0 300px;
  flex-direction: column;
  align-items: start;
`
const TextBtn = styled.button`
  display: flex;
  align-items: center;
  height: 44px;
  &:hover {
    color: ${Colors.gray800};
  }
`
const Text = styled.p<text>`
  font-size: ${props => props.size ?? Fonts['14']}px;
  font-weight: ${props => props.weight ?? Weights.regular};
  color: ${props => props.color ?? Colors.black};
  margin: ${props => props.margin ?? 0}
`
const AlertBtn = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  width: 24px;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0;
`
const Header = styled.header`
  background-color: ${Colors.white};
  width: 1920px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 300px;
`
