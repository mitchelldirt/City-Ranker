import styled from 'styled-components'
const Thing = styled.div`
  animation: fill ease-in-out 3s;
  transform: rotate(180deg);
@keyframes {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(${percent}deg);
  }
}
`

export default function Score({ percent }) {



  let animation = `.mask.full,
  animation: fill ease-in-out 3s;
  transform: rotate(${percent}deg);
  @keyframes fill{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(${percent}deg);
    }
  } 
  `

  let keyframes =
    `@keyframes fill{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(${percent}deg);
  }
}`

  return (
    <>
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <Thing className="fill"></Thing>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle"> 75% </div>
        </div>
      </div>
    </>
  )
}