import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { DUMMY_EXPENSES } from '../data/dummy-expenses';
import { getDateMinusDays } from '../util/date';


export default function RecentExpenses() {
  const recentExpenses = DUMMY_EXPENSES.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' fallBackText = 'No expenses registered for the last 7 days'/>
}
