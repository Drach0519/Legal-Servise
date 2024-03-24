import React,{useState} from "react"
import "./CheckboxSurvey.css"
import uuid from "react-uuid";



const DEGREE_SEVERITY =[
    {name:'з неушкодженими', checked:false, text:"Правил дорожнього руху, " +
            "затверджених постановою Кабінету Міністрів України передбачено, " +
            "що у разі причетності до дорожньо-транспортної пригоди водій зобов'" +
            "язаний негайно зупинити транспортний засіб і залишатися на місці пригоди"},
    {name:'з легко травмованими',checked:false,text:"Опанувати себе, зупинити автомобіль, виклакати швидку і поліцію, " +
            "при можливості допомогти потерпілому"},
    {name:'з тяжко травмованими', checked:false,text:"Опанувати себе, зупинити автомобіль, виклакати швидку і поліцію"},
    {name: 'з померлими', checked:false,text:"Опанувати себе, зупинити автомобіль, виклакати швидку і поліцію"},
];
const TYPES_PARTICIPANTS=[
    {name:'з пішоходами', checked:false, text:"з пішоходами"},
    {name:'з велосипедистами', checked:false,text:"з велосипедистами"},
    {name:'з водіями власних транспортних засобів', checked: false,text:"з водіями власних транспортних засобів"},
    {name:'з водіями юридичної особи (наприклад водії громадського транспорту та інші)',checked:false,text:"з водіями юридичної особи (наприклад водії громадського транспорту та інші)"},
    {name:'з іншими учасниками (візники, погоничі тварин та інші)', checked:false,text:"з іншими учасниками (візники, погоничі тварин та інші)"},
    {name:'з пасажирами', checked:false,text:"з пасажирами"},
    {name:'зі зниклими з місця ДТП', checked:false,text:"зі зниклими з місця ДТП"},
];
const CheckboxSurvey = () => {
    // const [questions, setQuestions] = useState();
    const [degreeSeverity, setDegreeSeverity] = useState(DEGREE_SEVERITY);
    const [typesParticipants,setTypesParticipants] = useState(TYPES_PARTICIPANTS);
    const [allResults, setAllResults]=useState([]);

    const handleSubmit = () => {
        // Обработка отправки ответов, например, отправка на сервер
        document.querySelector(".box-answer").style.display="block";
        document.querySelector(".box-questions").style.display="none";
        setAllResults([...[],...results_2,...results_1])
        console.log(allResults)
    };
    let results_1 = degreeSeverity.filter((obj)=>{
        return obj.checked === true
    })
    let results_2 = typesParticipants.filter((obj)=>{
        return obj.checked === true
    })


    const backQuestions = ()=>{
        document.querySelector(".box-answer").style.display="none";
        document.querySelector(".box-questions").style.display="block"
    }


    const handleCheck =(event,arr, changeState)=>{
        let mutArr= arr.map((obj)=>{
            if(obj.name === event.target.name){
                obj.checked = !obj.checked
            }
            return obj
        });
        changeState(mutArr)
        // console.log(mutOptions)
        // console.log(event.target.checked)
        // console.log(event.target.name)
    }

    return(
        <>
            <div className="box-questions">
                <h1>Ви потрапили до ДТП?</h1>
                <div className={'box-question-degree'}>
                    <label>
                        <h4>Опишіть ситуацію за ступенем тяжкості:</h4>
                    </label>
                    {degreeSeverity.map((option) => {
                        return (
                            <div key={uuid()} className="question-row">
                                <input type={"checkbox"}
                                    checked={option.checked}
                                    name={option.name}
                                    onChange={(event) => {
                                    handleCheck(event, degreeSeverity,setDegreeSeverity)
                                    }}/>
                                {option.name}
                            </div>
                        )
                    })}
                </div>
                <div className={'box-question-types'}>
                    <label>
                        <h4>Опишіть ситуацію відносно учасників:</h4>
                    </label>
                    {typesParticipants.map((option) => {
                        return (
                            <div key={uuid()} className={"question-row"}>
                                <input type={"checkbox"}
                                    checked={option.checked}
                                    name={option.name}
                                    onChange={(event) => {
                                    handleCheck(event, typesParticipants, setTypesParticipants)
                                    }}/>
                                {option.name}
                            </div>
                        )
                    })}
                </div>
                <button className={"submit_question"} onClick={handleSubmit}> Submit</button>
            </div>
            <div className="box-answer" style={{display: "none"}}>
                <h1> Відповіді:</h1>
                <>
                    {allResults.map((result) =>
                        <>
                            <h4>{result.name}?</h4>
                            <p key={uuid()}>{result.text}</p>
                        </>
                    )}
                </>
                <button className="back-question" onClick={backQuestions}>&#10229; Back</button>
            </div>
        </>
    )
}
export default CheckboxSurvey;