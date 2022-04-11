import "./Card.css"
import React from 'react'

const Card = ({data}) => {

  return (
    <>   
    {data.message =="Not Found" ? "" :
    <div className="card">
        <div className="name">Name: {data.name}</div>
        <img src={data.avatar_url} alt="profilepicture" />
        <div className="repo">Repositories: {data.repos_url}</div>
        <div className="gitbtn">
          <button>Followers: {data.followers}</button>
          <button>Following: {data.following}</button>
        </div>
        <div className="name">Location:{data.location}</div>
        <div className="name">Bio: {data.bio}</div>
    </div>
    }
    </>

  )
}

export default Card