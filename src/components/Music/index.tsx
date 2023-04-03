import React from 'react'
import MultiPlayer from "./MultiPlayer";

function Music() {
    return (
      <div className="Music">
        <MultiPlayer
          urls={[
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
           ,
          ]}
        />
      </div>
    )
  }
  
  export default Music