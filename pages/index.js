import Link from "next/link";
import link from "../functions/thelinks";
function index() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "1.2em 0 1em 0" }}>
        Demo of Aasan Components
      </h1>
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
