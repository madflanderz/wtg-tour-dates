import React, { useEffect, useState } from "react"
import axios from "axios"
import Concert from "./Concert"

const url =
  "https://sheets.googleapis.com/v4/spreadsheets/1nN-eyoo31HoqvMs14JiR5k06dr8pj-RPspRg-vXHovQ/values/A2:E40?key=AIzaSyApM2uwBC1huzhQWYpEcQ5YDSYlaHlyA2Q"

const Concerts = () => {
  const [concerts, setConcerts] = useState([])

  useEffect(() => {
    axios
      .get(url)
      .then(function(response) {
        console.log(response)
        let items = response.data.values
        items = items
          .filter(item => item[0])
          .map(item => ({
            date: item[0],
            city: item[1],
            location: item[2],
            ticketLink: item[3],
            soldOut: item[4] === "TRUE"
          }))

        setConcerts(items)
      })
      .catch(function(error) {
        console.log(error)
      })
  }, [])

  return (
    <section>
      <h1>Tour Dates</h1>
      {concerts.map(concert => (
        <Concert key={concert.date} {...concert} />
      ))}
    </section>
  )
}

export default Concerts
