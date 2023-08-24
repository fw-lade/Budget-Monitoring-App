//library
import { toast } from "react-toastify";

//helper
import { deleteItem, getAllMatchingItems } from "../helpers";

//rrd
import { redirect } from "react-router-dom";

export function deleteBudget({params}) {
    try {
        deleteItem({
            key : 'budgets',
            id : params.id,
        });

        const associatedExpenses = getAllMatchingItems({
            category : 'expenses',
            key : 'budgetId',
            value : params.id,
        });

        associatedExpenses.forEach((expense) => {
            deleteItem({
                key : 'expenses',
                id : expense.id,
            })
        })

        toast.success('Revenue deleted successfully!')
    } catch (e) {
        throw new Error("There was a problem deleting this revenue.");
    }
    return redirect('/')
}