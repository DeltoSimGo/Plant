import Banner from '../src/components/Banner'
import logo from '../src/assets/logo.png'
// import Cart from './Cart'
import ShoppingList from '../src/components/ShoppingList'

function App() {
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            {/* <Cart /> */}
            <ShoppingList />
        </div>
    )
}

export default App