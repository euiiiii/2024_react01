import React from 'react';

function HeartIconBtn({ chk = false }) {
    function handleFavorite() {
        // alert는 바뀌지만 사진은 바뀌지 않음, 한 번 랜더링하면 바뀌지 않고 이부분은 상태 관리를 해줘야 한다 하셨음
        // 제일 어려운 부분의 1개... omg......
        chk = !chk ; 
        alert(chk ?"종아요" : "모르겠어요");
        console.log(chk);
    }
    return(
        <button className='btn' onClick={handleFavorite}>
            <img className='btn_img' src={chk ? './img/heart-fill-icon.svg' : './img/heart-icon.svg'} />
        </button>
    );
}

function CourseItem08({ title, description, img, isFavorite }) {
    return (
        <article className="course">
            <img className="course__img" src={img} alt='강의이미지' style={{ width: "100px" }} />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <div className='course_icons'>
                <HeartIconBtn chk={isFavorite} />
            </div>
        </article>
    );
}
export default CourseItem08;