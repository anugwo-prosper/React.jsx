import styled from 'styled-components'
import './App.css';
import MyHome from './components/MyHome';
const Tunde = ({name}) => {
  return(
    <h1>{name}</h1>
  )
}
function App({y}) {
  return (
    <Wrapper className="App">
      <h1>Welcome to react class</h1>
      <MyHome />
      <Tunde name="Welcome" />
      <Tunde name="prosper" />
      <MyHome x="Welcome to digital fortress"/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
background-color:red;

h1{
  color:green;
}

`

export default App;
