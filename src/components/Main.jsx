import React from 'react';
import Counter from './Counter'; // 메인이 카운터를 불러서 import 함

function Main(props) {
    return (
        <>
            <main>
                <h2>메인 부분</h2>
                <Counter />
            </main>
        </>
    );
}
export default Main;