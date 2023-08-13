import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React, { useState , useEffect } from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {

  // const myRole = ()=>{
  //   const random = Math.floor(Math.random()*3);
  //   const role = document.getElementById("role");
  //   const myDomain = ["Web Developer","App Developer","Hacker"];
  //   role.textContent = myDomain[random];
  // }

  //Props and Prop Drilling
  const [works,setWorks] = useState( []
  //   [
  //   {
  //     id : 1,
  //     item :"Code",
  //     checked : true
  //   },
  //   {
  //     id : 2,
  //     item :"Eat",
  //     checked : true
  //   },
  //   {
  //     id : 3,
  //     item :"Repeat",
  //     checked : true
  //   }
  // ]
  // JSON.parse(localStorage.getItem('mylist'))
  );

  const [addItem,setAddItem] = useState('')
  const [searchitem,setSearchitem] = useState("")
  const [fetchError,setFetcherror] = useState(null)
  const [isLoading,setIsLoading] = useState(true)

  //useEffect Hook
  // useEffect(()=>{
    // console.log("Loading")
    // const myWork = JSON.parse(localStorage.getItem('mylist'))
    // setWorks([...myWork])
  // },[])

  //Fetch API Data
  const FETCH_API = ("http://localhost:3500/myTask")

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch(FETCH_API);
        if (!response.ok) throw Error("Data Not Received")
        console.log(response)
        const listItems = await response.json();
        console.log(listItems)
        setWorks(listItems);
        setFetcherror(null)
      }catch(error){
        console.log(error.message);
        setFetcherror(error.message)
      }finally{
        setIsLoading(false)
      }
      
    }
    setTimeout(() => {
      (async ()=> await fetchData())()  
    }, 2000);
    
  },[])

  const handleChange = async(changeid)=>{
    const newArray = works.map((item)=>(
      item.id === changeid ? {...item,checked:!item.checked}: item))
      setWorks(newArray);

      const updateItem = newArray.filter((item)=>
        item.id === changeid
      )
      console.log(updateItem)
      console.log ({checked:updateItem[0].checked})
      const updateOptions = {
        method : 'PATCH',
        headers :{
          'Content-Type' : 'application/json'},
          body : JSON.stringify({checked:updateItem[0].checked})
      }
      const requestURL = `${FETCH_API}/${changeid}`
      console.log(requestURL)
  
      const result = await apiRequest(requestURL,updateOptions)
      if (result) setFetcherror(result)
      console.log("HI")
      // localStorage.setItem("mylist",JSON.stringify(newArray));
  }

  const handleClick = async (id)=>{
    const deleteArray = works.filter((item)=> item.id != id);
    setWorks(deleteArray);
    // localStorage.setItem("mylist",JSON.stringify(deleteArray));
    const deleteItem = works.filter((item)=>
      item.id === id
    )
    const optionObject = {
      method : "DELETE",
      headers :{
        'Content-Type' : 'application/json'},
        body : JSON.stringify(deleteItem)
    }

    const requestURL = `${FETCH_API}/${id}`

    const result = await apiRequest(requestURL,optionObject)
    setFetcherror(result)
    
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(!addItem){
      return ;}
    addItemlist(addItem);
    setAddItem('');
  }

  const addItemlist = async (item)=>{
        const id = works.length?works[works.length-1].id+1:1;
        const newElement = {id,checked:false,item};
        const listItems = [...works,newElement];
        setWorks(listItems);
        // localStorage.setItem("mylist",JSON.stringify(listItems));

        const optionObject = {
          method : "POST",
          headers : {
            'Content-Type' : "application/json"
          },
          body : JSON.stringify(newElement)
        }

        const result = await apiRequest(FETCH_API,optionObject)
        setFetcherror(result);
  }
  return (
    <div className="App App-header">
      <Header />
      <AddItem 
      addItem = {addItem}
      setAddItem = {setAddItem}
      handleSubmit = {handleSubmit}
      />
      <SearchItem
      searchitem = {searchitem}
      setSearchitem = {setSearchitem}
            />
      {isLoading && <p>Loading...</p>}
      {fetchError && <p>Error: {fetchError}</p>}
      {!isLoading && !fetchError && <Content
      Error = {fetchError}
      data={works.filter((item)=>item.item.toLowerCase().includes(searchitem.toLowerCase()))}
      handleChange = {handleChange}
      handleClick = {handleClick}
       />}
      
      <Footer length = {works.length}/>
    </div>
  );
}

export default App;
