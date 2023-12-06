import React from "react";

function Headline() {
  return (
    <form className="flex-col overflow-hidden relative flex min-h-[369px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/561e780c778580e1c12c43dc4a88ea4421cfe64aa85049239169837bb672c43f?apiKey=d39fb1cd258e4599b80cc57ef86d660a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/561e780c778580e1c12c43dc4a88ea4421cfe64aa85049239169837bb672c43f?apiKey=d39fb1cd258e4599b80cc57ef86d660a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/561e780c778580e1c12c43dc4a88ea4421cfe64aa85049239169837bb672c43f?apiKey=d39fb1cd258e4599b80cc57ef86d660a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/561e780c778580e1c12c43dc4a88ea4421cfe64aa85049239169837bb672c43f?apiKey=d39fb1cd258e4599b80cc57ef86d660a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/561e780c778580e1c12c43dc4a88ea4421cfe64aa85049239169837bb672c43f?apiKey=d39fb1cd258e4599b80cc57ef86d660a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/561e780c778580e1c12c43dc4a88ea4421cfe64aa85049239169837bb672c43f?apiKey=d39fb1cd258e4599b80cc57ef86d660a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/561e780c778580e1c12c43dc4a88ea4421cfe64aa85049239169837bb672c43f?apiKey=d39fb1cd258e4599b80cc57ef86d660a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/561e780c778580e1c12c43dc4a88ea4421cfe64aa85049239169837bb672c43f?apiKey=d39fb1cd258e4599b80cc57ef86d660a&"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative flex flex-col items-stretch mt-14 mb-12 max-md:max-w-full max-md:my-10">
        <header
          className="text-white text-center text-6xl font-semibold leading-[65px] tracking-tighter self-center max-w-[541px] max-md:max-w-full max-md:text-4xl max-md:leading-10"
          aria-label="Party Title"
        >
          Where Pixels Party:
        </header>
        <div
          className="text-white text-center text-4xl font-light leading-10 tracking-tight self-center max-w-[633px] mt-2 max-md:max-w-full"
          aria-label="Party Description"
        >
          Crafting Innovation in Digital Realms
        </div>
        <div
          className="text-white text-center text-2xl font-light leading-6 tracking-tight mt-7 max-md:max-w-full"
          aria-label="Party Details"
        >
          Digital Nomad crafting innovative digital products as a Software
          Engineer in agile teams
        </div>
      </div>
    </form>
  );
}

export default Headline;
