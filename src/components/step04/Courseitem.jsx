function CourseItem({title, description, img}) {
    return(
      <article class="course">
      <img class="course__img" src={img} alt="강의 이미지" style={{width:100}}/>
      <div class="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}
        </div>
      </div>
    </article>
    );
  }
  export default CourseItem;