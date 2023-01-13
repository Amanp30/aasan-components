import Link from "next/link";
import link from "../functions/thelinks";
function index() {
  return (
    <>
      <h1>Aasan Components</h1>
      <div className="divtwoji">
        {link.map((item, index) => {
          return (
            <>
              <Link href={item.link}>{item.text}</Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default index;
