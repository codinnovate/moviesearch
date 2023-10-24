interface MovieCardProps {
    title: string;
    overview: string;
    posterPath: string;
}

import React from 'react'

const MovieCard = ({ title, overview, posterPath }: MovieCardProps) => {
    const imageUrl = posterPath ?
        `https://image.tmdb.org/t/p/w500${posterPath}`
        : '/no-image-available.png';
    
    
    return (
        <div className="bg-white rounded shadow p-4 ">
            <img className="w-full h-64 rounded mb-4 " src={imageUrl} alt="" />
            <h2>{title}</h2>  
            <p>{overview.substring(0, 150)}</p>
        </div>
    )
}

export default MovieCard
