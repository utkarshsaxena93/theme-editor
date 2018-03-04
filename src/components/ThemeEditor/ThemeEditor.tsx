import * as React from 'react';

import Preview from '../Preview';
import TextEditor from '../TextEditor';

class ThemeEditor extends React.Component {
  render() {
    return (
      <>
        <TextEditor />
        <Preview />
      </>
    );
  }
}

export default ThemeEditor;
