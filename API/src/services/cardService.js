// /* eslint-disable no-undef */

// import { useState, useEffect } from 'react'
// import { cardModel } from '~/models/cardModel'

// const CART_KEY = 'cart'

// const useCartService = () => {
//   const [items, setItems] = useState([])

//   useEffect(() => {
//     const storedCart = localStorage.getItem(CART_KEY)
//     if (storedCart) {
//       setItems(JSON.parse(storedCart))
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem(CART_KEY, JSON.stringify(items))
//   }, [items])

//   const validateItem = (item) => {
//     const { error } = cardModel.CARD_COLLECTION_SCHEMA.validate(item)
//     if (error) {
//       throw new Error(`Invalid order item: ${error.message}`)
//     }
//   }

//   const increase = (item) => {
//     validateItem(item)
//     setItems((prevItems) => {
//       const existItem = prevItems.find((x) => x.slug === item.slug)
//       if (existItem) {
//         return prevItems.map((x) =>
//           x.slug === item.slug ? { ...x, qty: x.qty + 1 } : x
//         )
//       } else {
//         return [...prevItems, { ...item, qty: 1 }]
//       }
//     })
//   }

//   const decrease = (item) => {
//     validateItem(item)
//     setItems((prevItems) =>
//       prevItems
//         .map((x) => (x.slug === item.slug ? { ...x, qty: x.qty - 1 } : x))
//         .filter((x) => x.qty > 0)
//     )
//   }

//   const remove = (item) => {
//     validateItem(item)
//     setItems((prevItems) => prevItems.filter((x) => x.slug !== item.slug))
//   }

//   return {
//     items,
//     increase,
//     decrease,
//     remove
//   }
// }

// export default useCartService
