import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const JoditEditorComp = ({config, setValue,value}) => {
    const editor = useRef(null);
  return (
    <div>
        	<JoditEditor
			ref={editor}
			value={value}
			config={config}
			onChange={newContent => setValue(newContent)}
		
		/>
    </div>
  )
}

export default JoditEditorComp