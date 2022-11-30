import React from "react";
import {mount, shallow} from 'enzyme'
import { create } from 'react-test-renderer'
import ProviderMock from "../../__mocks__/ProviderMock";
import Header from '../../components/Header'

describe('<Header />', () => {
    //Prueba si se renderiza el componente
    test('Render del componente Header', () => {
        const header = shallow(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    })
    //Prueba si se renderiza el titulo esperado
    test('Render del titulo', () => {
        const header = mount(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.find(".Header-title").text()).toEqual("Platzi Store")
    })
})

describe('Header snapshot', () => {
    test('Comprobar el snapshot de  header', () => {
        const header = create(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    })
})