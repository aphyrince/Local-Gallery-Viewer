import styled from "styled-components";
import ViewList from "./components/ViewList";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("./968864.png");
    background-size: 100%;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: large;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 40px;
    box-sizing: border-box;
`;

const App = () => {
    return (
        <Wrapper>
            <h1>Local Gallery Viewer</h1>
            <ViewList />
        </Wrapper>
    );
};

export default App;
