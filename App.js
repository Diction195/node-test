import React from 'react';
import './App.css';
import {useState} from 'react';
import Axios from 'axios'

function App() {
  const [CategoryId, setCategoryId] = useState(0);
  const [CategoryName , setCategoryName] = useState('');

  const [categoryList, setCategoryList] = useState([]);

  const addCategory = () => {
    Axios.post('http://localhost:3001/create', {
      CategoryId: CategoryId,
      CategoryName: CategoryName
    }).then(() => {
      setCategoryList([...categoryList, {
        CategoryId: CategoryId,
        CategoryName: CategoryName
      }])
    });
  };

  const getCategories = () => {
    Axios.get('http://localhost:3001/categories').then((response) => {
      setCategoryList(response.data)
    });
  }

  return (
    <div className="App">
      <div className="categorymaster">
        <header>Category Master</header><br/>
        <label>CategoryId</label>
        <input
          type="number" 
          onChange={(event) => {
            setCategoryId(event.target.value);
          }}
        ></input>
        <label>CategoryName</label>
        <input 
          type="text" 
          onChange={(event) => {
            setCategoryName(event.target.value);
          }}
        />  
        <button onClick={addCategory}>Add Category</button><br />
      </div>
      <div className="category">
        <button onClick={getCategories}>Show Category</button>

        {categoryList.map((val,key) => {
          return (
           <div className="category2">
             <h3>CategoryId: {val.CategoryId}</h3>
             <h3>CategoryName: {val.CategoryName}</h3>
           </div>
          ); 
        })}
      </div>
    </div>
  );
}

export default App;
