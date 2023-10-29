import { Outlet, NavLink } from "react-router-dom";
import './NavigationLayout.css';

function NavigationLayout() {
  return (
    <div>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink
              to="/dummyTable"
              className={({ isActive }) =>
                isActive ? "active nav-list-item-link" : "nav-list-item-link"
              }
            >
              dummyTable
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/dummyChart"
              className={({ isActive }) =>
                isActive ? "active nav-list-item-link" : "nav-list-item-link"
              }
            >
              dummyChart
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/dummyList"
              className={({ isActive }) =>
                isActive ? "active nav-list-item-link" : "nav-list-item-link"
              }
            >
              dummyList
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet className="router-outlet" />
    </div>
  );
}

export default NavigationLayout;