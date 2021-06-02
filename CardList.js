import React from "react";
import Card from "./Card";
import {robots} from "./robots";

const CardList =({robots})=>{
    return(
        <div>
            {robots.map((user,i)=>{
                return(
                    <div>
                        <Card
                            key ={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            username={robots[i].username}
                            email={robots[i].email}
                        />
                    </div>

                )
            })}
        </div>
    )

}

export default CardList