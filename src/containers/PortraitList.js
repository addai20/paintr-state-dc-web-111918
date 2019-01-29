import React from 'react'
import Portrait from '../components/Portrait'
import portraitsData from '../data/paintings'

const PortraitList = () => {
  // console.log(portraitsData)
  //[{},{},{}] => [<Portrait />, <Portrait />, <Portrait />]
  return (
    <div>
      {portraitsData.map(paintingObj =>
        <Portrait
          painting={paintingObj}
          key={paintingObj.id}
        />
      )}
    </div>
  )
}

export default PortraitList
