import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Courseitem from "./components/course/Courseitem";
import Library from "./components/step01/Library";
import Profile from "./components/step02/Profile";
import CourseListCard from "./components/step04/CourseListCard";

/*
function Header() {
  return(
    <header>
      <h2>Header</h2>
    </header>
  );
}

function Main() {
  return(
    <main>
      <Counter />
    </main>
  );
}

function Footer() {
  return(
    <footer>
      <h2>Footer</h2>
    </footer>
  );
}

// 파스칼 케이스 사용해야 된다.(첫 글자 대문자 단어 첫 글자 대문자)
function Counter() {
  return(
    <button>Counter</button>
  );
}
*/

function App() {
  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      img: './img/coffee-blue.png'
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      img: './img/photo-2.png'
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      img: './img/photo-3.png'
    }
  ]

  // 조건부 랜더링: if, &&, 삼항연산자(조건식?참: 거짓)
  const ischk = false;
  return (
    <div className='App'>
      {ischk ? <h2>Hello, react</h2> : <CourseListCard items={items} />}
    </div>  
  );
}

export default App;
