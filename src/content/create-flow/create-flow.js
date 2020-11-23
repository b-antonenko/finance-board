import React from 'react';
import {Link} from "react-router-dom";

function CreateFlow() {
  return (
      <div>
          <p>Sorry, page still developing...</p>
          <p>Anyway, please choose operation you want to add</p>
          <Link to='./add-cash'><button>Cash injection</button></Link>
          <Link to='./add-spendings'><button>Declare spendings</button></Link>
      </div>
  )
};

export default CreateFlow;