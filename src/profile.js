import React from 'react';
import Button from'./button';
import Img from './b.jpg'
function Profile(){
    let FirstName = "Youssef";
    let LastName = "Rakrouki";
  return (
      <div> 
<img src={Img}/>
<h1>FirstName={FirstName}LastName={LastName}</h1>
<Button isShown visited />
</div>
  );}
export default Profile;