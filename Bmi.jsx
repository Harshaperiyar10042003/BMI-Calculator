import React,{useState} from 'react'

const Bmi = () => {
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
    const [bmi,setBmi] = useState(null);
    const [bmistatus,setBmiStatus] = useState("");
    const [errorMessage,setErrorMessage] = useState("");

    const calculateBmi = () => {
        const isValidHeight= /^\d+$/.test(height);
        const isValidWeight= /^\d+$/.test(weight);
        if (isValidHeight && isValidWeight) {
            const heightInMeters = height /100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
            if(bmiValue<18.5){
                setBmiStatus("Under Weight");
            }else if(bmiValue>=18.5 && bmiValue<24.9){
                setBmiStatus("Normal Weight");
            }else if(bmiValue>=25 && bmiValue<29.9){
                setBmiStatus("Over Weight");
            }else{
                setBmiStatus("Obese");
            }
            setErrorMessage("");

        }else{
            setBmi(null);
            setBmiStatus("");
            setErrorMessage("please enter valid numeric values for height and weight.");
        }
    }
    const clearAll=()=>{
        setHeight("");
        setWeight("");
        setBmi(null);
        setBmiStatus("");
    }
  return (
    <>
      <div className="bmi-calculator">
        <div className="box">
        <img src="/images/bmi.jpg" alt="BMI Calculator"  />
        </div>
        <div className="data">
            <h1>BMI CALCULATOR</h1>
            {errorMessage && <p className="error">{errorMessage} </p>}
            <div className="input-container"> 
                <label htmlFor="height">Height (cm):</label>
                <input type="text" value={height} id="height" onChange={(e)=>setHeight(e.target.value)} />
            </div>
            <div className="input-container"> 
                <label htmlFor="weight">Weight (kg):</label>
                <input type="text" value={weight} id="weight" onChange={(e)=>setWeight(e.target.value)} />
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clearAll}>Clear</button>
            {bmi !== null && (
                <div className="result">
                    <p>Your BMI is: {bmi}</p>
                    <p>Status: {bmistatus}</p>
                </div>
            )}
        </div>
        <footer className="footer">
            <p>Designed by <a href="https://harshaperiyar10042003.github.io/My-Portfolio/" target="_blank" rel="noopener noreferrer">Harshavardhini</a></p>
            </footer>
      </div>
    </>
  )
}

export default Bmi
