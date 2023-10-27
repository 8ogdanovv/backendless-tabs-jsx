import * as React from 'react';
import { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import './DummyComponent.css';
import CircularLoader from '../components/CircularLoader';
import { AppContext } from '../AppContext';


const DummyList = () => {
  const [todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { showFrame } = useContext(AppContext);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        setTodos(data.todos);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleToggle = (value) => () => {
    const currentIndex = todos.findIndex((todo) => todo.id === value.id);
    const newTodos = [...todos];

    if (currentIndex !== -1) {
      newTodos[currentIndex].completed = !newTodos[currentIndex].completed;
      setTodos(newTodos);
    }
  };

  if (isLoading) {
    return <CircularLoader />;
  }

  return (
    <section className='todos-container' style={{ height: showFrame ? '45dvh' : '80dvh' }}>
      <List sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          const { id, todo: todoItem, completed } = todo;
          const labelId = `checkbox-list-label-${id}`;

          return (
            <ListItem
              key={id}
              secondaryAction={<IconButton edge="start" aria-label="comments"><CommentIcon /></IconButton>} disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(todo)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="end"
                    checked={completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todoItem} className="list-item-text"/>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </section>
  );
};

export default DummyList;
