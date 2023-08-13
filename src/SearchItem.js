const SearchItem = ({searchitem,setSearchitem}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text"
        role = "search"
        id="serch"
        placeholder="Search Items"
        value={searchitem}
        onChange={(e) => setSearchitem(e.target.value)}
        />
    </form>
  )
}
export default SearchItem