'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

// Dynamically import react-quill-new to avoid SSR "document is not defined" errors
// and to ensure compatibility with React 19 which removed findDOMNode
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface WysiwygEditorProps {
  initialValue?: string;
}

export default function WysiwygEditor({ initialValue = '' }: WysiwygEditorProps) {
  const [content, setContent] = useState(initialValue);

  // Define modules for the toolbar
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'indent',
    'link', 'image'
  ];

  return (
    <div className="bg-background rounded-xl overflow-hidden border border-border">
      <input type="hidden" name="content" value={content} />
      <ReactQuill 
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        className="w-full h-full min-h-[300px] text-foreground"
      />
      <style jsx global>{`
        .ql-toolbar.ql-snow {
          border: none;
          border-bottom: 1px solid var(--border);
          background-color: var(--muted);
          border-radius: 0.75rem 0.75rem 0 0;
        }
        .ql-container.ql-snow {
          border: none;
          min-height: 300px;
          font-size: 1rem;
        }
        .ql-editor {
          min-height: 300px;
        }
        .ql-snow .ql-stroke {
          stroke: var(--foreground);
        }
        .ql-snow .ql-fill, .ql-snow .ql-stroke.ql-fill {
          fill: var(--foreground);
        }
        .ql-snow .ql-picker {
          color: var(--foreground);
        }
      `}</style>
    </div>
  );
}
