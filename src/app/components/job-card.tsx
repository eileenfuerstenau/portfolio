export default function JobCard() {
  return (
    <div className="shadow-2xl bg-white flex grow flex-col items-stretch w-full pl-6 pr-10 pt-12 pb-8 rounded-2xl border-2 border-solid border-slate-900 border-opacity-0 max-md:mt-2.5 max-md:px-5">
      <header className="header text-orange-500 text-2xl font-bold leading-9 whitespace-nowrap">
        Software Engineer
      </header>
      <div className="text-black text-lg font-bold leading-6 mt-2.5">
        MaibornWolff GmbH, Hamburg
      </div>
      <div className="text-gray-400 text-lg leading-6 mt-6">
        Designing, testing, and documenting software components for web
        applications, spanning both frontend and backend, within agile teams.
      </div>
      <time className="text-orange-500 text-xl font-bold leading-9 mt-20 max-md:mt-10">
        05/2021 – Present
      </time>
    </div>
  );
}
