import React, { useState, useEffect } from "react";
import { marked } from 'marked';
import './App.css';

const defaultMarkdown = `# Welcome to My Markdown Previewer

## Overview

This is a simple **Markdown Previewer** built using React. Below you'll find various examples of markdown syntax.

### Headers

You can create headers of different sizes using the \`#\` symbol:

# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header

### Links

Links can be added using the following syntax:

[LINK](https://www.example.com)

### Inline Code

Inline code can be added using backticks, like this: \`console.log('Hello, world!');\`

### Code Blocks

Code blocks can be created using triple backticks:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('World'));
\`\`\`

### Lists

You can create unordered lists using dashes or asterisks:

- Item 1
- Item 2
- Item 3

Or ordered lists using numbers:

1. First item
2. Second item
3. Third item

### Blockquotes

Blockquotes are created using the \`>\` symbol:

> This is a blockquote.

### Images

Images can be added using the following syntax:

![Placeholder Image](https://via.placeholder.com/150)

### Text Formatting

You can make text **bold**, *italic*, or ***both*** using asterisks or underscores:

- **Bold**: \`**Bold**\`
- *Italic*: \`*Italic*\`
- ***Both***: \`***Both***\`

### Horizontal Rules

Horizontal rules can be added using three or more hyphens, asterisks, or underscores:

---

### Tables

Tables can be created using pipes and hyphens:

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |
| Row 3    | Data     | Data     |

### Task Lists

Task lists can be created using square brackets:

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

Enjoy exploring the features of this markdown previewer!



`;

const MarkdownPreviewer = () => {
    const[markdown,setMarkdown] = useState(defaultMarkdown);
    
    useEffect(() => { document.getElementById('preview').innerHTML = marked(markdown);
    },[markdown]);
    
    const handleChange = (event) => {
      setMarkdown(event.target.value);
    };
    
  
    return (
      <>
      <div className="editorWrap">
        <div className="toolbar"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> &nbsp; Editor
        </div>
      <div className="markdown-previewer">
        
        <textarea id="editor" value={markdown} onChange={handleChange} />
        </div>
        </div>
        
        <div className = "previewWrap">
                <div className = "toolbar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg> &nbsp; Previewer
          </div>
  
        <div id="preview"/>
      </div>
      </>
    );
  };

  export default MarkdownPreviewer;