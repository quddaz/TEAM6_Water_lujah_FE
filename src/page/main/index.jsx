import React, { useState, useEffect } from "react";
import Sun from "../../assets/main/Sun.svg";
import Rain from "../../assets/main/Rain.svg";
import Cloud from "../../assets/main/Cloud.svg";
import Coffee from "../../assets/main/Coffee.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Index() {
  const location = useLocation();

  // 대문자로 시작하도록 변경
  const [teaResult, setTeaResult] = useState(0);
  const [spaResult, setSpaResult] = useState(0);
  const [juiceResult, setjuiceResult] = useState(0);
  const [milkResult, setMilkResult] = useState(0);
  const [waterResult, setWaterResult] = useState(0);
  const [coffeeResult, setCoffeeResult] = useState(0); // coffeeResult 상태 추가
  const [neededWater, setNeededWater] = useState(0);
  const [todayWeather, setTodayWeather] = useState("");

  const { gender, weight, isOld, selectedWeather } = location.state || {};
  console.log(selectedWeather);

  useEffect(() => {
    // WATER와 COFFEE의 값을 로컬 스토리지에서 불러오기
    const water = localStorage.getItem("WATER") || "0";
    const coffee = localStorage.getItem("COFFEE") || "0";
    const tea = localStorage.getItem("TEA") || "0";
    const spa = localStorage.getItem("SPARKLING_WATER") || "0";
    const juice = localStorage.getItem("JUICE") || "0";
    const milk = localStorage.getItem("MILK") || "0";
    const needWater = localStorage.getItem("neededWater" || "0");
    const weather = localStorage.getItem("weather");

    // 숫자로 변환 후 상태 저장
    setWaterResult(parseFloat(water));
    setCoffeeResult(parseFloat(coffee)); // coffeeResult 상태 업데이트
    setTeaResult(parseFloat(tea));
    setSpaResult(parseFloat(spa));
    setjuiceResult(parseFloat(juice));
    setMilkResult(parseFloat(milk));
    setNeededWater(parseInt(needWater));
    setTodayWeather(weather);
  }, []);
  console.log(gender);
  console.log(weight);
  console.log(isOld);

  // totalWater 계산
  const totalWater =
    waterResult +
    teaResult +
    spaResult +
    juiceResult +
    milkResult +
    coffeeResult;

  console.log(totalWater);

  const weatherMapping = {
    추움: {
      bannerHeader: "추운 날씨",
      contentHeader: "추운 날씨에 추천하는 물 섭취량",
      content: "100ml정도 추가적인 물 섭취를 추천드립니다",
      imgSrc: Rain, // Add a relevant image source for cold weather
    },
    보통: {
      bannerHeader: "보통 날씨",
      contentHeader: "온대 기후에 추천하는 물 섭취량",
      content: "평균 섭취량 대로 섭취를 추천드립니다",
      imgSrc: Cloud, // Adjust the image based on your assets
    },
    더움: {
      bannerHeader: "더운 날씨",
      contentHeader: "더운 날씨에 추천하는 물 섭취량",
      content: "500ml정도 추가적인 물 섭취를 추천드립니다",
      imgSrc: Sun,
    },
  };
  const currentWeatherData = weatherMapping[todayWeather] || {};
  let leadingDigit = 0;

  const percentage = Math.min((totalWater / neededWater) * 100, 100);

  if (percentage === 100) {
    leadingDigit = 10;
  } else {
    leadingDigit = Math.floor(percentage).toString()[0];
  }

  const imageUrl = `https://quddaztestbucket.s3.ap-northeast-2.amazonaws.com/${leadingDigit}.png`;

  return (
    <>
      <div className="main_container">
        <div className="main_content">
          <div className="main_text">
            <div className="main_text1">
              물의 기적이 일어나고 있는 중입니다!
            </div>
            <div className="main_text2">오늘 목표 섭취량: {neededWater} mL</div>
          </div>
          <div className="main_aquarium">
            <img src={imageUrl} alt="" />
            <div className="aquarium_text">
              <div className="aquarium_percent">{Math.floor(percentage)}%</div>
              <div className="aquarium_liter">{totalWater}ML</div>
            </div>
          </div>
        </div>
        <div className="main_banner">
          <div className="banner_container">
            <div className="weather_banner_header">
              {currentWeatherData.bannerHeader}
            </div>
            <div className="weather_banner_content_container">
              <div className="banner_content">
                <div className="content_header">
                  {currentWeatherData.contentHeader}
                </div>
                <div className="content_content">
                  {currentWeatherData.content}
                </div>
              </div>
              <div className="banner_image">
                <img
                  src={currentWeatherData.imgSrc}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
            </div>
          </div>
          <div className="banner_container">
            <div className="caffeine_banner_header">오늘의 카페인</div>
            <div className="caffeine_banner_content_container">
              <div className="banner_content">
                <div className="content_header">오늘의 카페인 섭취량</div>
                <div className="content_content">
                  카페인 섭취 6시간 이후에 취침을 권장드립니다
                </div>
              </div>
              <div className="banner_image">
                <img
                  src={Coffee}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index; // 대문자로 시작하도록 변경
