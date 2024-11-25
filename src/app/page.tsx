import Content1 from "./layout/Content1";
import Content2 from "./layout/Content2";
import Content3 from "./layout/Content3";
import Content4 from "./layout/Content4";
import Content5 from "./layout/Content5";
import Content6 from "./layout/Content6";

import Header from "./layout/Header";

export default function Home() {
  return (
    <div className="relative flex flex-col overflow-hidden">
      <Header />
      <img
        src="/images/rosa.png"
        className="w-[580px] absolute -top-40 -right-60 z-10 lgg:w-[300px] lgg:-top-20 lgg:-right-28 lg:hidden"
        style={{ transform: "rotate(-95deg)" }}
        alt="Rosa"
      />
        <img
        src="/images/rosa.png"
        className="w-[580px] absolute top-[370px] -left-60 z-10 lgg:w-[300px] lgg:top-[370px]  lgg:-left-36 lg:hidden  "
        style={{ transform: "rotate(50deg)" }}
        alt="Rosa"
      />

      <Content1/>

      <img
        src="/images/flor.png"
        className="w-[400px] absolute  top-[750px] -right-20  z-10  rs:top-[1500px] lgg:w-[300px] macc:hidden"
        style={{ transform: "rotate(300deg)" }}
        alt="Rosa"
      />

     
      <img
        src="/images/rosa.png"
        className="w-[580px] absolute top-[1850px] -right-40 z-10 lgg:w-[300px] lgg:top-[2000px] lgg:-right-20 rss:hidden"
        style={{ transform: "rotate(-40deg)" }}
        alt="Rosa"
      />

<img
        src="/images/rosa.png"
        className="w-[580px] absolute top-[1850px] -left-40 z-10 lgg:w-[300px] lgg:top-[2000px] lgg:-left-20 rss:hidden"
        style={{ transform: "rotate(40deg)" }}
        alt="Rosa"
      />

      <Content3/>
      
      <Content5/>
      <Content6/>

      


      

      
    </div>
  );
}
