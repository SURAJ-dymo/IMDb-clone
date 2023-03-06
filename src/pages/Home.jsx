import { Box, styled } from '@mui/material';
import React, { useEffect,useState } from 'react'
import Banner from '../components/Banner';
import Header from '../components/common/Header';
import Slides from '../components/common/Slides';
import UpNext from '../components/UpNext';
import { NOWPLAYING_API_URL } from '../constant/constant';
import { getCategoryMovies } from '../services/api';


const Container = styled(Box)`
padding: 0 115px !important;
padding: 20px;

`
const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`;
const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const getData = async () => {
            let response = await getCategoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);    
        }
        getData();
    },[])
    console.log(movies)
    return (
        <>
        <Header/>
        <Container>
            <Wrapper>
                <Banner movies={movies}/>
                <UpNext  movies={movies}/>
            </Wrapper>
            <Slides movies={movies}/>
            <Slides movies={movies}/>
            <Slides movies={movies}/>

        </Container>
        </>
    )
}

export default Home;