import React, { useState, useEffect } from 'react'
import data from './data'

const Context = React.createContext()

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([])
  const [mydata, setmyData] = useState(data)
  const [cartItems, setCartItems] = useState([])
  const [cartTotalPrice, setCartTotalPrice] = useState(0)
  const [cartsize, setCartsize] = useState(0)

  const [tot, setTot] = useState(0)

  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
  }, [])

  function toggleFavorite(id) {
    const updatedArr = mydata.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isfavorite: !photo.isfavorite }
      }
      return photo
    })

    setmyData(updatedArr)
  }

  function addToCart(item, itemcount = null) {
    checkToadd(item, itemcount)
  }

  function checkToadd(item, itemcount = 0) {
    var endcartItems = []
    const itemDer = cartItems.some((cartItem) => cartItem.id === item.id)
    // console.log(itemDer)
    if (itemDer) {
      const endcartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            count: (cartItem.count += itemcount),
          }
        } else {
          return { ...cartItem }
        }
      })
      setCartItems(endcartItems)
      totalItems(endcartItems)
      overAllPrice(endcartItems)
    } else {
      const newproduct = [...cartItems, { ...item, count: 1 }]
      setCartItems(newproduct)
      setCartsize((prevsize) => prevsize + 1)
      totalItems(newproduct)
      overAllPrice(newproduct)
      // AddTolocalStorage([...cart, { ...item, count: 1 }])
    }
  }

  function removeFromCart(id) {
    const newcart = cartItems.filter((cartitem) => cartitem.id != id)
    setCartItems(newcart)
    totalItems(newcart)
    overAllPrice(newcart)
  }

  function incrementPrice(id, value) {
    let amt = 0
    const indProduct = cartItems.map((item) => {
      amt += item.total
      if (item.id === id) {
        return { ...item, qty: value, total: value * item.price }
      }
      return item
    })
    setTot(amt)
    setCartItems(indProduct)
  }

  function totalItems(items = cartItems) {
    // this method uses reduce to add all the quantity of product in the cart item
    const tot =
      items &&
      items.reduce((prev, current) => {
        return (prev += current.count)
      }, 0)

    setCartsize(tot)
  }

  function overAllPrice(items = cartItems) {
    // this method uses reduce to add all the quantity of product in the cart item
    const tot =
      items &&
      items.reduce((prev, current) => {
        return (prev += current.count * current.price)
      }, 0)

    setCartTotalPrice(tot)
  }

  return (
    <Context.Provider
      value={{
        mydata,
        toggleFavorite,
        addToCart,
        cartsize,
        cartItems,
        cartTotalPrice,
        removeFromCart,
        incrementPrice,
        tot,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
