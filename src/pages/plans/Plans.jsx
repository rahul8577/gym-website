import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../gym-asset/images/header_bg_4.jpg'
import Card from '../../components/Card';
import {plans} from '../../gym-asset/data'
import "./plans.css"

const Plans = () => {
  return (
    <div>
      <Header title="MemberShip Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi ipsa est, dolores facilis culpa?
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({id,name,desc,price,features})=>{
              return (<Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>${price}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({feature,available},index)=>{
                    return (<p key={index} className={!available? 'disable': ''}>{feature}</p>);
                  })
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>)
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Plans