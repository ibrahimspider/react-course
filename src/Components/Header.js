import Logo from "../React-icon.png";
export default function Header() {
  return (
    <div className="py-4 bg-slate-500 text-white">
      <ul className="flex justify-center items-center gap-3">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
        <img className="w-8" src={Logo} alt="logo" />
        <img  className="w-8" src={require("../React-icon.png")} alt="logo"/>
      </ul>
    </div>
  );
}
