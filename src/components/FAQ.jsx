import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'

const FAQ = ({ question, answer }) => {

    const [currentanswer, toggleAnswer] = useState(false)
    return (
        <article className="faq">
            <div>
                <h4>{question}</h4>
                <button className='faq__icon' onClick={() => toggleAnswer(!currentanswer)}>
                    {
                        currentanswer ? <AiOutlinePlus /> : <AiOutlineMinus />
                    }

                </button>
            </div>
            {
                currentanswer && <p>{answer}</p>
            }
            
        </article>
    )
}

export default FAQ