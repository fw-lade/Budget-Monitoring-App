import { createBrowserRouter, RouterProvider, } from "react-router-dom"

//Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard"
import Error from "./pages/Error"
// import PrevBudget from "./pages/PrevBudget"
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage"
import ExpensesPage, { expensesAction, expensesLoader } from "./pages/ExpensesPage"

//Library
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Layouts
import Main, { mainLoader } from "./layouts/Main";

//Actions
import { logoutAction } from "./action/logout";
import { deleteBudget } from "./action/deleteBudget";



const router = createBrowserRouter([
  
  {
    path : "/",
    element : <Main />,
    loader : mainLoader,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Dashboard />,
        loader : dashboardLoader,
        action : dashboardAction,
        errorElement : <Error />
      },
      {
        path : 'logout',
        action : logoutAction
      },
      {
        path : "expenses",
        element : <ExpensesPage />,
        loader : expensesLoader,
        action : expensesAction,
        errorElement : <Error />,
      },
      {
        path : "budget/:id",
        element : <BudgetPage />,
        loader : budgetLoader,
        errorElement : <Error />,
        action : budgetAction,
        children : [
          {
            path : 'delete',
            action : deleteBudget,
          }
        ]
      },
    ]
  },
  {
    path : "/about",
    element : <h1>About</h1>,
  },
  
]);
function App() {

  return (
    <div className="App">
      <RouterProvider router = {router} />
      <ToastContainer />
    </div>
  )
}

export default App
