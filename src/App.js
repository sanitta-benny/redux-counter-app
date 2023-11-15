
import './App.css';
import Button from '@mui/material/Button';
import Component from './components/Component';

function App() {
  return (
   
 <div className='w-100 flex-column' style={{display:"flex",justifyContent:"center",alignItems:"center",height:'100vh',flexWrap:"wrap"}}>
<div className=' flex-column rounded p-5' style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",flexWrap:"wrap"}}>

<h1 style={{color:"navy",backgroundColor:'white',display:"flex",flexWrap:"wrap"}}>Counter Application</h1>
    
 <Component/>
    </div>
    </div>
  );
}

export default App;
