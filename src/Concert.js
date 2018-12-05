import React from "react"
import styled from "styled-components"

const SConcert = styled.div`
  display: flex;
  position: relative;
  max-width: 600px;
  margin: auto;
  text-align: left;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  font-family: "Kaushan Script", cursive;
  font-size: 1.2rem;
  font-weight: bold;

  .date {
    width: 7rem;
  }

  .city {
    width: 10rem;
  }

  .location {
    flex: 1;
  }

  @media (max-width: 1000px) {
    margin-bottom: 3rem;
    max-width: 400px;
    .date {
      width: 40%;
    }
    .city {
      width: 60%;
    }
  }

  a {
    font-weight: 700;
    text-decoration: none;
  }
`

const SoldOut = styled.div`
  text-shadow: 2px 2px 2px #a40a05;
  position: absolute;
  top: -0px;
  right: 0;
  transform: rotate(10deg);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    position: initial;
  }
`

const Concert = ({ date, city, location, ticketLink, soldOut }) => (
  <SConcert>
    <div className="date">{date}</div>
    <div className="city">{city}</div>
    <div className="location">{location}</div>
    <div className="tickets">
      {ticketLink && !soldOut && (
        <a href={ticketLink} target="_blank" rel="noopener">
          Tickets
        </a>
      )}
      {soldOut && <SoldOut>SOLD OUT</SoldOut>}
    </div>
  </SConcert>
)

export default Concert
