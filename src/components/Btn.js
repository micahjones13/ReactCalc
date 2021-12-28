import React from 'react'
import { RuxButton } from '@astrouxds/react'

const Button = (props) =>  {
    return(
        
        <div className="btn">  
        {
            props.number ? (
            <RuxButton size="large" 
            onClick={() => props.handleClick(props.number)}
            >
                {props.number}
            </RuxButton>
            ) : (
                <RuxButton onClick={() => props.handleClick(props.symbol)}>{props.symbol}</RuxButton>
            )
        }
        </div>
        
        
    )
}

export default Button;


/*
            {props.number && (
            <RuxButton size="large" 
            onClick={() => props.handleClick(props.number)}
            >
                {props.number}
            </RuxButton>
            )
            }
            {
                props.symbol && (
                    <RuxButton>{props.symbol}</RuxButton>
                )
            }

*/