import React from 'react'

function TableEntry({entry}) {
  
  return (
    <tr>
        <td>{entry.position}</td>
        <td>{entry.name}</td>
        <td>{entry.id}</td>
        <td>{entry.hp}</td>
        <td>{entry.xp}</td>
        <td>{entry.coins}</td>
    </tr>
  )
}

export default TableEntry
