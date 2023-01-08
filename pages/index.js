import Link from "next/link";

function index() {
  return (
    <>
      <div className="divtwoji">
        <h1>Aasan Components</h1>
        <a href="https://github.com/Amanp30/aasan-components">Github</a>
        <Link href="/autoimage">Auto Image</Link>
        <Link href="/actionsdropdown">Actions Dropdown</Link>
        <Link href="/pinterestgrid">Pinterest Layout</Link>
        <Link href="/nointernet">No internet</Link>
      </div>
    </>
  );
}

export default index;
