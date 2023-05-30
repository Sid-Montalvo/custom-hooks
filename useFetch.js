import { useEffect, useState } from "react";


export const useFetch = (url) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        haserror: null
    })


    const getfetch = async () => {

        setState({
            ...state,
            isLoading:true,
        }) 
            

        const resp = await fetch(url );
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            haserror: null,
        })
    }

    useEffect(() => {
        getfetch();  
    }, [url])
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        haserror: state.haserror

    };
  
  
}
