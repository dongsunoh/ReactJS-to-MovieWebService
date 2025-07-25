import {useParams} from 'react-router';
import {useEffect, useState} from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {

    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState({});

    const {id} = useParams();

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setLoading(false);
        setMovieDetail(json.data.movie);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
            <h1>Detail</h1>
            {loading ? (<h1>"Loading..."</h1>) : (
                    <MovieDetail
                        coverImg={movieDetail.medium_cover_image}
                        title={movieDetail.title}
                        year={movieDetail.year}
                        runtime={movieDetail.runtime}
                        rating={movieDetail.rating}
                        genres={movieDetail.genres}
                    />
            )}
        </>
    );
}

export default Detail;