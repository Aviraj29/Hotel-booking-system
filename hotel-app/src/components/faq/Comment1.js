
import React, { useState } from 'react'
import Comments from './Comments'
import './comment.css'
import useNode from "./UseNode"
const comments = {
  id: 1,
  items: [],
};
export default function Comment1() {
  const [commentsData, setCommentsData] = useState(comments);
 
  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };
 
  return (
    <div>
      <Comments handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}/>
    </div>
  )
}




