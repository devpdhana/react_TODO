import { useRef } from "react"

const AddItem = ({addItem,setAddItem,handleSubmit}) => {

  const inputRef = useRef()
  return (
    <form  onSubmit={handleSubmit}>
        <label className="addTasklabel">Add Task</label>
        <input 
        ref={inputRef}
        value={addItem}
        onChange={(e)=>setAddItem(e.target.value)}
        type="text"
        autoFocus
        required
        placeholder="Add Task"
       id = "addItem"
         />
         <button
         className="btnAdd"
         onClick={()=>inputRef.current.focus()}
          type="submit">ADD</button>
    </form>
  )
}
export default AddItem