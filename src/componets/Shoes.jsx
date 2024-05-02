import React from "react";
import logo from "../images/right-tic.svg";
import { useState } from "react";
import greenshoes from "../images/green-shoes.png";
import greyshoes from "../images/grey-shoes.png";
import yellowshoes from "../images/yellow-shoes.png";
const Shoes = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
  }
  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <section>
        <div className=" d-flex position-relative">
          <div className=" top-0  position-absolute d-flex align-items-center gap-262">
            <img src={logo} alt="logo" />
            <ul
              className={`${
                nav ? "start-0" : "start_100"
              } mb-0 ps-0 d-flex align-items-center  gap-4 mobile_view `}
            >
              <li>
                <a href="" className=" nav_text">
                  Men{" "}
                </a>
              </li>
              <li>
                <a href="" className=" nav_text">
                  {" "}
                  Womem{" "}
                </a>
              </li>
              <li>
                <a href="" className=" nav_text">
                  {" "}
                  Kids{" "}
                </a>
              </li>
              <li>
                <a href="" className=" nav_text">
                  {" "}
                  Collection
                </a>
              </li>
            </ul>
            <ul className=" d-flex d-lg-none mb-0 gap-4">
              <li>
                <a href="" className=" nav_text">
                  <svg
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6667 3.4375C16.3381 3.4375 20.125 7.49493 20.125 12.5C20.125 14.6649 19.4165 16.6524 18.2344 18.211L23.952 24.3371C24.2937 24.7032 24.2937 25.2968 23.952 25.6629C23.6415 25.9958 23.1553 26.026 22.8128 25.7536L22.7147 25.6629L16.9969 19.5369C15.5422 20.8034 13.6872 21.5625 11.6667 21.5625C6.99527 21.5625 3.20834 17.5051 3.20834 12.5C3.20834 7.49493 6.99527 3.4375 11.6667 3.4375ZM11.6667 5.3125C7.96176 5.3125 4.95834 8.53045 4.95834 12.5C4.95834 16.4695 7.96176 19.6875 11.6667 19.6875C15.3715 19.6875 18.375 16.4695 18.375 12.5C18.375 8.53045 15.3715 5.3125 11.6667 5.3125Z"
                      fill="#212121"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className=" nav_text">
                  {" "}
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0246 6.97445L14.9988 8.00258L13.9696 6.97351C11.3458 4.34969 7.09172 4.34969 4.46788 6.97351C1.84404 9.59735 1.84404 13.8515 4.46788 16.4752L14.3371 26.3445C14.7033 26.7106 15.2968 26.7106 15.6629 26.3445L25.5398 16.4735C28.1578 13.8409 28.1623 9.59876 25.5379 6.97445C22.9093 4.34584 18.6533 4.34584 16.0246 6.97445ZM24.2103 15.1512L15 24.3557L5.7937 15.1495C3.9021 13.2579 3.9021 10.191 5.7937 8.29934C7.6853 6.40774 10.7522 6.40774 12.6438 8.29934L14.3406 9.99615C14.7129 10.3685 15.3188 10.3612 15.6821 9.98009L17.3504 8.30028C19.2468 6.4039 22.3158 6.40389 24.2121 8.30028C26.1041 10.1923 26.1009 13.2501 24.2103 15.1512Z"
                      fill="#212121"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className=" nav_text">
                  {" "}
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75 8.75V6.25C8.75 4.17894 10.4289 2.5 12.5 2.5C13.4605 2.5 14.3365 2.86108 15 3.45488C15.6635 2.86106 16.5396 2.5 17.5 2.5C19.5711 2.5 21.25 4.17894 21.25 6.25V8.75H23.125C24.1605 8.75 25 9.58946 25 10.625V23.1312C25 25.544 23.044 27.5 20.6312 27.5H10C7.23857 27.5 5 25.2614 5 22.5V10.625C5 9.58946 5.83946 8.75 6.875 8.75H8.75ZM17.0438 25.625C16.5513 24.9179 16.2625 24.0582 16.2625 23.1312V10.625H6.875V22.5C6.875 24.2259 8.27411 25.625 10 25.625H17.0438ZM14.375 8.75V6.25C14.375 5.21446 13.5355 4.375 12.5 4.375C11.4645 4.375 10.625 5.21446 10.625 6.25V8.75H14.375ZM16.25 8.75H19.375V6.25C19.375 5.21446 18.5355 4.375 17.5 4.375C16.9187 4.375 16.3994 4.63945 16.0555 5.0546C16.1816 5.43004 16.25 5.83204 16.25 6.25V8.75ZM18.1375 23.1312C18.1375 24.5085 19.254 25.625 20.6312 25.625C22.0085 25.625 23.125 24.5085 23.125 23.1312V10.625H18.1375V23.1312Z"
                      fill="#212121"
                    />
                  </svg>
                </a>
              </li>
              <li onClick={show} className=" position-relative z-3">
          
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.4375 22.4996H19.0625C19.5802 22.4996 20 22.9194 20 23.4371C20 23.9118 19.6472 24.304 19.1898 24.366L19.0625 24.3746H3.4375C2.91974 24.3746 2.5 23.9549 2.5 23.4371C2.5 22.9625 2.85269 22.5702 3.31029 22.5081L3.4375 22.4996H19.0625H3.4375ZM3.4375 14.3746H26.5625C27.0802 14.3746 27.5 14.7944 27.5 15.3121C27.5 15.7867 27.1473 16.179 26.6898 16.241L26.5625 16.2496H3.4375C2.91974 16.2496 2.5 15.8299 2.5 15.3121C2.5 14.8375 2.85269 14.4452 3.31029 14.3831L3.4375 14.3746H26.5625H3.4375ZM3.4375 6.25366H22.8125C23.3302 6.25366 23.75 6.6734 23.75 7.19116C23.75 7.66579 23.3973 8.05802 22.9398 8.1201L22.8125 8.12866H3.4375C2.91974 8.12866 2.5 7.70892 2.5 7.19116C2.5 6.71654 2.85269 6.3243 3.31029 6.26222L3.4375 6.25366H22.8125H3.4375Z"
                      fill="#212121"
                    />
                  </svg>
       
              </li>
            </ul>
          </div>
          <div className="green_box d-flex  align-items-center overflow-hidden">
            <img src={greenshoes} alt="greenshoes" className="greenshoes" />
          </div>
          <div className="blue_box overflow-hidden d-flex justify-content-center align-items-center">
            <img src={greyshoes} alt="greyshoes" className="blueshoes" />
          </div>
          <div className="yellow_box overflow-hidden d-flex justify-content-center align-items-center">
            <img src={yellowshoes} alt="yellowshoes" className="blueshoes" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shoes;
