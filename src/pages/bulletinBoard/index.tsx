import React from 'react'
import { Colors } from '../../styles/theme/color'
import styled from 'styled-components'
import ImportLogo from '../../assets/icons/Import-Logo'
import Alert from '../../assets/icons/Alert'
import { Weights } from '../../styles/theme/weight'
import { Fonts } from '../../styles/theme/font'

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
    </>
  )
}

export default BulletinBoard

interface text {
  size?: number
  weight?: number
  color?: string
}

const TextBtn = styled.button`
  display: flex;
  align-items: center;
  height: 44px;
  &:hover {
    color: ${Colors.gray800};
  }
`
const Text = styled.text<text>`
  font-size: ${props => props.size ?? Fonts['14']};
  font-weight: ${props => props.weight ?? Weights.regular};
  color: ${props => props.color ?? Colors.black};
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
