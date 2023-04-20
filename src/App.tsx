
import styled from 'styled-components';
import Header from './components/Header';

const Wrapper = styled.div`

  @media (min-width: 741px) {
    width: 740px;
    margin: 0 auto;
  }
`;

function App() {
  return (
    <Wrapper>
      <Header></Header>
    </Wrapper>
  );
}

export default App;
