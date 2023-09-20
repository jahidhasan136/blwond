import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import TicketListPage from './pages/TicketListPage'
import CustomerDetailsPage from './pages/CustomerDetailsPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ticket-list' element={<TicketListPage />} />
          <Route path='/customer-details' element={<CustomerDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
