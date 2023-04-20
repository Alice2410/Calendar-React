import styled from 'styled-components';

const ButtonText = styled.span`
  display: none;
`;

const AddButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  display: block;
  width: 15px;
  height: 15px;
  margin: 0;
  padding: 0;

  ::before{
    content: '';
    top: 0;
    left: 6.5px;
    position: absolute;
    width: 2px;
    height: 15px;
    background-color: red;
  }

  ::after{
    content: '';
    top: 6.5px;
    left: 0;
    position: absolute;
    height: 2px;
    width: 15px;
    background-color: red;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 20px;
`

const AppTitle = styled.p`
  margin: 0;
  font-family: Roboto;
`

const Header = () => {
  return(
    <HeaderWrapper>
      <AppTitle>Interview Calendar</AppTitle>
      <AddButton>
        <ButtonText></ButtonText>
      </AddButton>
    </HeaderWrapper>
  )
}

export default Header;