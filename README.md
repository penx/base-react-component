# Smarter Click

## React Development Warnings

#### Usage

(with create-react-app)

```
import React from 'react';
import { render } from 'react-dom';
import DevelopmentWarnings from '@smarter-click/react-development-warnings';

const App = () => {

  const Foo = () => { /* some react component */}

  return process.env.NODE_ENV === 'development'
    ? (
      <DevelopmentWarnings
        message="Custom message"
        dev
      >
        <Foo />
      </DevelopmentWarnings>
    )
    : <Foo />;
};

render(<App>, document.getElementById('root'));
```
