import {
  CloudArrowUpIcon,
  CircleStackIcon,
  PaperAirplaneIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import bgImg from "../assets/cyber-bg.png";
const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justity-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our tech brand</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <di>
          <img className="w-full" src={bgImg} alt="/" />
          <div
            className="absolute flex flex-col py-8 md:min-w-[760px] bottom-
          [-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl"
          >
            <p>Data Services</p>
            <div className="flex justify-between flex-wrap px-4">
              <p className="flex px-4 py-2 text-slate-500">
                <CloudArrowUpIcon className="h-6 text-indigo-600" /> App
                Security
              </p>

              <p className="flex px-4 py-2 text-slate-500">
                <CircleStackIcon className="h-6 text-indigo-600" /> Colud Data
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <ServerStackIcon className="h-6 text-indigo-600" />
                Dashboard
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <PaperAirplaneIcon className="h-6 text-indigo-600" /> Api
              </p>
            </div>
          </div>
        </di>
      </div>
    </div>
  );
};

export default Hero;
