import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { getDateMinusDays } from '../util/date';
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

export default function RecentExpenses() {
const expenseCtx = useContext(ExpensesContext);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' fallBackText = 'No expenses registered for the last 7 days'/>
}
