import React, { useState } from 'react'

export default function ListTitels({ setShowCoin }) {
  const [activeTitle, setactiveTitle] = useState("all")
  const handleActiveTitle = (title) => {
    setShowCoin(title);
    setactiveTitle(title)
  }
  return (
    <div className="list-titles">
      <div onClick={() => { handleActiveTitle("all") }} className={activeTitle == "all" ? "title active-title" : "title"}>
        <p>All</p>
      </div>
      <div onClick={() => { handleActiveTitle("Ascending") }} className={activeTitle == "Ascending" ? "title active-title" : "title"}>
        <p>Ascending</p>
      </div>
      <div onClick={() => { handleActiveTitle("Descending") }} className={activeTitle == "Descending" ? "title active-title" : "title"}>
        <p>Descending</p>
      </div>
      <div onClick={() => { handleActiveTitle("Favorites") }} className={activeTitle == "Favorites" ? "title active-title" : "title"}>
        <p>Favorites</p>
      </div>
    </div>
  )
}
