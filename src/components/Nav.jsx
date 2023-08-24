//rrd imports
import { Form, NavLink } from 'react-router-dom'

// library imports 
import { TrashIcon } from '@heroicons/react/24/solid'

//assets
import logo from '../assets/logo.svg'


const Nav = ({ userName }) => {
  return (
    <nav>
        <NavLink to="/" aria-label='Home' >
            <img src={logo} alt="" height={30} />
            <span>BudgetNaija</span>
        </NavLink>
        {/* <NavLink to="/2022-budget" aria-label='previous-year' >
            <span>2022 Budget</span>
        </NavLink> */}
        {
            userName && (
                <Form method='POST' 
                action='/logout' 
                onSubmit={(event) => {
                    if (!confirm("Delete user and all data?")){
                        event.preventDefault()
                    }
                }}>
                    <button type='submit' className='btn btn--warning'>
                        <span>Delete User</span>
                        <TrashIcon width={20} />
                    </button>

                </Form>
            )
        }
    </nav>
  )
}

export default Nav