import { Link } from 'react-router-dom';
import './Page.css';

export function SecondPage() {
  return (
    <div className="second-page">
      <h1>第二个页面</h1>
      <p>这是应用的第二个页面。</p>
      
      <button className="btn">
        <Link to="/">返回首页</Link>
      </button>
    </div>
  );
}

export default SecondPage;