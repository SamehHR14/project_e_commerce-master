const { useErrorHandlingContext } = require("context/ErrorsContext")


export const useHandlerErrors = ()=>{
    const {snackbar: {
          setMsg,
          setSeverity,
          setOpen
        }, } = useErrorHandlingContext();
    return {
        onSuccess :(msg)=>{
setMsg(msg);
setSeverity('success');
setOpen(true);
        },
        onError:(msg)=>{

setMsg(msg);
setSeverity('error');
setOpen(true);
        }

    }

}
