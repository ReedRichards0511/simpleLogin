import { CssBaseline } from '@mui/material'
import { LoginPage } from './app/authentication/infraestructure/pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <LoginPage />
    </QueryClientProvider>
  )
}

export default App
