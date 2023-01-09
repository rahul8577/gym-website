import React from 'react'
import SectionHead from './SectionHead'
import { FaCrown } from 'react-icons/fa'
import { programs } from '../gym-asset/data'
import Card from './Card'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__containainer">
        <SectionHead title="Programs" icon={<FaCrown />} />

        <div className="programs__wrapper">
          {
            programs.map(({ id, icon, title, info, path }) => {
              return (
                <Card className="programs__program" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm" >Learn more <AiFillCaretRight /></Link>
                </Card>
              );
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Programs