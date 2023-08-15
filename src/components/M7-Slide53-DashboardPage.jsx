import { useNavigate, Outlet, Link } from 'react-router-dom'

export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();
  return (
    <div className="DashboardPage componentBox">
      <p>
        <Link to="/"> Home </Link> 
        <Link to="/about"> About</Link>
      </p>
      <h1>Dashboard</h1>
      <Outlet /> {/* see next slide */}
      {/* Will render either <DashboardMessages> when the URL is
      "/dash/messages", <DashboardTasks> at "/dash/tasks",
      or null if it is "/dash" */}
    
      <button onClick={() => navigate('/dash/tasks')}> Show Tasks</button>
    
      <button onClick={() => navigate('/dash/messages')}> Show Messages</button>
      <button onClick={() => navigate(-1)}> Back</button>
      
    </div>
  )
}
// Save as DashboardPage.jsx in a new folder called 'pages'
// See next slide for additional content for this file

// Add this code to DashboardPage.jsx : nested route path components
// rendered by matching nested routes in AppRoutes.jsx
// These components will appear in the <Outlet /> placeholder spot
// in the DashboardPage component if the route matches
export function DashboardMessages(props) {
  
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard, Here is the message</p>
    </div>
  )
}

export function DashboardTasks(props) {
  
  const tasks = [
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Decide on capstone project' },
    { id: 3, name: 'Learn databases' }
  ]
  
  return (
    <div className="DashboardTasks">
      <ul className="tasks">
        {tasks.map(task => <li key={task.id}>{task.name}</li>)}
      </ul>
    </div>
  )
}