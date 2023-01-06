import Autoimage from "../../components/autoimage/autoimage";
import css from "../../styles/autoimage.module.css";

function index() {
  const images = [
    "https://i.pinimg.com/564x/3c/9f/d7/3c9fd781eca8c486f76f0cfe82f4cce7.jpg",
    "https://i.pinimg.com/736x/64/f7/05/64f7051a4bcc8098f0aae03a5388589a.jpg",
    "https://i.pinimg.com/736x/c4/ff/a4/c4ffa41d37accb7e8a5cb0956280bab8.jpg",
    "https://i.pinimg.com/736x/9a/d0/07/9ad0070dfa9d4ac9159f89c48b206851.jpg",
  ];

  return (
    <>
      <div className={css.centerit}>
        <h1> Autoimage</h1>
        <div> image will change if press spacebar and click on image</div>
        <div> props</div>
        <div> images : image array </div>
        <div> theid : id for img tag </div>
        <div> theclass : className for img tag </div>
        <div> title : array of title for img tag </div>
        <div> alts : array of alt for img tag </div>
        <div> seconds : example (5) image will change after seconds </div>
        <Autoimage
          images={images}
          title={["monkey", "sky", "monkey with cigratte", "joker"]}
          theid="oneid"
          seconds="5"
          theclass="heroclass"
          alts={["monkey", "sky", "monkey with cigratte", "joker"]}
        />
      </div>
    </>
  );
}

export default index;
