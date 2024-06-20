import React from 'react';
import qs from 'qs';
const About = ({ location }) => {
  console.log(location);

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <div>
      <h1>About</h1>
      <p>이 프로젝트에서는 react-router-dom 을 실습해 봅니다.</p>
    </div>
  );
};

export default About;
