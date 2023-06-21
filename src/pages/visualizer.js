import React, {useState} from 'react'
import './c.css'

const gridSizes = [
    5, 10, 15, 25
]

export default function Visualizer() {
    const [size, setSize] = useState(5)
    const [count, setCount] = useState(0);
    const [gridMap, setGridMap] = useState(createGrid(size));
     
    
    function updateGrid(index){
        gridMap[index] = !gridMap[index];
        setCount( (prev) => {
            return prev + (prev > 0 ? -1:1);
        })
    }


    
    return (
    <div align={'center'}>
        {/* <select id='sizes' >
            <option value='10'>10</option>
            <option value='10'>10</option>
            <option value='10'>10</option>
            <option value='10'>10</option>
        </select> */}
        <div className='flex-container'>
            {gridMap.map((seen, i) => {
                return <Tile seen={seen} key={i}/>
            })}
        </div>

        <input type='number' id='index'></input>
        <button type='button' onClick={() => {
            let index = document.getElementById('index')
            if(!index) alert('Please Enter Something')
            else updateGrid(index.value)
        }}>
            Click Me
        </button>
    </div>
  )
}

function createGrid(size){
    let gridMap = []
    for(let j = 0; j < size*size; j++){
        gridMap.push(false)
    }
    return gridMap
}

function Tile({seen}){
    let color = seen ? 'red' : 'green';
    return (
        <div className='grid-item' style={{backgroundColor: color}}>
            {seen ? 'X':'Y'}
        </div>
    )
}

