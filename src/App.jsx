import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recomanded from './Recomanded/Recomanded'
import Sidebar from './Sidebar/Sidebar'
import prducts from './db/data'
import Cart from './Components/Cart'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //input filter
  const [query,setQuery] = useState("");

  const handleInputChange = event => {
     setQuery(event.target.value)
  }

  const filteredItems = prducts.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1))
   
  //radio filter
   const handleChange = event => {
    setSelectedCategory(event.target.value)
   }

   //buttons filter
   const handleClick = event => {
    setSelectedCategory(event.target.value)
   }

   function filteredData(products, selected,query){
       let filteredProducts = products

       //filtering input items
       if(query){
           filteredProducts = filteredItems
       }

       //selected filter
       if(selected){
        filteredProducts = filteredProducts.filter(({category,color,company,newPrice, title}) =>
          category === selected || 
         color === selected ||
          company === selected ||
           newPrice ===selected ||
            title === selected
          )
       }

       return filteredProducts.map(({img,title,star,reviews,newPrice}) => (
        <Cart key={Math.random()}
          img={img}
          title= {title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
        />
       ))
   }

return (
<div>
  <Sidebar/>
<Nav/>
<Recomanded/>
<Products/>

</div>

  )
}

export default App
