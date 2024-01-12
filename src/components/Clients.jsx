import React from "react";
import clients1 from "../assets/clients1.jpg";
import clients2 from "../assets/clients2.png";
import clients3 from "../assets/clients3.png";
import clients4 from "../assets/clients4.png";


export default function Clients() {
  const data = [clients1, clients2, clients3, clients4];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}