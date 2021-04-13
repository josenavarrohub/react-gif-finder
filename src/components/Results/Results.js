import { Item } from '../Item/Item';
import { useGetResults } from '../../hooks/useGetResults';

import './Results.css';

export const Results = ({ query }) => {

    const { loading, results } = useGetResults(query);

    return (
        <div className="c-results row">
            <p className="mt-4 text-muted animate__animated animate__fadeIn">Results for: <span className="fst-italic">"{query}"</span></p>
            { loading && <p className="mt-4 text-muted text-center animate__animated animate__flash">Loading...</p> }
            { results.map(item => <Item key={item.id} {...item} />)}
        </div>
    )
}
