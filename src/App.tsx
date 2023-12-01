import './App.css';
import MuiButton from './components/MuiButton';
import { MuiModal } from './components/MuiModal';
import MuiSelect from './components/MuiSelect';
import MuiTextField from './components/MuiTextField';
import MuiTypography from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography/>
      <MuiButton/> <br/>
      <MuiTextField/><br/>
      <MuiSelect/>
      <MuiModal/>
    </div>
  );
}

export default App;
