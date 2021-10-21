export default class SumService {
  sum(a: any, b: any) {
    const result = a + b;

    if (isNaN(result)) {
      throw new Error('Valor inválido');
    }
    return result;
  }
}