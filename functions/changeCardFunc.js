import instance from "./instance.js";

const changeCardFunc = async (id, obj, someCallbackFunc)=>{
    try{
        const {status, data} = await instance.put(`/${id}`, obj);
        if(status === 200) {
            someCallbackFunc(data);
        }
    }   
    catch(error){
        console.error(`changeCardFunc. The server returned status: ${error} - ${error.response.data}`);
    }
}

export default changeCardFunc;