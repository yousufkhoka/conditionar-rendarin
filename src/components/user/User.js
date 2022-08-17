import React from 'react';

const User = (props) => {
    const familiar = props.familiar
     let Greetings;
    //  if(familiar){
    //     Greetings = <p>welcome my friend</p>
    //  }
    //  else{
    //     Greetings = <p>Who the hell are you?</p>
    //  }
     const Greetings2 = familiar ? Greetings = <p>welcome my friend</p>:
     Greetings = <p>who the hell are you?</p>

    return (
        <div>
           <div className="">
           <h2>Greetings</h2>
              {
                Greetings 
               
              }
               
           </div>
           <div>
           <h2>Food</h2>
            {
                    familiar ?  <p>I will buy food for you</p> : <p>lets eat his his whose whose</p>
            }
           </div>
            <h2>Connetion</h2>
            {
                familiar && <p>let's join my facebook </p>
            }
        </div>
    );
};

export default User;