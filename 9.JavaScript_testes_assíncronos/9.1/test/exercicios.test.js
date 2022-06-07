const {uppercase} = require('../exercicios-test.js');

describe('Testa exercícios passados em aula, módulo 9.1', () => {
  it('Verifica a chamada de callback da função upppercase', (done) => {
    uppercase('dia', (str) => {
      try {
        expect(str).toBe('DIA')
        done()
      } catch (error) {
        done(error)
      }
    })
  })
})