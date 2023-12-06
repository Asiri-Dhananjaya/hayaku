import './App.css';
import {useState, useEffect} from 'react';


function App() {


    const [data, setData] = useState([])
    const [user, setUser] = useState({})


    // useEffect(() => {

    //   // fetch('https://hayakume.com/api/bathiya', {
    //   //   header: 
    //   //   new Headers({
    //   //     'Content-Type': 'application/text'
    //   // }), 
    //   // })
    //   // .then(response => response.json())
    //   // .then((json)  =>{
    //   //   setData(json['data']);
    //   //   setUser(json['user'])
    //   // })


    //   axios.get(`https://cors-anywhere.herokuapp.com/https://hayakume.com/api/bathiya`)
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   })

    // }, []);
    
    
    useEffect(() => {
      console.log(data)


      {data.map((item, index) => {

        console.log(item)
        console.log(index)
      })}
    }, [data]);



  return (
    <div className="App">

        <div className="container">

          <div className="row">
              <div className = "header-div">
                <img className = "cover-img" src = "https://marketplace.canva.com/EAEmBit3KfU/1/0/1600w/canva-black-flatlay-photo-motivational-finance-quote-facebook-cover-myVl9DXwcjQ.jpg"/>
                <div className = "profile-img-div">
                  <img className = "profile-img" src = "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" />
                </div>
              </div>

          </div>

          <div className="row" style = {{marginTop: '5rem'}}>
            <div className = "name">
              Bathiya Chathuranga
            </div>
          </div>

          <div className="row mt-1">
            <div className = "bio">
              I am a full stack developer. I am a full stack developer. I am a full stack developer. I am a full stack developer. I am a full stack developer. 
            </div>
          </div>


          <div className="mt-3 btn-div">
              <button className = "btn btn-info">Exchange Contact</button>
              <button className = "btn btn-info">Share</button>

          </div>





          <div className = "row mt-5 icon-container">


            {data.map((item, index) => {
                return <div className = "col-4 icon-div" onClick = {()=> window.location.href= ''}>
                    <img src="/icons/address.png" alt="" className = "icon" />
                    <p>Address</p>
                </div>
            })}

{/* 
            <div className = "col-4 icon-div">
                <img src="/icons/address.png" alt="" className = "icon" />
                <p>Address</p>
            </div>

            <div className = "col-4 icon-div">
                <img src="/icons/address.png" alt="" className = "icon" />
                <p>Address</p>
            </div>


            <div className = "col-4 icon-div">
                <img src="/icons/address.png" alt="" className = "icon" />
                <p>Address</p>
            </div>

            <div className = "col-4 icon-div">
                <img src="/icons/address.png" alt="" className = "icon" />
                <p>Address</p>
            </div> */}



          </div>




          <div className = "row mt-5 footer">
            <p>© Hayaku 2023</p>
          </div>


        </div>


    </div>
  );
}

export default App;
