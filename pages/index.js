import Link from "next/link";

function index() {
  var link = [
    { text: "Search component", link: "/searchcomponent" },
    { text: "Tooltip", link: "/tooltipcomponent" },
    { text: "Location Box", link: "/locationbox" },
    { text: "Auto Image", link: "/autoimage" },
    { text: "Dropdown", link: "/actionsdropdown" },
    { text: "Pinterest Grid", link: "/pinterestgrid" },
    { text: "No Internet", link: "/nointernet" },
    { text: "Share Navigator", link: "/mobileshare" },
    { text: "Faq ", link: "/accordianexample" },
    { text: "Timeline ", link: "/timeline" },
    { text: "Your Location ", link: "/geolocation" },
  ];

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
