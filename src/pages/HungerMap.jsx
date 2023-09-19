import Section from "../components/Section";

function HungerMap() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <iframe
        src="https://hungermap.wfp.org/"
        frameborder="0"
        className="w-full h-full"
      ></iframe>
    </main>
  );
}

export default HungerMap;
