import styled from 'styled-components'
import { keyframes, css } from 'styled-components'

export default function Score({ percent }) {

  const animation = {
    //animation: `${keyFrames} ease-in-out 3s`,
    transform: `rotate(${percent}deg)`
  }
  return (
    <>
      <div className="circle-wrap">
        <div className="circle">
          <div style={animation} className="mask full">
            <div style={animation} className="fill"></div>
          </div>
          <div className="mask half">
            <div style={animation} className="fill"></div>
          </div>
          <div className="inside-circle"> 75% </div>
        </div>
      </div>
    </>
  )
}