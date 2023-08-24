//library imports
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'

//react
import { useEffect, useRef } from 'react'

//rrd imports
import { Form, useFetcher } from 'react-router-dom'

const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting"

    const formRef = useRef();
    const focusRef = useRef();


    useEffect(() => {
        if(!isSubmitting){
            formRef.current.reset()
            formRef.current.focus()
        }
    }, [isSubmitting])

  return (
    <div className='form-wrapper'>
        <h2 className="h3">
            Add Expenditures
        </h2>
        <fetcher.Form 
            method='post' 
            className='grid-sm'
            ref={formRef}
        >
            <div className="grid-xs">
                <label htmlFor="newBudget" >Expenditure Name</label>
                <input 
                    type="text" 
                    name='newBudget' 
                    id='newBudget' 
                    placeholder='e.g., Oil and Gas' 
                    required
                    ref={focusRef}
                />
            </div>
            <div className="grid-xs">
                <label htmlFor="newBudgetAmount" >Amount</label>
                <input 
                    type="number" 
                    name='newBudgetAmount' 
                    id='newBudgetAmount' 
                    placeholder='e.g., 300,000,000' 
                    required 
                    inputMode='decimal'
                />
            </div>
            <input type="hidden" name='_action' value='createBudget' />
            <button type="submit" className='btn btn--dark' disabled={isSubmitting}>
                {
                    isSubmitting ? <span>Submitting...</span> : (
                        <>
                            <span>Create Expenditure</span>
                            <CurrencyDollarIcon width={20} />
                        </>
                    )
                }
            </button>
        </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm