import { Hero } from "../components/Hero";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <>
      <SocialMedia />
      <Hero />
      <div
        id="nostros"
        className="flex bg-[#f5f5f2] h-[200px] w-full relative mt-[30px]"
      ></div>
    </>
  );
}
