import React from 'react'
import ReactDOM from 'react-dom'
import { fireEvent, render,screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Sidebar from './Sidebar'

const SmallerSidebar = <Sidebar />
const BiggerSidebar = <Sidebar 
        sizeClass="bigger"
        header={
          <span aria-label="header-content">
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estao esperando a sua visitas :)</p>
          </span>          
        }
        footer={
          <span aria-label="footer-content">
            <strong>Rio do Sul</strong>
            <div>Santa Catarina</div>
          </span> 
        }
      />

test('COMPONENT SIDEBAR - TEST 1.1 - Renders without crash variant smaller', () => {
  const div = document.createElement('div')
  ReactDOM.render(SmallerSidebar, div)
})

test('COMPONENT SIDEBAR - TEST 1.2 - Renders without crash variant bigger', () => {
  const div = document.createElement('div')
  ReactDOM.render(BiggerSidebar, div)
})




test('COMPONENT SIDEBAR - TEST 2.1 - Passing props => props.sizeClass', () => {
  render(BiggerSidebar)

  const elementHandler = screen.getByLabelText('main-sidebar')

  expect(elementHandler).toHaveAttribute('class')
})

test('COMPONENT SIDEBAR - TEST 2.1 - Testing props => props.header', () => {
  render(BiggerSidebar)

  const elementHandler = screen.getByLabelText('main-sidebar')

  expect(elementHandler).toBeInTheDocument()
})

test('COMPONENT SIDEBAR - TEST 2.3 - Testing props => props.footer', () => {
  render(BiggerSidebar)

  const elementHandler = screen.getByLabelText('main-sidebar')

  expect(elementHandler).toBeInTheDocument()
})

// TODO: solve history mock
test('COMPONENT SIDEBAR - TEST 3.1 - Testing goBack() action in smaller sidebar', () => {
  const goBack = jest.fn()
  render(SmallerSidebar)

  const elementHandler = screen.getByLabelText('main-sidebar-btn')
  fireEvent.click(elementHandler)
  expect(goBack).toHaveBeenCalled()
})