import { useState } from 'react';
import { Logo } from './components/Logo/Logo';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';

export const Gifinder = () => {

    // State for the queries
    const [queries, setQueries] = useState([]);

    return (
        <>
            <Logo setQueries={setQueries} />
            <Search setQueries={setQueries} />
            {queries.map(query => <Results key={query} query={query} />)}
        </>
    );
}
