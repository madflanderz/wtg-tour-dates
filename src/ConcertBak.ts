import * as React from 'react'

interface ConcertInterface {
  date: string;
  city: string;
  location: string;
  ticketLink?: string;
  soldOut?: boolean;
}


const Concert = ({date, city}: ConcertInterface) => (
  <div>
    <h3>
    { date } { city }
  </h3>
  <h3> Location: { location } </h3>
  {
    ticketLink && (
      <a href={ ticketLink } target = "_blank" >
        Tickets
        < /a>
            )
  }
  { soldOut && <div>SOLD OUT < /div>}
    < /div>
)

export default Concert