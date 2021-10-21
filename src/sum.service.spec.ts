import SumService from "./sum.service";

describe('SumService', () => {
  let sumService;

  beforeEach(() => {
    sumService = new SumService();
  });

  it('dado que a função de soma receba como o primeiro valor "1", e como o segundo valor "2" então o resultado deverá ser "3"', () => {
    const a = 1;
    const b = 2;

    const result = sumService.sum(a, b);

    expect(result).toBe(3);
  });

  it('dado que a função de soma receba como o primeiro valor "A", e como o segundo valor "2" então ela deverá disparar uma exceção', () => {
    const a = 'A';
    const b = 2;

    try {
      sumService.sum(a, b);
    } catch (e) {
      expect(e.message).toBe('Valor inválido');
    }
  });
});