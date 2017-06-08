import React from 'react';

const GifList = ({ gifList }) => {
  return (
    <div className="col-md-5">
      <ul>
      {gifList.map((gif) => {
        return <li key={gif.id}><img src={gif.images.downsized_medium.url}></img></li>
      })}
      </ul>
    </div>
  )
}

export default GifList;
