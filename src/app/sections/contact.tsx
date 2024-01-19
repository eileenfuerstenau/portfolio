import React from "react";

function Contact() {
  return (
    <div className="flex-col fill-black overflow-hidden relative flex min-h-[867px] w-full items-stretch px-16 py-12 max-md:max-w-full max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/653b73aa2aba186a7ee4978739b678c77fe939c0cf053d73327de19faf7cc018?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <header className="relative text-orange-500 text-center font-semibold tracking-tight mt-16 max-md:mt-10">
        Contact Me
      </header>
      <div className="relative text-white text-center font-light tracking-tight self-center w-[1161px] max-w-[1118px] mt-12 max-md:max-w-full max-md:mt-10">
        If my words or work have inspired you in any way, feel free to reach
        out. I'm always open to new experiences, learning, and creating.
        <br />
        <br />
        Whether it's discovering new places, meeting new people, or finding new
        energy.
      </div>
      <form className="relative self-center flex items-stretch justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="justify-between items-stretch border border-[color:var(--white,#FFF)] flex gap-3 px-8 py-3 rounded-[60px] border-solid max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffa16f381f7d67086b5184fa4c537f8b1a10dc57d7895ad20c1f64bdf4e0e101?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
            className="aspect-[1.03] object-contain object-center w-[31px] fill-white overflow-hidden shrink-0 max-w-full"
            alt="LinkedIn"
          />
          <div className="text-white tracking-tight self-center grow whitespace-nowrap my-auto">
            Follow me on LinkedIn
          </div>
        </div>
        <div className="justify-center items-stretch border border-[color:var(--white,#FFF)] flex gap-3.5 pl-7 pr-12 py-2.5 rounded-[60px] border-solid self-start max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dbc692b2e1353240f133f9556014e461572a3d498fb047609f773353a26e207?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
            className="aspect-square object-contain object-center w-7 fill-white overflow-hidden shrink-0 max-w-full"
            alt="GitHub"
          />
          <div className="text-white tracking-tight self-center grow whitespace-nowrap my-auto">
            Follow me on GitHub
          </div>
        </div>
      </form>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/547722ace6054a1993f708b0985f2a1bdcc6fe0a48350ee6b5940ccd16af3637?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
        className="aspect-[651] object-contain object-center w-full stroke-[2px] stroke-white stroke-opacity-20 overflow-hidden mt-28 max-md:max-w-full max-md:mt-10"
        alt="Connect"
      />
      <div className="relative justify-between items-stretch flex w-full gap-5 mt-3.5 px-px max-md:max-w-full max-md:flex-wrap">
        <div className="justify-center text-gray-50  font-semibold tracking-tighter grow shrink basis-auto max-md:max-w-full max-md:text-4xl">
          Lets Connect there
        </div>
        <div className="justify-center items-center bg-orange-500 self-center flex gap-0 my-auto px-9 py-2.5 rounded-[60px] max-md:px-5">
          <div className="text-white font-medium tracking-tight grow whitespace-nowrap my-auto">
            Hire me
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e83cb4bd3e093857ad93c179b0e492d61e082c3b411bba8fe60c38cfaf99f761?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
            className="aspect-square object-contain object-center w-[42px] overflow-hidden self-stretch shrink-0 max-w-full"
            alt="Hire"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
