import React from "react";
import Location from "../components/locationbox/locationbox";
function location() {
  return (
    <div className="magicalcontainer">
      <div className="twogrid">
        <Location
          city="Delhi"
          address="BharatPe, Building No. 8 Tower C, 7th Floor, DLF Cybercity, Gurgaon-122002 Haryana"
          phone="8745326589"
          img="/static/delhi.svg"
        />
        <Location
          city="Bangalore"
          address="BharatPe, Building No. 4 Tower C, Next to Bank of India,  Haryana"
          phone="8745326545"
          img="/static/bangalore.svg"
        />
        <Location
          city="Hyderabad"
          address="45th Floor, Dwaraka Center Plot no. 42, Hitech City Rd, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081"
          phone="8745326126"
          img="/static/hyderabad.svg"
        />
        <Location
          city="Pune"
          address="Office No 118, City Point Building, Dhole Patil Road Pune - 411001"
          phone="8745786126"
          img="/static/pune.svg"
        />
        <Location
          city="Mumbai"
          address="4B-25, 7th Floor Pheonix Paragon Plaza, Pheonix Market City L.B.S. Marg, Kurla (West) Mumbai - 400070"
          phone="8745786126"
          img="/static/mumbai.svg"
        />
      </div>
    </div>
  );
}

export default location;
