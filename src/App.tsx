import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import InfoPage from './components/InfoPage';
import JSQuestions from './components/data/JSQuestionBank.json';
import HTMLQuestions from './components/data/HTMLQuestionBank.json';
import CSSQuestions from './components/data/CSSQuestionBank.json';
import TypeScriptQuestions from './components/data/TSQuestionBank.json'
import ReactJSQuestions from './components/data/ReactQuestionBank.json'
import GoLangQuestion from './components/data/GoLangQuestionBank.json'
import GitHubPage from './components/GitHubPage';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
  <Router basename="/">
    <Header/>
    <MainPage>
      <LeftContainer>
          <GitHubPage />
      </LeftContainer>
      <RightContainer>
        <Switch>
          <Route path="/frontend/javascript">
            <InfoPage currPage={"javascript"} questionList={JSQuestions.questions} />
          </Route>
          <Route path="/frontend/html">
            <InfoPage currPage={"html"} questionList={HTMLQuestions.questions} />
          </Route>
          <Route path="/frontend/typescript">
            <InfoPage currPage={"typescript"} questionList={TypeScriptQuestions.questions} />
          </Route>
          <Route path="/frontend/css">
            <InfoPage currPage={"css"} questionList={CSSQuestions.questions} />
          </Route>
          <Route path="/frontend/react">
            <InfoPage currPage={"react"} questionList={ReactJSQuestions.questions} />
          </Route>
          <Route path="/backend/go">
            <InfoPage currPage={"go"} questionList={GoLangQuestion.questions} />
          </Route>
          <Route path="/backend/java">
            <InfoPage currPage={"java"} questionList={ReactJSQuestions.questions} />
          </Route>
        </Switch>
      </RightContainer>
      </MainPage>
      <Footer>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></Footer>
  </Router>
  );
}
const Footer = styled.div``
const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #636e72;
`
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
`

const RightContainer = styled.div`
  width: 75%;
  height: 100%;
  padding: 0 0 0 15px;
`

export default App;
