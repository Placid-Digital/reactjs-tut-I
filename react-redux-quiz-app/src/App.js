import {
   BrowserRouter as Router}  from 'react-router-dom';
 import   {Switch, Route} from 'react-router-dom';

import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import {Container} from '@mui/material';
import {Box} from '@mui/system';
import {Typography} from '@mui/material'

function App() {
  return (
    <Router >
       <Container maxWidth="sm">
         <Box textAlign="center" mt={5}>
         <Switch>
            <Route path="/" exact>
              <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
                <Settings />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
        </Switch>
         </Box>
        </Container>
    </Router>                                      
  );
}

export default App;
