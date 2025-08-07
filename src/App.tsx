import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveCharacters from './features/response-characters';
import CharacterDetails from './pages/character-details';


const queryClient = new QueryClient();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<ResponsiveCharacters />} />
                    <Route path={`/details/:id`} element={<CharacterDetails />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
