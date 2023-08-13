import Item from "./Item"

const Work = ({data,handleChange,handleClick,tittle}) => {
  return (
    <div>
        <h1>{tittle}</h1>
        <ul>
        {data.map((item) =>(
          <Item
          data = {item}
          key={item.id}
          handleChange = {handleChange}
          handleClick = {handleClick}
          />
          
        ))
          
        }
        </ul>
    </div>
  )
}
export default Work