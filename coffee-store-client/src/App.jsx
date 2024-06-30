import { useLoaderData } from 'react-router-dom'
import CoffeeCart from "./components/CoffeeCart.jsx";
import { useState } from 'react';

function App() {
  const loadedCoffees=useLoaderData()
  const [coffees,setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-20'>
      <h1 className='text-5xl text-center my-12 font-semibold text-purple-600'>Our Popular Products</h1> 
      <div className="grid md:grid-cols-2 gap-4">
        {
          coffees.map(coffee => <CoffeeCart key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCart>)
        }
      </div>
      
    </div>
  )
}

export default App
