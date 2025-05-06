import jammy from '../assets/img/small-profile.jpg'
import './welcome.css'

export function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to this App!</h1>
      <p>This is a simple welcome component.</p>
      <img src={jammy} alt="Profile" />
    </div>
  );
}