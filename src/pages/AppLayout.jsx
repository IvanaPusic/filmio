import React from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { collection, getDocs } from 'firebase/firestore';

const AppLayout = () => {
  const [items, setItems] = useState([]);
  const itemsCollection = collection(db, "film");

  const getAllItems = async () => {
    try {
      const snapshot = await getDocs(itemsCollection);
      const itemsArray = [];
      snapshot.forEach(doc => {
        itemsArray.push(doc.data());
      });
      setItems(itemsArray);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // getAllItems();
  },[]);
  console.log(items)
  return (
    <>
      <header>
        <nav>
          Navigagtion
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default AppLayout