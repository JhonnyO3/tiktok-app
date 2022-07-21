import { BsFillHeartFill } from 'react-icons/bs'
import { FaCommentDots } from 'react-icons/fa'
import { FaReply } from 'react-icons/fa'
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { BsCoin } from 'react-icons/bs'
import video from './video.mp4'




function VideoTitok() {
    const playVideo = ()=> {
        let video = document.getElementById('video')
        video.play()
       
      }
    
    return(
      
        <div className='box-video'>
        <div className='title-video'>
        <h2>@JhonnyO3</h2>
        <p>Video Tik-Tok</p>
     
       
        
        </div>
        <video id='video' onClick={() =>playVideo()}>
          
        <source src={video} type="video/mp4" />
        </video>
        <div className='icons-bottom'>
          <AiOutlineUserSwitch style={{fontSize: '30px', color: 'white', margin: '8px'}} />
          <AiOutlineUserSwitch style={{fontSize: '30px', color: 'white', margin: '8px'}} />
          <AiOutlineUserSwitch style={{fontSize: '30px', color: 'white', margin: '8px'}} />

        </div>
        <div className='icons-right'>
        <BsFillHeartFill style={{fontSize: '30px', color: 'red', margin: '8px'}} />
        <FaCommentDots style={{fontSize: '30px', color: 'white', margin: '8px'}}/>
        <FaReply style={{fontSize: '30px', color: 'white', margin: '8px'}}/>

        </div>
      
      </div>
      
    )
}
export default VideoTitok
      