import {useState, useEffect} from 'react';
import axios from 'axios';
import env from '../config/env.json'


export interface IUseFetch {
  path : string
  loading ? : {
    updateLoading : (value : boolean) => void
  }
}

export interface IReturnFetch {
  Response : any
  Error : boolean
  InfoError : any
}

export const useFetch = (props : IUseFetch) : IReturnFetch => {

  const [Response, setResponse] = useState <any>(null);
  const [Error, setError] = useState<boolean>(false);
  const [InfoError, setInfoError] = useState<any>(null);
  
  useEffect(() => {
    getData()
  }, [])


  const updateLoading = (value : boolean) => {
    if(props?.loading) {
      props.loading.updateLoading(value)
    }
  }


  const getData = async () => {
    try {
      const response = await axios.get(`${env.backend.url}${props.path}`)
      setResponse(response)
      updateLoading(false)
      setError(false)

    } catch (error) {

      setInfoError(error)
      setError(true)
      updateLoading(false)
    }
  }


  return {
    Response : Response,
    Error : Error,
    InfoError : InfoError
  };
}