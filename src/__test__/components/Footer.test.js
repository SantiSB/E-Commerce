import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer'
import Footer from '../../components/Footer';

const footer = mount(<Footer />);

describe('<Footer />', () => {
  //Prueba para ver si renderiza el componente
  test('Render del componente Footer', () => {
   
    expect(footer.length).toEqual(1);
  });
  //Prueba para ver si el elemento con la clase Footer-title tiene el texto 'Platzi store'
  test('', ()=>{
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  })
});

describe('Footer Snapshot', () => {
  test('comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />)
    expect(footer.toJSON()).toMatchSnapshot();
  })

})
