import { useState } from 'react';
import PropTypes from 'prop-types';

export const Search = ({ setQueries }) => {

    // State for the input
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = e => setinputValue(e.target.value);

    // State for the queries
    const handleFormSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setQueries(queries => [inputValue, ...queries]);
            setinputValue('');
        }
    }

    return (
        <div className="c-search row">
            <div className="col-12 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <form onSubmit={handleFormSubmit} className="input-group">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                    />
                    <button type="submit" className="btn btn-outline-primary">Search</button>
                </form>
            </div>
        </div>
    )
}

Search.propTypes = {
    setQueries: PropTypes.func.isRequired
}
