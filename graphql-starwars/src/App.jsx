import './App.css'
import { MainPage } from './pages/MainPage'
import { useQuery, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>
    </>
  )
}

export default App
