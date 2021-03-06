import React from 'react'

function TableEntry({entry, index}) {
  
  return (
    <tr>
        <td>{index+1}</td>
        <td>{entry.student.name + " " + entry.student.last_name}</td>
        <td>{entry.student.school_id}</td>
        {/* <td>{entry.hp}</td> */}
        <td className="text-center">{entry.xp}</td>
        <td className="text-center">{entry.coins}</td>
    </tr>
  )
}

export default TableEntry
