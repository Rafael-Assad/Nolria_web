import { useEffect, useState } from 'react'
import { IllustrationInfo } from '../types'
import backEnd from './api'

export const useIllustrations = () =>{
  const [illustrations, setIllustrations] = useState<IllustrationInfo[]>([])

  useEffect(() => {
    backEnd.get('illustrations')
      .then(response => setIllustrations(response.data))
  }, [])
  
  return illustrations
}
