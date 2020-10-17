import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';


export default function Sidebar (props: any) {
  const { goBack } = useHistory()

  return (
    //TODO: props.children customized for each page
    <aside
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
            <button type="button" onClick={goBack}>
              <FiArrowLeft size={24} color="#FFF" />
            </button>
          )}
      </footer>
    </aside>
  )
}
