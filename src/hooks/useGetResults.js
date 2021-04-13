import { useState, useEffect } from 'react';
import { getResults } from '../helpers/getResults';

export const useGetResults = (query) => {
    const [state, setState] = useState({ loading: true, results: [] });

    useEffect(() => {
        getResults(query).then(results => {
            setState({ loading: false, results: results })
        })
    }, [query]);

    return state;
}
