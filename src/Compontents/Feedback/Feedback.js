/* eslint-disable no-undef */
import  React, {useState} from 'react'
import './Feedback.css'
function Feedback() {
     const Clearly = (e) => {
    setData({massage : ""})
  }
  const [data, setData] = useState({
    
    massage : "",
    
  });
  const {massage} = data;
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const data = await fetch("https://v1.nocodeapi.com/jaseem1999/google_sheets/UcsNdvrrSWAPkQQH?tabId=Sheet1",
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify([
          [massage, new Date().toLocaleString()],
        ]),
      }
      );
      // eslint-disable-next-line no-undef
      await response.json()
      setData({...data, massage: "",});
      
    } catch (err) {
      console.log(err);
    }
  }
    return (
        
        <div className="container1">
            
              <form id="submit-form" onSubmit={handleSubmit} >
                  
              Feedback <br/>
              <textarea id="subject" name="massage" value={massage} onChange={handleChange} placeholder="Write something.."></textarea><br/>
              <input 
              onClick={() => {
                
                            alert('submitted successfully')
                            
                            }
                        }
              
              type="submit" value="submit"></input><br/>
              </form>


        </div>
    )
}

export default Feedback
