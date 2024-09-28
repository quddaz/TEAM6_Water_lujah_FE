import React, { useState, useEffect } from "react";
import { ReactComponent as ActiveUnion } from "../../assets/footer/ActiveUnion.svg";
import { ReactComponent as CoffeeUnion } from "../../assets/footer/CoffeeUnion.svg";
import { ReactComponent as SparkleUnion } from "../../assets/footer/SparkleUnion.svg";
import { ReactComponent as TeaUnion } from "../../assets/footer/TeaUnion.svg";
import { ReactComponent as JuiceUnion } from "../../assets/footer/JuiceUnion.svg";
import { ReactComponent as MilkUnion } from "../../assets/footer/MilkUnion.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Record = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <>
      <div className="record_container">
        <div className="record_header">
          <div className="record_header_content">
            <p>세례 기록하기✨</p>
          </div>
          <div>
            <p>어떤 음료를 추가하실건가요?</p>
          </div>
        </div>
        <div className="record_category">
          <div className="record_category_item">
            <ActiveUnion
              style={{ width: "33px", height: "44px" }}
              onClick={() => {
                navigate("/drinkrecord", { state: { drink: "WATER" } });
              }}
            />
            물
          </div>
          <div className="record_category_item">
            <CoffeeUnion
              style={{ width: "33px", height: "44px" }}
              onClick={() => {
                navigate("/drinkrecord", { state: { drink: "COFFEE" } });
              }}
            />
            커피
          </div>
          <div className="record_category_item">
            <TeaUnion
              style={{ width: "33px", height: "44px" }}
              onClick={() => {
                navigate("/drinkrecord", { state: { drink: "TEA" } });
              }}
            />
            차
          </div>
        </div>
        <br />
        <div className="record_category">
          <div className="record_category_item">
            <MilkUnion
              style={{ width: "33px", height: "44px" }}
              onClick={() => {
                navigate("/drinkrecord", { state: { drink: "MILK" } });
              }}
            />
            우유
          </div>
          <div className="record_category_item">
            <SparkleUnion
              style={{ width: "33px", height: "44px" }}
              onClick={() => {
                navigate("/drinkrecord", {
                  state: { drink: "SPARKLING_WATER" },
                });
              }}
            />
            탄산수
          </div>
          <div className="record_category_item">
            <JuiceUnion
              style={{ width: "33px", height: "44px" }}
              onClick={() => {
                navigate("/drinkrecord", { state: { drink: "JUICE" } });
              }}
            />
            주스
          </div>
        </div>
      </div>
    </>
  );
};

export default Record;
