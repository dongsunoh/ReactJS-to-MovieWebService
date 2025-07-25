import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function MovieDetail({coverImg, title, rating, year, runtime, genres}) {
    return (
        <>
            <div>
                <Link to={`${process.env.PUBLIC_URL}/`}>Back to Movie List</Link>
            </div>
            <hr/>
            <img src={coverImg} alt={title} />
            <h2>
                <ul>
                    <li>Title : {title}</li>
                </ul>
            </h2>
            <h3>
                <ul>
                    <li>Rating : {rating}</li>
                    <li>Year : {year}</li>
                    <li>Runtime : {runtime} min</li>
                </ul>

            </h3>
            <ul>
                {genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </>
    );
}

MovieDetail.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetail;