import React from "react"
import styled from "styled-components"

const SConcert = styled.div`
  display: grid;
  position: relative;
  max-width: 600px;
  margin: auto;
  grid-template-columns: 100px 150px auto 70px 70px;
  span {
    text-align: left;
    margin-bottom: 20px;
  }
`

const SoldOut = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-shadow: 2px 2px 2px #a40a05;
  position: absolute;
  top: -13px;
  right: 0;
  // background-color: red;
  // border: 1px solid white;
  transform: rotate(20deg);
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
      {ticketLink && (
        <a href={ticketLink} target="_blank">
          Tickets
        </a>
      )}
    </span>
    {soldOut && <SoldOut>SOLD OUT</SoldOut>}
  </SConcert>
)

export default Concert
