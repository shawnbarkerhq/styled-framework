import React from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div`
  width: 900px;
  min-width: 900px;
  margin: 50px auto;
`;
const Carousel = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
`;

const RadioInput = styled.input.attrs({
    type: "radio"
})`
    position: absolute;
    left: 0;
    opacity: 0;
    top: 0;
    &:checked {
      opacity: 0;
    }
    @for $i from 1 through $items {
        &:nth-child(#{$i}) {
          &:checked {
            ~ .carousel__items .carousel__item {
                &:nth-child(#{$i}) {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`;

const CarouselList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  height: 600px;
  position: relative;
`;

const CarouselItem = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: opacity 2s;
  -webkit-transition: opacity 2s;  
`;

const Image = styled.img`
  width: 100%;
  vertical-align: middle;
`
const CarouselPrev = styled.div`

`;
const LabelPrev = styled.label`
  opacity: 1 !important;
  z-index: 3;
`
const CarouselNext = styled.div`

`;
const LabelNext = styled.label`
  opacity: 1 !important;
  z-index: 3;
`

const CarouselNav = styled.div`

`

const LabelNav = styled.label`
  background: red;
  cursor: default;
  pointer-events: none;
`
const Label = styled.label`
  border: 1px solid red;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transition: all .3s ease;
  -webkit-transition: all .3s ease;
  opacity: 0;
  z-index: 2;
  &:hover,
  &:focus {
    opacity: .5 !important;
  }
  &:before,
  &:after {
    content: "";
      position: absolute;
      width: inherit;
      height: inherit;
  }
  &:before {
    background: linear-gradient(to top, #fff 0%, #fff 10%, rgba(51, 51, 51, 0) 10%),
                linear-gradient(to left, #fff 0%, #fff 10%, rgba(51, 51, 51, 0) 10%);
    width: 60%;
    height: 60%;
    top: 20%;
  }
`
const numbers = [1,2,3,4,5]
const ids = numbers.map(id => "carousel-" + id + "'")
const inputs = numbers.map((input) => 
  <RadioInput id={ids[input]}/>
)

const slides = numbers.map(item => 
  <CarouselItem><Image src="https://placeimg.com/900/480/any"/></CarouselItem>
)
const Slider = () => {
  return (
    <SliderContainer>
      <Carousel>
        {inputs}
        <CarouselList>
          {slides}
        </CarouselList>
        <CarouselPrev>
          <LabelPrev for="carousel-1"></LabelPrev>
          <LabelPrev for="carousel-2"></LabelPrev>
          <LabelPrev for="carousel-3"></LabelPrev>
          <LabelPrev for="carousel-4"></LabelPrev>
          <LabelPrev for="carousel-5"></LabelPrev>
        </CarouselPrev>
        <CarouselNext>
          <LabelNext for="carousel-1"></LabelNext>
          <LabelNext for="carousel-2"></LabelNext>
          <LabelNext for="carousel-3"></LabelNext>
          <LabelNext for="carousel-4"></LabelNext>
          <LabelNext for="carousel-5"></LabelNext>
        </CarouselNext>
        <CarouselNav>
          <LabelNav for="carousel-1"></LabelNav>
          <LabelNav for="carousel-2"></LabelNav>
          <LabelNav for="carousel-3"></LabelNav>
          <LabelNav for="carousel-4"></LabelNav>
          <LabelNav for="carousel-5"></LabelNav>
        </CarouselNav>
      </Carousel>
    </SliderContainer>
  )
}

export default Slider





