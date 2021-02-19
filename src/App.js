import './App.css';
import AppHeader from './component/AppHeader';

function App() {
    
    return (
        <div className="App">
            <AppHeader />

            <div className="nav-link">
                <h4><a href="/home">HOME</a></h4>    
                <h4><a href="/home">LINE</a></h4>
                <h4><a href="/home">COLOR</a></h4>
                <h4><a href="/home">CONTACT</a></h4>    
            </div>    

        </div>
    );
}

export default App;
