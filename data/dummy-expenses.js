import { getDateMinusDays } from '../util/date';

const today = new Date();

// Dates are relative to "today" so the Recent Expenses filter always has
// something to show. The first five fall inside the last 7 days.
export const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: getDateMinusDays(today, 1),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: getDateMinusDays(today, 2),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: getDateMinusDays(today, 3),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: getDateMinusDays(today, 5),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: getDateMinusDays(today, 6),
  },
  {
    id: 'e6',
    description: 'Coffee beans',
    amount: 21.5,
    date: getDateMinusDays(today, 9),
  },
  {
    id: 'e7',
    description: 'A new backpack',
    amount: 74.0,
    date: getDateMinusDays(today, 14),
  },
  {
    id: 'e8',
    description: 'Groceries',
    amount: 132.45,
    date: getDateMinusDays(today, 30),
  },
  {
    id: 'e9',
    description: 'Concert tickets',
    amount: 95.0,
    date: getDateMinusDays(today, 45),
  },
];
