import React from 'react'

export const ContainerGif = ({gifs,categoris}) => {
    
  return (
    <>
      <h1 className="text-center my-4 text-primary">{categoris}</h1>
      <div className="container">
        <div className="row justify-content-center">
          {gifs.map(({ id, title, url }) => {
            return (
              <div key={id} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={url}
                    alt="image"
                    style={{ borderRadius: '10px' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-secondary">{title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
