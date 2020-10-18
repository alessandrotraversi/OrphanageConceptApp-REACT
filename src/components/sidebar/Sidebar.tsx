import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../../images/map-marker.svg';


export default function Sidebar (props: any) {
  const history = useHistory()
  //const { goBack } = useHistory()
  function goBack () { history.goBack() }

  return (
    <aside
      aria-label="main-sidebar"
      className={
        props.sizeClass == 'bigger' ? 'bigger' : 'smaller app-sidebar'
      }
    >
      <header>
        <img src={mapMarkerImg} alt="Happy" />
        {props.sizeClass == 'bigger' && <span>{props.header}</span>}
      </header>

      <footer>
        {props.sizeClass == 'bigger' ? (
            <span>{props.footer}</span>
          ) : (
            <button type="button" onClick={goBack} aria-label="main-sidebar-btn">
              <FiArrowLeft size={24} color="#FFF" />
            </button>
          )}
      </footer>
    </aside>
  )
}
