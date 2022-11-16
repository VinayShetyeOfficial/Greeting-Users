import {period} from "./components/Period"

function App(){
    return (
        <div className="greetings">
            <h1>Hello sir, <span className={"period-" + period().toLowerCase()}>Good {period()}!</span></h1>
        </div>
    )
}

export default App