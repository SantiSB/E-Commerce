import getData from "../../utils/getData";

describe('Fetch API', () => {
    beforeEach(() => {
        fetch.resetMocks();
    })

    test('Llamar api y retoernar datos', () => {
        fetch.mockResponseOnce(JSON.stringify({data: '12345'}))
        getData('https://google.com')
        .then((response) => {
            expect(response.data).toEqual('12345')
        })
    })  
})