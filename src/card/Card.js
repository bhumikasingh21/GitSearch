import "./Card.css"
import React from 'react'

const Card = ({data}) => {

  const Data = Object.keys(data);
  console.log(Data)
  return (
    <>   
    { Data.length >0 && 
    <div className="card">
      <div>      
      <img src={data.avatar_url} alt="profilepicture" />
      </div>
      <div className="card-content">
        <div className="name">Name: {data.name}</div>
        <div className="repo">Repositories: {data.repos_url}</div>
        <div className="gitbtn">
          <button>Followers: {data.followers}</button>
          <button>Following: {data.following}</button>
        </div>
        <div className="name">Location: {data.location}</div>
        <div className="name">Bio: {data.bio}</div>
        </div>
    </div>
}
    </>

  )
}

export default Card