// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Card from "./Components/Card";
import { data } from "./data";
export default function App() {
  const dataShow = data.map((item, index) => (
    <Card
      key={index}
      img={item.img}
      title={item.title}
      desc={item.desc}
      review={item.review}
      price={item.price}
    />
  ));
  return (
    <div className="min-h-screen bg-slate-50 font-Roboto">
      <div className="max-w-7xl m-auto px-4">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 py-4">
          {dataShow}
        </div>
      </div>
    </div>
  );
}
library.add(fab, fas, far);
