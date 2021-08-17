import React from 'react';
import { getMergeSort, getBubbleSort, getQuickSort, getInsertionSort, getSelectionSort} from '../algo/algo.js';
import './SortingVisualizer.css';
import { Button, Container, ButtonGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SpeedSlider, getSpeed} from '../slider.jsx'
const NUMBER_OF_BARS = ((window.innerWidth*90)/100) / 40;
const SECONDARY_COLOR = '#063B6F';
const PRIMARY_COLOR = '#663366';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            array:[],
            spd :50,
        };
    }
    componentDidMount(){
        document.body.style.backgroundColor = "#021D39";
        this.resetArray();
    }
    resetArray(){
        const array =[];
        for( let i=0 ; i<NUMBER_OF_BARS ; i++ ){
            let num = randomNum(5,300);
            array.push(num);
        }
        this.setState({array});
    }
    mergeSort(){
        const animations = getMergeSort(this.state.array);
        for( let i=0 ; i<animations.length ; i++ ){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if( isColorChange ){
                const [barOneIndx, barTwoIndx] = animations[i];
                const barOneStyle = arrayBars[barOneIndx].style;
                const barTwoStyle = arrayBars[barTwoIndx].style;
                const color  = i%3 == 0 ?  SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout( () =>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*(this.state.spd));
            }
            else{
                setTimeout( ()=> {
                    const [barOneIndx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndx].style;
                    barOneStyle.height = `${newHeight}px` ;
                }, i*(this.state.spd));
            }
        }
    }
    bubbleSort(){
        const animations = getBubbleSort(this.state.array);
        for( let i=0 ; i<animations.length ; i++ ){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIndx, barTwoIndx] = animations[i];
            const barOneStyle = arrayBars[barOneIndx].style;
            const barTwoStyle = arrayBars[barTwoIndx].style;
            const isColorChange = i%3 !== 2;
            if( isColorChange ){
                const color  = i%3 == 0 ?  SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout( () =>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*(this.state.spd));
            }
            else{
                setTimeout( ()=> {
                    const tempH = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height=tempH;
                }, i*(this.state.spd));
            }
        }
    }
    insertionSort(){
        const animations = getInsertionSort(this.state.array);
        for( let i=0 ; i<animations.length ; i++ ){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if( isColorChange ){
                const [barOneIndx, barTwoIndx] = animations[i];
                const barOneStyle = arrayBars[barOneIndx].style;
                const barTwoStyle = arrayBars[barTwoIndx].style;
                const color  = i%3 == 0 ?  SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout( () =>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*(this.state.spd));
            }
            else{
                setTimeout( ()=> {
                    const [barOneIndx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndx].style;
                    barOneStyle.height = `${newHeight}px` ;
                }, i*(this.state.spd));
            }
        }
    }
    quickSort(){
        const animations = getQuickSort(this.state.array);
        for( let i=0 ; i<animations.length ; i++ ){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIndx, barTwoIndx] = animations[i];
            const barOneStyle = arrayBars[barOneIndx].style;
            const barTwoStyle = arrayBars[barTwoIndx].style;
            const isColorChange = i%3 !== 2;
            if( isColorChange ){
                const color  = i%3 == 0 ?  SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout( () =>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*(this.state.spd));
            }
            else{
                setTimeout( ()=> {
                    const tempH = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height=tempH;
                }, i*(this.state.spd));
            }
        }
    }
    selectionSort(){
        const animations = getSelectionSort(this.state.array);
        for( let i=0 ; i<animations.length ; i++ ){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIndx, barTwoIndx] = animations[i];
            const barOneStyle = arrayBars[barOneIndx].style;
            const barTwoStyle = arrayBars[barTwoIndx].style;
            const isColorChange = i%3 !== 2;
            if( isColorChange ){
                const color  = i%3 == 0 ?  SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout( () =>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*(this.state.spd));
            }
            else{
                setTimeout( ()=> {
                    const tempH = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height=tempH;
                }, i*(this.state.spd));
            }
        }
    }
    render (){
        const {array} = this.state;
        return (
            <Container>
                <Row className="heading">
                    <h1>
                     Sorting Visualizer
                    </h1>
                </Row>
                {/* <Row>
                    <Col className="speed" xs lg="2">
                        <SpeedSlider />
                    </Col>
                </Row> */}
                <div className="array-container">
                    { array.map((value,idx) => ( 
                        <div className="array-bar" key={idx} style={{height:`${value}px` }}>
                        </div>
                    ))}
                </div>
                <div className="nav">
                    <Button className="btn, btn1" onClick= {() => this.resetArray()}> New Array </Button>  
                    <Button className="btn" variant="secondary" onClick= {() => this.mergeSort()} > Merge Sort</Button>
                    <Button className="btn" variant="secondary" onClick= {() => this.bubbleSort()} > Bubble Sort</Button>
                    <Button className="btn" variant="secondary" onClick= {() => this.quickSort()} > Quick Sort</Button>
                    {/* <Button className="btn" variant="secondary" onClick= {() => this.bubbleSort()} > Heap Sort</Button> */}
                    <Button className="btn" variant="secondary" onClick= {() => this.insertionSort()} > Insertion Sort</Button>
                    <Button className="btn" variant="secondary" onClick= {() => this.selectionSort()} > Selection Sort</Button>
                </div>
                <div className="nav" >
                    <Button className="btn, btn1" onClick= {() => this.state.spd = 50 }> Slow </Button>  
                    <Button className="btn" variant="secondary" onClick= {() => this.state.spd = 25 } > Intermediate </Button>
                    <Button className="btn" variant="secondary" onClick= {() => this.state.spd = 5 } > Fast </Button>
                </div>
            </Container>            
        );
    }
}
function randomNum( mn, mx ) {
    return Math.floor(Math.random() * (mx-mn+1) + mn );
    
}
