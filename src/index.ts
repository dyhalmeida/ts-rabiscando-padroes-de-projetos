import { Newsletter } from './class/newsletter'
import { Employee } from './class/employee'
import { Client } from './class/client'
import { Partner } from './class/partner'
import { Provider } from './class/provider'

const newsletter = new Newsletter()

const employee1 = new Employee('Diego Almeida', 'diego.almeida@gmail.com', newsletter)
const client1 = new Client('Laura', 'laura.almeida@gmail.com', newsletter)
const provider1 = new Provider('Mayara Rocha', 'mayrocha@gmail.com', newsletter)
const partener1 = new Partner('Marcos Lopes', 'marcos.lopes@gmail.com', newsletter)

/**
 * Envia a primeira mensagem
 */
newsletter.addMessage('Vasco vence ituano por 1 x 0 e retorna a elite do futebol brasileiro')

/**
 * Remove cliente da inscrição
 */
newsletter.removeObserver(client1)
newsletter.addMessage('Vasco demite técnico jorginho e inicia um novo planejamento')

/**
 * Adiciona o cliente novamente na inscrição
 */
newsletter.registerObserver(client1)
newsletter.addMessage('Vasco entra em contato com técnico português')


