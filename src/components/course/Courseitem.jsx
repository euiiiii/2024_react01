import React from "react";

function Courseitem(props) {
  // 방법 1
  // const title = '입문자를 위한 HTML, CSS 웹 개발 입문';
  // const description = '웹 개발에 필요한 기본 지식을 배웁니다.';
  // const img = './img/coffee-blue.jpg';
  // const alt = '강의 이미지';

  // 방법 2
  // VO 처럼 한 번에 값을 주기 위해서 key:value 형식으로 전달할 수 있다.
  // const course = {
  //   title : '입문자를 위한 HTML, CSS 웹 개발 입문',
  //   description : '웹 개발에 필요한 기본 지식을 배웁니다.',
  //   img : './img/coffee-blue.jpg',
  //   alt : '강의 이미지'
  // }
  
  return (
  // 방법1
  //   <article class="course">
  //     <img class="course__img" src={img} alt={alt} style={{width:100}}/>
  //     <div class="course__body">
  //       <div className="course__title">{title}</div>
  //       <div className="course__description">{.description}
  //       </div>
  //     </div>
  //   </article>
  // );

  // 방법2
//     <article class="course">
//       <img class="course__img" src={course.img} alt={course.alt} style={{width:100}}/>
//       <div class="course__body">
//         <div className="course__title">{course.title}</div>
//         <div className="course__description">{course.description}
//         </div>
//       </div>
//     </article>
//   );
// }
    <article class="course">
      <img class="course__img" src={props.img} alt="강의 이미지" style={{width:100}}/>
      <div class="course__body">
        <div className="course__title">{props.title}</div>
        <div className="course__description">{props.description}
        </div>
      </div>
    </article>
  );
}
export default Courseitem;