const apiRequest = async (url = "",optionObj = null,errorMessage = null)=>{
    try{
        
        const response = await fetch(url,optionObj)
        if(!response.ok) throw Error("Reload the page")
        else console.log("successfuly updated")  
    }catch(error){
        return error.Message()
    }finally{
        return errorMessage
        console.log("successfuly updated final")
    }
}

export default apiRequest