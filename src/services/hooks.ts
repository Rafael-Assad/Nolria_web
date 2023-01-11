import { useEffect, useState } from 'react'
import { Illustration } from '../types'
import backEnd from './api'

export const useIllustrations = () =>{
  const [illustrations, setIllustrations] = useState<Illustration[]>([])

  useEffect(() => {
    backEnd.get('illustrations')
      .then(response => setIllustrations(response.data))
  }, [])
  
  return illustrations
}
