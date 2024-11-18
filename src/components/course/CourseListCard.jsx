import Courseitem from "./Courseitem";

function CourseListCard() {
  return (
    <>
      <div class="card">
        <div class="card__header">강의 목록</div>
        <div class="card__body">
          <div class="courses">
            <Courseitem />
            <Courseitem />
            <Courseitem />
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseListCard;
