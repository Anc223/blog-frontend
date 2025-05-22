import React from 'react'

function DashboardCard({title, value}) {
  return (
    <div className='dashbrd-grid'>
    <div className='grid'>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
    </div>
  )
}

export default DashboardCard