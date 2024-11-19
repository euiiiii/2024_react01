import React from 'react';
import Comment from './Comment';

// 나중에 DB
const comments = [
    {
        name : "둘리",
        comment : "호이 호이"

    },
    {
        name : "마이콜",
        comment : "딩가 딩가"

    },
    {
        name : "도우너",
        comment : "Bye Bye"

    },
    {
        name : "희동이",
        comment : "응 애 ~~"

    }
]

function CommentList(props) {
    return (
        <div>
            {
                comments.map((k) => {
                    return(
                        <Comment name={k.name} comment={k.comment} />
                    )
                })
            }
        </div>
    );
}
export default CommentList;