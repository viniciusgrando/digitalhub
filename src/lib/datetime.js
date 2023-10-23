import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * formatDate
 */

export function formatDate(date, pattern = 'dd ' + 'MMMM, yyyy') {
  return format(parseISO(date), pattern, { locale: ptBR });
}

/**
 * sortObjectsByDate
 */

export function sortObjectsByDate(array, { key = 'date' } = {}) {
  return array.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}

// Exemplo de uso:
const dataExemplo = '2023-10-20'; // Certifique-se de que a data está no formato ISO (YYYY-MM-DD)
const dataFormatada = formatDate(dataExemplo);
console.log(dataFormatada); // Irá imprimir "20 de outubro de 2023"
