import { useLocation } from 'react-router-dom'
import { useHash } from '../../services/hooks'

import {  getIllustrationTypesObj } from './scripts'
import { MenuContainer } from './style'


const PortifolioMenu = () => {
  const location = useLocation()

  const currentHash = location.hash

  const illustrationHashs = useHash()

  const ilustrationTypes = getIllustrationTypesObj(illustrationHashs)

  return (
    <MenuContainer>
      <ul>
        {ilustrationTypes.map(({id, title, hash}) => {
          if(id === 1) {
            return (
              <li key={id}
                className={currentHash === hash || currentHash === '' ? 'active': ''}
              >
                <a href={hash}>
                  <p>
                    {title}
                  </p>
                </a>
              </li>
              )
          } else {
            return (
            <li key={id}
              className={currentHash === hash ? 'active': ''}
            >
              <a href={hash}>
                <p>
                  {title}
                </p>
              </a>
            </li>
            )
          }
        })}
      </ul>
    </MenuContainer>
  )
}

export default PortifolioMenu