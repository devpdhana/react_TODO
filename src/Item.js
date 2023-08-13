const Item = ({data,handleChange,handleClick}) => {
    // const item = data;
    // console.log(item)
  return (
    <li>
          <input 
          type='checkbox' key={data.id}
          checked ={data.checked}
          onChange={() =>handleChange(data.id)}
          />
          <label
          style={(data.checked) ? {textDecoration:"line-through" }: null}
           onDoubleClick={() =>handleChange(data.id)}>{data.item}</label>
          <button
          className="btnDelete" 
          onClick={()=>handleClick(data.id)}>Delete</button>
          
        </li>
  )
}
export default Item