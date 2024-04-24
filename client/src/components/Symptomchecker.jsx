import React,{useState} from 'react'
import "./Symptomchecker.css"
import {motion} from 'framer-motion'
export default function Symptomchecker() {
  const [symptoms,setSymptoms]=useState();
  const[data,setData]=useState([])


  const genderArr = ["Male", "Female"];
  const ageArr = ["Younger Child (0 - 5 years)", "Older Child (6 - 16 years)", "Adult Child (17 - 29 years)", "Adult (30 - 60 years)"];
  const symptoms_dict = ['depression', 'visual_disturbances', 'yellow_crust_ooze', 'fast_heart_rate', 'cough', 'constipation', 'bruising', 'irritability', 'redness_of_eyes', 'congestion', 'bloody_stool', 'continuous_sneezing', 'abnormal_menstruation', 'red_sore_around_nose', 'malaise', 'receiving_unsterile_injections', 'swelling_of_stomach', 'irritation_in_anus', 'passage_of_gases', 'lethargy', 'toxic_look_(typhos)', 'irregular_sugar_level', 'hip_joint_pain', 'yellow_urine', 'pus_filled_pimples', 'throat_irritation', 'mood_swings', 'yellowish_skin', 'movement_stiffness', 'stomach_pain', 'nausea', 'runny_nose', 'dizziness', 'small_dents_in_nails', 'pain_behind_the_eyes', 'sunken_eyes', 'puffy_face_and_eyes', 'ulcers_on_tongue', 'anxiety', 'altered_sensorium', 'history_of_alcohol_consumption', 'indigestion', 'muscle_pain', 'extra_marital_contacts', 'knee_pain', 'bladder_discomfort', 'patches_in_throat', 'stiff_neck', 'continuous_feel_of_urine', 'chills', 'fluid_overload', 'cold_hands_and_feets', 'rusty_sputum', 'yellowing_of_eyes', 'silver_like_dusting', 'loss_of_appetite', 'receiving_blood_transfusion', 'muscle_wasting', 'lack_of_concentration', 'dehydration', 'dischromic _patches', 'swollen_extremeties', 'belly_pain', 'weight_gain', 'loss_of_balance', 'sinus_pressure', 'nodal_skin_eruptions', 'painful_walking', 'obesity', 'acidity', 'loss_of_smell', 'shivering', 'watering_from_eyes', 'enlarged_thyroid', 'palpitations', 'pain_during_bowel_movements', 'weakness_of_one_body_side', 'brittle_nails', 'cramps', 'mucoid_sputum', 'foul_smell_of urine', 'increased_appetite', 'vomiting', 'swelling_joints', 'diarrhoea', 'swollen_blood_vessels', 'inflammatory_nails', 'joint_pain', 'polyuria', 'dark_urine', 'drying_and_tingling_lips', 'internal_itching', 'weight_loss', 'scurring', 'excessive_hunger', 'blister', 'phlegm', 'acute_liver_failure', 'itching', 'fatigue', 'swelled_lymph_nodes', 'swollen_legs', 'sweating', 'back_pain', 'unsteadiness', 'skin_rash', 'blackheads', 'distention_of_abdomen', 'family_history', 'spotting_ urination', 'slurred_speech', 'blurred_and_distorted_vision', 'pain_in_anal_region', 'mild_fever', 'headache', 'prominent_veins_on_calf', 'burning_micturition', 'abdominal_pain', 'coma', 'neck_pain', 'skin_peeling', 'muscle_weakness', 'red_spots_over_body', 'high_fever', 'spinning_movements', 'fluid_overload.1', 'restlessness', 'breathlessness', 'stomach_bleeding', 'blood_in_sputum', 'chest_pain', 'weakness_in_limbs']


  const [openSymptom, setOpenSymptom] = useState(false)
  const [openGender, setOpenGender] = useState(false)
  const [openAge, setOpenAge] = useState(false)

  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")


  const [symptomList, setSymptomList] = useState([])
  const [symptomStr, setSymptomStr] = useState("")



  const handleSymptom = (data) =>{
    setOpenSymptom(!openSymptom)
    let str;
    if(symptomStr == "") str = data
    else str = symptomStr+','+data;

    setSymptomStr(str)
    setSymptomList([...symptomList, data])
  }

  const handleGender = (data) =>{
    setOpenGender(!openGender)
    setGender(data)
  }

  const handleAge = (data) =>{
    setOpenAge(!openAge)
    setAge(data)    
  }

  const handleSubmit = async (e) =>{

      e.preventDefault();
      try{
        const response = await fetch(`http://127.0.0.1:5000/api/predict`,{
              method:'POST',
              body:JSON.stringify({"symptoms":symptomStr}),
              headers : {
              'Content-Type':'application/json'
              },
        })
        
        const jsonData = await response.json();
        console.log(jsonData)

        setData(jsonData.data)
        setAge("");
        setGender("");
        setSymptomStr("")
        setSymptomList([])

      }
      catch(err){
        console.log(err)
      }

  }

  

  

  return (
    <div className="Symptomchecker">
        <div className="head">
        </div>
        <div className="content">
          <motion.div className="left"
            initial={{opacity:0,x:-30}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.5}}
          >
                <div className="form">
                <form class="Form_wrapper">
                <p class="title" onClick={()=>console.log(data.length)}>Enter Symptoms </p>
                <p class="message">Enter more symptoms for more accurate results, starting with your most severe one. </p>
                        
                <label className="relative">
                    <div onClick={()=>setOpenSymptom(!openSymptom)} required="" placeholder="" class="inputDiv">{symptomList === "" ? <>Symptoms</> :<>Symptoms</> }</div>

                    {
                      openSymptom &&
                      <div className="listBlock">
                      {
                        symptoms_dict &&
                        symptoms_dict.map((data,idx)=>{
                          return(
                            <div className="singleBlock" onClick={()=>handleSymptom(data)}>
                              {data}
                            </div>
                          )
                        })
                      }
                      
                    </div>}
                    <motion.div className="selectedSymptom" whileFocus={{scale:1.1}}>
                      {
                        symptomList &&
                        symptomList.map((data, idx)=>{
                          return(
                            <div className="singleSymptom">{data}</div>

                          )
                        })
                      }
                    </motion.div>
                    
                </label> 

                <label className="relative">
                    <div onClick={()=>setOpenGender(!openGender)} required="" placeholder="" class="inputDiv">{gender === "" ? <>Sex at birth</> :<>{gender}</> }</div>
                    {
                      openGender &&
                      <div className="listBlock">
                      {
                        genderArr &&
                        genderArr.map((data,idx)=>{
                          return(
                            <div className="singleBlock" onClick={()=>handleGender(data)}>
                              {data}
                            </div>
                          )
                        })
                      }
                      
                    </div>}
                    
                </label> 

                <label className="relative">
                    <motion.div onClick={()=>setOpenAge(!openGender)} required="" placeholder="" class="inputDiv" whileFocus={{scale:1.1}}>{age === "" ? <>Select Age</> :<>{age}</> }</motion.div>

                    {
                      openAge &&
                      <div className="listBlock">
                      {
                        ageArr &&
                        ageArr.map((data,idx)=>{
                          return(
                            <div className="singleBlock" onClick={()=>handleAge(data)}>
                              {data}
                            </div>
                          )
                        })
                      }
                      
                    </div>}
                    
                  
                    
                </label> 

                
                    
                
                <motion.button class="submit" onClick={(e)=>handleSubmit(e)} whileHover={{scale:1.1}}>Submit</motion.button>
            </form>
                </div>
          </motion.div>
          <motion.div className="right"
            initial={{opacity:0,x:-30}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5}}
          >
            
              {
                data.length != 0 &&
                <>
                  <motion.div className="output-disease"
                    initial={{opacity:0,y:40}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:0.5}}
                  >
                    <div className="precautions">
                      <div className="outputhead"><b>{data.size == 0? <>No disease selected</> : <>{data.predicted_disease}</>}</b></div>
                      <div className="outputcontent">
                        {data.dis_des}
                      </div>
                    </div>
                  </motion.div>
                    <div className="output-recommendation">
                      <div className="description"><div className="outputhead2"><b>Recommendation</b></div></div>
                      <motion.div className="outputlist"
                        initial={{opacity:0,y:-40}}
                        animate={{opacity:1,y:0}}
                        transition={{duration:0.5}}
                      >
                        <div className="medications">
                          <div className="medicationsbutton">Medications</div>
                          <div className="medications-content">
                          {
                            data.medications_list &&
                            data.medications_list.length > 0 &&
                            data.medications_list.map((data,idx)=>{
                              return(
                                <div>• {data}</div>
                              )
                            })
                          }
      </div>
                        </div>
                        <div className="dietlist">
                          <div className="dietlistbutton">Diet List</div>
                        <div className="dietlist-content">
                        {
                            data.rec_diet_list &&
                            data.rec_diet_list.length > 0 &&
                            data.rec_diet_list.map((data,idx)=>{
                              return(
                                <div>• {data}</div>
                              )
                            })
                          }
      </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="output">
                      <div className="precautions">
                        <div className="outputhead2"><b>Precautions</b></div>
                        <div className="outputcontent">
                          {
                            data.precautions &&
                            data.precautions.length > 0 &&
                            data.precautions.map((data,idx)=>{
                              return(
                                <div>• {data}</div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                </>
              }
                
                
                <div className="getstarted">
                    <p>How to get started</p>
                    <div className="list">
                      <ul>
                      <li>Begin by entering symptoms that best describe your current condition.</li>
                      <li>Symptoms can be entered in your own words or chosen from the list of matching suggestions, select the most appropriate.</li>
                      <li>If no suggestions appear, double-check your spelling or use different words to describe your symptoms.</li>
                      <li>Submitting a symptom leads to a page that displays a list of potential diagnoses, which can be accessed by tapping or clicking on them to get information.</li>
                      </ul>
                  </div>
                  <p>Best Practices</p>
                  <div className="list">
                      <ul>
                      <li>Use medical language as much as possible when entering symptoms. For example, "abdominal pain" is better than "belly hurts".</li>
                      <li>Start with entering the area of the body affected, then the symptom. For example "abdominal pain" instead of "pain in abdomen".</li>
                      <li>Use text, not numbers. For example, enter "high blood pressure" instead of "BP 150/90".</li>
                      <li>Submitting a symptom leads to a page that displays a list of potential diagnoses, which can be accessed by tapping or clicking on them to get information.</li>
                      </ul>
                  </div>
                  <div className="sick">
                    <p>How do I know I am sick</p>
                    <div className="sickcontent">
                    How do I know if I’m sick?
  Using an online symptom checker is simple. For instance, you might be a 45-year-old-woman from the UK who is currently experiencing a headache, a fever and a sore throat. Inputting this information into the symptom checker will give you some likely ‘common’ diagnoses. These include: strep throat, tonsillitis, sinusitis and flu.

  But the self-diagnosis calculator will also give a list of rarer but more serious diagnoses tagged ‘Urgent’. Here you’ll find links to our patient information leaflets about much less common conditions, such as temporal arteritis, meningitis and toxic shock syndrome. If, after reading the information, you think one of these serious conditions could apply to you, you should seek medical advice immediately.
                    </div>
                  </div>
              </div>
              
              
                
          </motion.div>
        </div>
    </div>
  )
}
