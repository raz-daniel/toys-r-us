import './Home.css';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/toys-hero.jpg';

export default function Home(): JSX.Element {
  return (
    <div className='Home'>
      <div className='Home-banner'>
        <img src={heroImage} alt="Colorful toys display" />
        <h1>Toys-R-Us</h1>
        <p>Where imagination comes to play! Discover our carefully curated collection of toys for all ages.</p>
      </div>
      
      <div className='Home-features'>
        <div className='Home-feature'>
          <div className='Home-feature-icon'>🧸</div>
          <h3>Age-Appropriate</h3>
          <p>Find perfect toys for every developmental stage, from babies to adults.</p>
        </div>
        
        <div className='Home-feature'>
          <div className='Home-feature-icon'>🎨</div>
          <h3>Educational Value</h3>
          <p>Toys that inspire creativity, problem-solving, and learning through play.</p>
        </div>
        
        <div className='Home-feature'>
          <div className='Home-feature-icon'>💰</div>
          <h3>Budget-Friendly</h3>
          <p>Quality toys at various price points to fit every family's budget.</p>
        </div>
      </div>
      
      <div className='Home-benefits'>
        <h2>Why Shop With Us?</h2>
        <div className='Home-benefits-container'>
          <div className='Home-benefit'>
            <span>✅</span>
            <p>Safety-tested toys that meet international standards</p>
          </div>
          <div className='Home-benefit'>
            <span>✅</span>
            <p>Expert staff recommendations for age-appropriate gifts</p>
          </div>
          <div className='Home-benefit'>
            <span>✅</span>
            <p>Durable, high-quality toys that last for generations</p>
          </div>
        </div>
      </div>

      <div className='Home-cta'>
        <Link to="/games/list" className="primary-btn">Browse Toys</Link>
        <Link to="/games/add" className="secondary-btn">Add New Toy</Link>
      </div>
    </div>
  );
}