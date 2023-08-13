import Work from './Work';

function Content({Error,data,handleChange,handleClick}) {
  

    // const name = ()=> {
    //     console.log("Hi guys");
    // }
    // const handleClick = ()=>{
    //     const random = Math.floor(Math.random()*3);
    //     const roles = ["Web Developer","App Developer","Hacker"]; 
    //     setPosition(roles[random]);

    // }
    // const [position,setPosition] = useState("Hacker");
    // console.log(position);

    // function handleClick(e){
    //   e.preventDefault();
    //     console.log(e);
    //     setPosition(myRole())
    //     console.log(position);
    // }

    
    
  return (
    
    /* <p>
        I am a {position}
      </p>
      <button onClick={(e)=> handleClick(e)}>Role</button>
        <button onClick={name}>Add</button> */
        
        /* // {(data.length)?
        // console.log(data.length)
        
        // <ul>
        // {data.map((item) =>(
        //   <li>
        //   <input 
        //   type='checkbox' key={item.id}
        //   checked ={item.checked}
        //   onChange={() =>handleChange(item.id)}
        //   />
        //   <label
        //   style={(item.checked) ? {textDecoration:"line-through" }: null}
        //    onDoubleClick={() =>handleChange(item.id)}>{item.item}</label>
        //   <button onClick={()=>handleClick(item.id)}>Delete</button>
          
        // </li>
        // ))
          
        // }
        // </ul> */
        <main>
        {/* {Error && <p>Error :{Error}</p>} */}
          <div>Content<br />

          {(data.length)?
          
          <Work 
          
          data= {data}
          
          handleChange={handleChange}
          handleClick={handleClick}
          tittle = "Dhana"
          />
        : <p>Your todo list is empty.</p>}
      </div>
      </main>
  )
}

export default Content