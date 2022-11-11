export class Gateway {

  collect(value: number): boolean {
    
    const valueFormated = Intl.NumberFormat('pt-br', {
      currency: 'BRL',
      style: 'currency'
    }).format(value)

    console.log(valueFormated)
    
    const response = [true, false]
    return response[Math.round(Math.random())]
  }

}