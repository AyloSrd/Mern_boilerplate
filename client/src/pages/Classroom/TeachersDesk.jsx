import React, { useState, useEffect, useRef } from 'react'
import '../../styles/Editor.css'
import Editor from '../../components/Classroom/Editor'
import { withUser } from '../../components/Auth/withUser'
import useLocalStorage from '../../hooks/useLocalStorage'
import Peer from 'peerjs'
import { initiateSocketWithVideo, sendCode, callNewClassmate, streamCall, changeTab } from '../../socket/socket'
import { getCamera } from '../../components/Classroom/getCameraAndAnswerCalls'
import saveIcon from '../../assets/img/saveIcon.png'
import apiHandler from '../../api/apiHandler'
import { v4 as uuidv4 } from 'uuid'

const TeachersDesk = props => {

  const [ room, setRoom ] = useState(uuidv4())
  const [ lessonName, setLessonName ] = useState('test-lesson')

  const [ html, setHtml ] = useLocalStorage('html', '')
  const [ css, setCss ] = useLocalStorage('css', '')
  const [ js, setJs ] = useLocalStorage('js', '')

  const [ isHtmlTabOpen, setIsHtmlTabOpen ] = useState(true)
  const [ isCssTabOpen, setIsCssTabOpen ] = useState(false)
  const [ isJsTabOpen, setIsJsTabOpen ] = useState(false)
  
  const [ socketId, setSocketId ] = useState(null)
  const [ myPeer, setMyPeer] = useState('')

  const [srcDoc, setSrcDoc] = useState('')

  // video
  const userVideo = useRef()
  const classmateVideo = useRef()
  const [ stream, setStream ] = useState()
  const [ call, setCall ] = useState(null)
  // const [ studentsVideos, setStudentsVideos] = useState([])
  
  useEffect(() => {
    const myPeer = new Peer(undefined, {
			secure: true, 
			host: 'peerjs-server-codeschool.herokuapp.com', 
			port: 443
    })

    setMyPeer(myPeer)

    myPeer.on('open', id => {
      setSocketId(id)
    })

    getCamera(userVideo, setStream)
  }, [])

  useEffect(() => {
    if(!socketId) return console.log(socketId)
    console.log(socketId)
    initiateSocketWithVideo(room, socketId)
    // return () => disconnectSocketVideo('class', socketId)
  }, [ socketId ])

  useEffect(() => {
    callNewClassmate(stream, myPeer, setCall)
  }, [ stream ])

  // const appendVideos = mediaStream => {
  //   setStudentsVideos(prevVideos => [ ...prevVideos, mediaStream])
  // }

  useEffect(() => {
    if(!call) return console.log('no call')
    streamCall(call, classmateVideo)
  }, [ call ])

  useEffect(() => {
   const timeout = setTimeout(() => {
    if(!socketId) return () => clearTimeout(timeout)
    console.log(html, css, js)
    setSrcDoc(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>HTML Document</title>
          <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
        </body>
        <script>
          ${js}
        </script>
      </html>
    `)
    sendCode(room, {
      html,
      css, 
      js
    }, socketId)
   }, 1000)

   return () => clearTimeout(timeout)
  }, [ html, css, js ])
  
  useEffect(() => {
    console.log('changing tab')
    changeTab( room, isHtmlTabOpen, isCssTabOpen, isJsTabOpen )
  }, [ isHtmlTabOpen, isCssTabOpen, isJsTabOpen ])

  const openTab = e => {
    console.log('changing tab on click')
    setIsHtmlTabOpen(false)
    setIsCssTabOpen(false)
    setIsJsTabOpen(false)

    switch (e.target.name) {
      case 'htmlTab':
        setIsHtmlTabOpen(true)
        break
      case 'cssTab':
        setIsCssTabOpen(true)
        break;
      case 'jsTab':
        setIsJsTabOpen(true)
        break;
      default:
        setIsHtmlTabOpen(true)
    }
    
  }
  // const contesto = props.context.user
  // console.log('context', contesto)

  const handleSave = () => {
 
    const lessonToBeSaved = { 
      lessonName, 
      Teacher: `${props.context.user.firstName} ${props.context.user.lastName}`, 
      id_owner: props.context.user._id,
      Homework:false, 
      html, 
      css, 
      js 
    }
    console.log('lesson', lessonToBeSaved)
    apiHandler
      .saveLesson(lessonToBeSaved)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  console.log('props', props)
  console.log('class', room)

  return (
    <>
      <div id="EditorAndIframeContainer">
        <div className="pane left-pane">
          <div className="Tab">
            <button 
              name="htmlTab" 
              className={`Tablinks ${ isHtmlTabOpen ? 'open' : '' }`} 
              onClick={openTab}>HTML</button>
            <button 
              name="cssTab" 
              className={`Tablinks ${ isCssTabOpen ? 'open' : '' }`} 
              onClick={openTab}>CSS</button>
            <button 
              name="jsTab" 
              className={`Tablinks ${ isJsTabOpen ? 'open' : '' }`} 
              onClick={openTab}>JS</button>
                          <button 
              id="saveBtn" 
              onClick= {handleSave}
              className="Tablinks Right"
            >
              <img width="20px" src={saveIcon} alt="floppy disk icon"/>
            </button>
          </div>
          <Editor 
            language="xml"
            value={html}
            onChange={setHtml}
            open={isHtmlTabOpen}
          />
          <Editor 
            language="css" 
            value={css}
            onChange={setCss}
            open={isCssTabOpen}
          />
          <Editor 
            language="javascript" 
            value={js}
            onChange={setJs}
            open={isJsTabOpen}
          />
        </div>
        <div className="pane right-pane">
          <div className="Tab centerContent height2">
            <p>Classroom : {room}</p>
          </div>
          <iframe 
          srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100vw"
            height="100%"
            />
        </div>
      </div>
      <div id="VideoContainer">
        <div className="Video SmallV">
          <video playsInline controls ref={classmateVideo} autoPlay/>
        </div>
        <div className="Video">
          <video playsInline controls muted ref={userVideo} autoPlay/>
        </div>
		  </div>
    </>
  );
}

export default withUser(TeachersDesk)
