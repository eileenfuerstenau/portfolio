import * as React from "react";

export default function Header() {
  return (
    <div className="bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
      <div className="w-[848px] max-w-full ml-20 mt-3 self-start">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
            <div className="flex items-stretch gap-2 mt-52 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fca819af59244efa632c25781482ec7b6f9587059235e84cdd15a9310a4b33f?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-base tracking-tight grow whitespace-nowrap mt-1.5 self-start">
                Certified Web Developer
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[74%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-center max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed42ecba9ecfcbf127d7a0e9842e07f760280a918218976fc91c7b35a2a17028?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
                className="aspect-[1.98] object-contain object-center w-[127px] overflow-hidden max-w-full"
              />
              <div className="text-orange-500 text-center text-8xl leading-[85px] tracking-tighter self-stretch mt-11 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
                <span className="text-neutral-900">I’m </span>
                <span className="text-orange-500">Eileen</span>
                <span className="text-neutral-900">, Web Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5 max-md:mt-10">
        <div className="flex grow basis-[0%] flex-col items-end">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db69214b3b0ffde3b8a3a46b65a51a2bce3222a659ed2c58d484ed57295530d1?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
            className="aspect-[0.86] object-contain object-center w-[73px] stroke-[5px] stroke-orange-500 overflow-hidden max-w-full mr-3 max-md:mr-2.5"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fc3dd938439ebec75cd98d2fa7e3b4e45fdc2db2a3ab2ec84583b789b2bdedc?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
            className="aspect-square object-contain object-center w-9 justify-center items-center overflow-hidden max-w-full mt-9 self-start"
          />
          <div className="text-slate-700 text-xl tracking-tight self-stretch mt-7">
            Eileen’s Exceptional development
            <br />
            service ensure our website’s success. Highly Recommended
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch mt-3.5 self-start">
          <div className="flex items-stretch justify-between gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6df47990209aee841b089c7a21a67d81f390e7facc05c87983e4cb6c982af2a?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-black text-base tracking-tight grow whitespace-nowrap mt-1.5 self-start">
              4.9/5 Average Ratings
            </div>
          </div>
          <div className="flex w-[165px] max-w-full flex-col mt-20 self-end items-end max-md:mt-10">
            <div className="self-stretch flex items-stretch justify-between gap-0 pr-1.5 max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60f1b5e363ff94e5dccc79119497287ba2e3014775f1e03f89fc8fd283c96762?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
                className="aspect-square object-contain object-center w-8 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60f1b5e363ff94e5dccc79119497287ba2e3014775f1e03f89fc8fd283c96762?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
                className="aspect-square object-contain object-center w-8 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60f1b5e363ff94e5dccc79119497287ba2e3014775f1e03f89fc8fd283c96762?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
                className="aspect-square object-contain object-center w-8 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60f1b5e363ff94e5dccc79119497287ba2e3014775f1e03f89fc8fd283c96762?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
                className="aspect-square object-contain object-center w-8 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60f1b5e363ff94e5dccc79119497287ba2e3014775f1e03f89fc8fd283c96762?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
                className="aspect-square object-contain object-center w-8 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="text-neutral-900 text-center text-5xl font-bold leading-10 tracking-tighter self-stretch whitespace-nowrap mt-7 max-md:text-4xl max-md:leading-10">
              10 Years
            </div>
            <div className="text-neutral-900 text-center text-xl leading-5 tracking-tight whitespace-nowrap mt-3.5">
              Experince
            </div>
          </div>
        </div>
      </div>
      <div className="text-black text-base tracking-tight whitespace-nowrap ml-12 mt-28 self-start max-md:ml-2.5 max-md:mt-10">
        10+ Winning Awards
      </div>
      <div className="justify-between items-stretch backdrop-blur-[7.5px] bg-white bg-opacity-10 self-center flex gap-5 mt-14 pl-2.5 pr-7 py-2.5 rounded-[50px] border-2 border-solid border-white max-md:mt-10 max-md:pr-5">
        <div className="justify-between items-center border-[color:var(--gray-300,#D0D5DD)] bg-orange-500 flex gap-0 px-8 py-2.5 rounded-[60px] border-[0.5px] border-solid max-md:px-5">
          <div className="text-white text-2xl font-medium tracking-tight grow whitespace-nowrap my-auto">
            Portfolio
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5102791e89011128a70c5f4019db43355c97bc8eab0bf659b52cf9074b59dc7f?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
            className="aspect-square object-contain object-center w-[42px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="text-white text-2xl font-light tracking-tight self-center grow whitespace-nowrap my-auto">
          Hire me
        </div>
      </div>
    </div>
  );
}
