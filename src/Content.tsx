import './Content.css';
import serena from './assets/serena.jpeg';

const Content = () => {
    return (
        <div className="content-container">
            <h2><p>Spotted: S is back in town!!</p></h2>
            <img src={serena} alt="Serena" style= {{width: 300}} />
            <p>After taking a much needed break from the UES, Serena van der Woodsen has returned. We've missed you, S!</p>
        </div>
    );
};

export default Content;
