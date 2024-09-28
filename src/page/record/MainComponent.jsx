import React, { useState } from "react";
import DrinkRecord from "./component/DrinkRecord"; // DrinkRecord 컴포넌트 경로
import Statistic from "../statistic/index"; // Statistic 컴포넌트 경로

const MainComponent = () => {
  const [result, setResult] = useState(null); // API 응답 결과 저장

  return (
    <div>
      {/* DrinkRecord 컴포넌트에 setResult 전달 */}
      <DrinkRecord setResult={setResult} />
      {/* Statistic 컴포넌트에 result 전달 */}
      <Statistic result={result} />
    </div>
  );
};

export default MainComponent;
