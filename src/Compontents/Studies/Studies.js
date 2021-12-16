import  React, {useState} from 'react'
import './Studies.css'

function Studies() {
    const Clearly = (e) => {
    setData({name: '', email : "", massage : "", number : "",})
  }
  const [data, setData] = useState({
    name : "",
    email : "",
    massage : "",
    number : "",
  });
  const {name, email, massage, number} = data;
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const data = await fetch("https://v1.nocodeapi.com/jaseem1999/google_sheets/UcsNdvrrSWAPkQQH?tabId=Sheet2",
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify([
          [name,email,massage,number, new Date().toLocaleString()],
        ]),
      }
      );
      // eslint-disable-next-line no-undef
      await response.json()
      setData({...data, name:"", email: "", massage: "", number: "",});
      
    } catch (err) {
      console.log(err);
    }
  }
    return (
        <div >
            <div className="titleS">
                  <h2>Comrade Muhammed Mustafa Study circle🗂️📕</h2>
            </div>
            <div className="circle" id="center">
              <img src="./img/STUDY%20CIRCLE%20logo.png" alt="logoCircle" />
            </div>
                  
        <div className="Row">
            <div className ='posterss'>
                <a href="https://jaseem1999.github.io/BBA/" className ='button'>BBA</a>
                <a href="https://jaseem1999.github.io/b.com/" className='button'>B.com</a>
                <a href="https://jaseem1999.github.io/BA.History/" className='button'>BA.History</a>
                <a href="https://jaseem1999.github.io/M.com/" className='button'>M.com</a>
                <a href="https://jaseem1999.github.io/Msc.Maths/" className='button'>Msc.Mathematics</a>
                <a href="https://jaseem1999.github.io/Msc.Physics/" className='button'>Msc.Physics</a>
                <a href="https://jaseem1999.github.io/sfi-nss-ottapalam-/" className='button'>Study Material</a>
                <a href="https://jaseem1999.github.io/bsc.math/" className='button'>Bsc.Mathematics</a>
                <a href="http://sdeuoc.ac.in/?q=content/ba-english-2019-admission" className='button'>BA.English</a>
                <a href="http://sdeuoc.ac.in/?q=content/baeconomics-2017-and-2019-admission" className='button'>BA.Economics</a>
                <a href="https://jaseem1999.github.io/Bsc/" className='button'>Bsc</a>
                <a href="https://jaseem1999.github.io/BA/" className='button'>BA</a>
                <a href="http://www.sdeuoc.ac.in/?q=content/study-material" className='button'>CU Materials</a>
                <a href="https://play.google.com/store/apps/details?id=com.basith.uocstudentsapp" className='button'>App📱</a>
            </div>
        </div>
        <div className='container'>
            <div className='Heading_copmpline'>
                <h2>Comrade Muhammed Mustafa Study circle form</h2>
                </div>
            </div>
            <div className='row'>
                <div className="column2">
                  <p>  RUN BY : SFI MES KALLADI COLLEGE MANNARKKAD<br/>
                    ➖➖➖➖➖➖<br/>
                  <ol start="1">
                    <li>HAPPY LEARNING 📕</li><br/>

                    സാമ്പത്തികമായി പിന്നോക്കം നിൽകുന്ന വിദ്യാർഥിൾക്ക് പഠന സൗകര്യം ഉറപ്പു വരുത്തുക.

                    വിദ്യാർത്ഥികൾക്ക് ആവശ്യമായ study materials, notes, എന്നിവ ലഭ്യമാകുക.<br/>
                    <a href="https://api.whatsapp.com/send/?phone=%2B919847877534&text&app_absent=0"><img className="wh-fbS" src="./img/whatsapp_cmmsc.png" alt="whatsapp"/></a><br/>
                     ➖➖➖➖➖➖<br/>

                    <li>RISE UP🪁🏆</li><br/>

                    PSC ,UPSC , മറ്റ്  മത്സരപരീക്ഷൾക് തയ്യാറെടുക്കുന്ന വിദ്യാർത്ഥികൾക്ക് പരിശീലനം നൽകുക.<br/>

                    വിദ്യാർത്ഥികളുടെ കരിയറുമായി ബന്ധപ്പെട്ട ആശങ്കകൾക്ക് പരിഹാരം കാണുക<br/><a href="https://chat.whatsapp.com/IlSY8BqFqCk5Ng3Si6pIqq"><span>RISE UP🪁🏆WhatsApp Group</span></a><br/>
                    <a href="https://wa.me/+918086762052"><img className="wh-fbS" src="./img/whatsapp_cmmsc.png" alt="whatsapp"/></a><br/>
                      ➖➖➖➖➖➖<br/>

                    <li> ഋതു 🎨🎤🖋️</li><br/>

                    നമ്മുടെ കോളേജിലെ സർഗ പ്രതിപകളെ കണ്ടത്തുകയും അവരുടെ കലാ ശേഷി പരിപോഷിക്കുകയും ചെയ്യുന്ന സാംസ്‌കാരിക കൂട്ടായ്‌മ<br/>
                    <a href="https://wa.me/+919895824107"><img className="wh-fbS" src="./img/whatsapp_cmmsc.png" alt="whatsapp"/></a><br/>
                      ➖➖➖➖➖➖<br/>
                   <li>Warm UP ⛹🏼‍♂️</li><br/>

                    നമ്മുടെ കോളേജിലെ കായികതാരങ്ങളുടെ ആശങ്കകൾ പരിഹരിക്കുക<br/>
                    <a href="https://wa.me/+919526927616"><img className="wh-fbS" src="./img/whatsapp_cmmsc.png" alt="whatsapp"/></a><br/>
                     ➖➖➖➖➖➖<br/>
                    </ol>
                    </p>
                </div>
                <div className='column'>
                    <form id='submit-form' onSubmit={handleSubmit}>
                        First Name<br/>
                        <input type="text" id="fname" name="name"  value={name} onChange={handleChange} placeholder="Your name.." /> <br/>
                        Number<br/>
                        <input type="text" id="1name" name="number"  value ={number} onChange={handleChange} placeholder="Enter your Number"/><br/>
                        Email<br/>
                        <input type="text" id="lname"  name="email" value={email} onChange={handleChange} placeholder="Enter your Email"/><br/>
                        Talk us<br/>
                        <textarea id="subject" name="massage" value={massage} onChange={handleChange} placeholder="Write something.."></textarea><br/>
                        <input
                        onClick={() => {
                            alert('Form submitted successfully')
                            }
                        }
                        type="submit" value="submit"/><br/>

                    </form>
                    
                </div>
                
                
            </div>
        </div>
    )
}

export default Studies
