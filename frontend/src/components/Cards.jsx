import React from 'react'

function Cards({ item }) {
    console.log(item)
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt={item.name}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.Category}</div>
    </h2>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-md hover:bg-pink-700 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
        </div></>
  )
}

export default Cards
