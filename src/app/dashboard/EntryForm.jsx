'use client'
import React, { useRef } from 'react'

export default function EntryForm({ handleCreateEntry }) {

  const ref = useRef(null);
  return (
      <form
          className="mb-4 w-full flex gap-x-2 items-center"
          action={(formData) => {
              handleCreateEntry(formData);
              ref.current?.reset();
          }}
          ref={ref}
      >
          <div className="grow">
              <label className='text-gray-300 text-sm font-bold mb-2 hidden' htmlFor="name" aria-label="New Entry"> New Name</label>
              <input
                  className="shadow appearance-none border-2 border-gray-700 rounded w-full py-2 px-3 text-gray 300 leading-tight focus:outline-none focus:shadow-outline bg-transparent" name="name"
                  id="name"
                  type="text"
                  placeholder="New Entry"
                />
          </div>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32">
              Add
            </button>
          
      </form>
  ) 
}
