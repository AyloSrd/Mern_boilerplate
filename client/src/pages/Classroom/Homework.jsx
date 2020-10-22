import React, { useState, useEffect, useRef } from 'react'
import '../../styles/Editor.css'
import Editor from '../../components/Classroom/Editor'
import { withUser } from '../../components/Auth/withUser'
import useLocalStorage from '../../hooks/useLocalStorage'
import saveIcon from '../../assets/img/saveIcon.png'
import apiHandler from '../../api/apiHandler'




function Homework(props) {
  const [ room, setRoom ] = useState(props.location.state.room)

  const [ lessonName, setLessonName ] = useState('test-lesson')

  const [ html, setHtml ] = useLocalStorage('html', props.location.state.code.html)
  const [ css, setCss ] = useLocalStorage('css', props.location.state.code.css)
  const [ js, setJs ] = useLocalStorage('js', props.location.state.code.js)

  const [ isHtmlTabOpen, setIsHtmlTabOpen ] = useState(true)
  const [ isCssTabOpen, setIsCssTabOpen ] = useState(false)
  const [ isJsTabOpen, setIsJsTabOpen ] = useState(false)

  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
   const timeout = setTimeout(() => {
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
   }, 1000)

   return () => clearTimeout(timeout)
  }, [ html, css, js ])

  const openTab = e => {
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

  const handleSave = () => {
 
    const lessonToBeSaved = { 
      lessonName, 
      id_owner: props.context.user._id, 
      Homework:true, 
      html, 
      css, 
      js 
    }
    console.log(room, lessonToBeSaved)
    apiHandler
      .saveLesson(lessonToBeSaved)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }


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
    </>
  );
}

export default withUser(Homework)
