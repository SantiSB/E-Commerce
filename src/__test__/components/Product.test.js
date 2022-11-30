import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product/>', () => {
  test('Render del componente Product', () => {
    const product = shallow(
        //El provider le pasa lo necesario de redux
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    //Significa que si esta ahciendo render
    expect(product.length).toEqual(1);
  });
  //Prueba el click de comprar
  test('Comprobar el boton de comprar', () => {
    //Simulamos una funcion sin llamar la real
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        {/* Pasamos los elementos por parametro */}
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );
    //Simular click
    wrapper.find('button').simulate('click');
    //Permite comprobar cuantas veces se ejecuto
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
