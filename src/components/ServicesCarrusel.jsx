import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export function ServicesCarrusel({props}) {
    
  return (
    <>
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
        <li>
          <ul>
            <ListSubheader sx={{marginTop:10}}><h4>Servicios</h4></ListSubheader>
            {props.map((item) => (
              <ListItem key={props.indexOf(item)}>
                <ListItemText primary={item.nombre}/>
              </ListItem>
            ))}
          </ul>
        </li>
    </List>
    </>
  );
}
