import React from "react"
import styled from "styled-components"

const SConcert = styled.div`
  display: grid;
  position: relative;
  max-width: 600px;
  margin: auto;
  grid-template-columns: 100px 150px auto 70px;
  font-family: "Kaushan Script", cursive;
  font-size: 1.2rem;
  font-weight: bold;
  span {
    text-align: left;
    margin-bottom: 30px;
  }

  a {
    font-weight: 700;
    text-decoration: none;
  }
`

const SoldOut = styled.div`
  // width: 60px;
  // height: 60px;
  border-radius: 30px;
  text-shadow: 2px 2px 2px #a40a05;
  position: absolute;
  top: -0px;
  right: 0;
  // background-color: red;
  // border: 1px solid white;
  transform: rotate(10deg);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Concert = ({ date, city, location, ticketLink, soldOut }) => (
  <SConcert>
    <span>{date}</span>
    <span>{city}</span>
    <span>{location}</span>
    <span>
      {ticketLink && !soldOut && (
        <a href={ticketLink} target="_blank" rel="noopener">
          Tickets
        </a>
      )}
      {soldOut && <SoldOut>SOLD OUT</SoldOut>}
    </span>
  </SConcert>
)

export default Concert
