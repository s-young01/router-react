import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const location = useLocation(); // 객체를 리턴
    // http://localhost:3000/about?name=green&age=30 일 때,
    // 반횐된 객체의 형태 => {name: 'green', age: 30}
    const [searchParams, setSearchParams] = useSearchParams(); // 배열을 리턴
    // 반환된 배열의 형태 => [객체, 객체 업데이트 해주는 함수]
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    return (
        <div>
           <h2>소개 페이지</h2>
           <p>소개 페이지 입니다.</p>
           <p>{location.search}</p>
           <p>name값은 {name}이고,</p>
           <p>age값은 {age}다.</p>
        </div>
    );
};

export default About;