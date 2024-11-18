import React from 'react';

// props: 인자, 매개변수 => 넘어오는 속성을 다 받아줌
// function Book(props) {
//     return (
//         <div>
//             {/* `문자열 ${}` */}
//             {/* 위에서 아래로 전달 => callback 함수를 사용해야 하기 때문에 */}
//             <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
//             <h1>{`이 책은 총 ${props.numOfPage} 페이지로 이루어져 있습니다.`}</h1>
//         </div>
//     );
// }

function Book({name, numOfPage}) {
    return (
        <div>
            {/* `문자열 ${}` */}
            {/* 위에서 아래로 전달 => callback 함수를 사용해야 하기 때문에 */}
            <h1>{`이 책의 이름은 ${name} 입니다.`}</h1>
            <h1>{`이 책은 총 ${numOfPage} 페이지로 이루어져 있습니다.`}</h1>
        </div>
    );
}

export default Book;