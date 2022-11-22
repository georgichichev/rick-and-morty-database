import './styles/styles.css';
import Header from "./components/Header/Header.js";
import Characters from "./components/Characters/Characters.js";
import Locations from "./components/Locations/Locations.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Episodes from "./components/Episodes/Episodes.js";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Details from "./components/Details/Details.js";

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/characters"/>}/>
                        <Route path="/characters" element={<Characters/>}/>
                        <Route path="/locations" element={<Locations/>}/>
                        <Route path="/episodes" element={<Episodes/>}/>
                        <Route path="/details/characters/:id" element={<Details/>}/>
                    </Routes>
                    <ReactQueryDevtools/>
                </QueryClientProvider>
            </main>
        </BrowserRouter>
    );
}

export default App;
