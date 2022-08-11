import instance from "./instance.js";

const deleteCardFunc = async (id, someDeleteFunction)=>{
    try{
        debugger;
        const {status} = await instance.delete(`/${id}`);
        if (status === 200){
            deleteCardStorage(id);
            someDeleteFunction();
        } 
    }
    catch(error){
        console.error(`deleteCardFunc. The server returned status: ${error} - ${error.response.data}`);
    }
}

export default deleteCardFunc;