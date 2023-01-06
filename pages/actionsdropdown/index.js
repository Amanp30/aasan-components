import React, { useState, useEffect } from "react";
import Actionsdropdown from "../../components/actionsdropdown/actionsdropdown";
import axios from "axios";

function index() {
  async function deleteit(e) {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${e}`);
      alert(response.data.title + "deleting");
    } catch (error) {
      console.error(error);
    }
    console.log(e);
  }
  function edit(e) {
    alert("Edit function calling" + e);
  }

  function go(e) {
    alert(`id : ${e} - product page will open in new tab `);
    window.open(`/products/${e}`);
  }

  var arrayaction = [
    {
      name: "Delete",
      func: (index) => deleteit(index),
      logo: "https://www.svgrepo.com/show/468534/delete.svg",
    },
    {
      name: "Edit",
      func: (index) => edit(index),
      logo: "https://www.svgrepo.com/show/468744/edit-alt-4.svg",
    },
    {
      name: "View Product",
      func: (index) => go(index),
      logo: "https://www.svgrepo.com/show/467308/star.svg",
    },
  ];

  const [first, setfirst] = useState([]);
  console.log(first);

  async function getProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log();
      setfirst(response.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Demo actions dropdown </h1>
      <p>actions : array of name, image, and functions</p>
      <p>index : if you need to perfor some actions on data</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="gridit">
        <div>Name</div> <div>Price</div> <div></div>
        {first?.map((data, index) => {
          return (
            <>
              <div>{data.title}</div>{" "}
              <div>
                {data.price}
                {}
              </div>{" "}
              <div>
                <Actionsdropdown actions={arrayaction} index={data.id} />
              </div>
            </>
          );
        })}
      </div>
      <style jsx>{`
        .gridit {
          display: grid;
          grid-template-columns: 30% 30% 30%;
          align-items: center;
          grid-gap: 5%;
        }

        .gridit div {
          /*  width: 50em; */
        }
      `}</style>
    </>
  );
}

export default index;
