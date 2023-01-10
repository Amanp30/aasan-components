import Link from "next/link";
import Menu from "../components/menu/menu";
function index() {
  return (
    <>
      <Menu />
      <div className="divtwoji">
        <h1>Aasan Components</h1>
        <a href="https://github.com/Amanp30/aasan-components">Github</a>
        <Link href="/autoimage">Auto Image</Link>
        <Link href="/actionsdropdown">Actions Dropdown</Link>
        <Link href="/pinterestgrid">Pinterest Layout</Link>
        <Link href="/nointernet">No internet</Link>
        <Link href="/mobileshare">Mobileshare</Link>
        <Link href="/accordianexample">accordian example</Link>
        <Link href="/geolocation">Latitude and longitude</Link>
        <Link href="/menu">menu</Link>
      </div>
    </>
  );
}

export default index;
