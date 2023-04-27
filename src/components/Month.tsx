import styled from 'styled-components';

const MonthName = styled.p`
  grid-column: 2/7;
  font-family: Roboto;
  font-size: min(3.4vw, 15px);
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  width: 100%;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background-image: url(assets/arrow.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MonthWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 5px;
`

const PrevButton = styled(Button)`
  transform: rotate(180deg);
`;

const NextButton = styled(Button)``

export const Month = () => {
  return(
    <MonthWrapper>
      <PrevButton />
      <MonthName>March 2019</MonthName>
      <NextButton />
    </MonthWrapper>
  )
}