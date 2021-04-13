import PropTypes from 'prop-types';

import './Logo.css';

export const Logo = ({setQueries}) => {
    return (
        <div className="c-logo row mt-5 mb-3">
            <div className="col-12 text-center">
                <h1 
                    className="c-logo__text d-inline-flex"
                    title="Restart searches"
                    onClick={() => setQueries([])}
                >
                    <span className="text-primary">G</span>
                    <span className="text-danger">i</span>
                    <span className="text-warning">f</span>
                    <span className="text-success">i</span>
                    <span className="text-primary">n</span>
                    <span className="text-danger">d</span>
                    <span className="text-warning">e</span>
                    <span className="text-success">r</span>
                </h1>
            </div>
        </div>
    )
}

Logo.propTypes = {
    setQueries: PropTypes.func.isRequired
}
