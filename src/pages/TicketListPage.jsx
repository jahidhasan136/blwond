import EventDetails from '../components/EventDetails/EventDetails'
import NextEvents from '../components/NextEvents/NextEvents'
import PageBanner from '../components/PageBanner/PageBanner'
import Tickets from '../components/Tickets/Tickets'

const TicketListPage = () => {
  return (
    <>
      <PageBanner />
      <EventDetails />
      <Tickets />
      <NextEvents />
    </>
  )
}

export default TicketListPage
