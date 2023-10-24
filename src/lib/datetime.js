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
