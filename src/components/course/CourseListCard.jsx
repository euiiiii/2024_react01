import Courseitem from "./Courseitem";

function CourseListCard(props) {
  return (
    <>
      <div class="card">
        <div class="card__header">강의 목록</div>
        <div class="card__body">
          <div class="courses">
            <Courseitem title="입문자를 위한 HTML&CSS 웹 개발 입문" 
                        description="웹 개발에 필요한 기본 지식을 배웁니다." 
                        img="./img/coffee-blue.jpg" />
            <Courseitem title="초급자를 위한 JavaScript 웹 개발 기초" 
                        description="자바스크립트의 기본 지식을 배웁니다." 
                        img="./img/photo-2.jpg" />
            <Courseitem title="중급자를 위한 React 개발 과정" 
                        description="리액트로 웹 개발 과정을 배웁니다." 
                        img="./img/photo-3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseListCard;