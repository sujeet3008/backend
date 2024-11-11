
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';

import DocumentList from './components/documentList';
import UploadDocument from './components/uploadDocument';

function App() {

  




  
  return (
    <div>

  
    
          <h1>Welcome to My Application</h1>
          <Outlet />


          <DocumentList/>
          <UploadDocument/>

          
          
    
    
    </div>
  );
}

export default App;
