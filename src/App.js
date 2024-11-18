import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Courseitem from "./components/course/Courseitem";
import CourseListCard from "./components/course/CourseListCard";
import Library from "./components/step01/Library";

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
  return (
    // 리액트에서는 class는 예약어이기 때문에 사용 못하고,
    // class 대신 className이라고 사용한다.
    <div>
    {/*
    <main>
     
    <Header />
    <Main />
    <Footer /> 

    <main>
		<div class="card">
			<div class="card__header">강의 목록</div>
			<div class="card__body">
				<div class="courses">
					<article class="course">
						<img class="course__img" src="./img/coffee-blue.jpg" alt="" />
						<div class="course__body">
							<div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
							<div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
						</div>
					</article>
					<article class="course">
						<img class="course__img" src="./img/coffee-blue.jpg" alt="" />
						<div class="course__body">
							<div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
							<div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
						</div>
					</article>
					<article class="course">
						<img class="course__img" src="./img/coffee-blue.jpg" alt="" />
						<div class="course__body">
							<div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
							<div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</main>

		  <div class="card">
			  <div class="card__header">강의 목록</div>
			  <div class="card__body">
			  <div class="courses">
        {/* 
        2단계 중복되는 부분 <article></article>
          <Courseitem />
          <Courseitem />
          <Courseitem />
          3단계. 중복되는 부분을 List 형태로 전부 담을 수 있다.
      </div>
    </div>
    </div> 
    3단계. 중복되는 부분을 List 형태로 전부 담을 수 있다.
      <CourseListCard />
    </main>
     */}
      {/* <Library /> */}
      <CourseListCard />
    </div>
  );
}

export default App;
