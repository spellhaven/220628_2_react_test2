import { Component, Fragment } from 'react';
import Navi1 from './Navi1';
import Content from './content/Content';
import './App.css';

// 히히! Navi1만 Navi1.js라고 따로 만들어서 뺐어! 그리고 import해 줬어!

// class Navi1 extends Component {
//     render() {
//     return(
//       <nav>
//         <h2>리액트 기본 문법</h2>
//         <h2>리액트 컴포넌트 만들기</h2>
//         <h2>리액트 JSX 만들기</h2>

//       </nav>
//     );
//   }
// }

class Navi2 extends Component {
    render() {
    return(
      <nav>
        <ul>
          <li><h2><a href = 'https://naver.com'>리액트 props</a></h2></li>
          <li><h2>리액트 state</h2></li>
          <li><h2>리액트 create</h2></li>
        </ul>
      </nav>
    );
  }
}

// class Content extends Component {
//   render() {
//     return(
//       <article>
//         <h2>React</h2>
//         React! 최고의 프런트엔드 도구!!!
//         {/*히히! 오줌발싸!!*/}

//       </article>
//     );
//   }
// }

class App extends Component {
    render() {
    return (
      <Fragment>
        <header className='App'>
          react를 배워 봅시다! (😩)
          <hr></hr>
          <Content></Content>
          <br></br>
          <Navi1></Navi1>
          <hr></hr>
          <Navi2></Navi2>
        </header>
        <Content></Content>
      </Fragment>
    );
  }
}

export default App;
