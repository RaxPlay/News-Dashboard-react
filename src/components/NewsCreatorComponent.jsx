import { useReducer, useState } from "react"

const initialState = [{
  id: new Date().getTime(),
  title: "",
  content: ""
}]

const appReducer = (state = initialState, action = {}) => {
  
  switch(action.type){
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return (
        state.filter(createdNew => createdNew.id !== action.payload)
      );
  }
}

export const NewsCreatorComponent = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const [newState, dispatch] = useReducer(appReducer, initialState);

  const onNewTitleChange = () => {
    event.preventDefault();
    setNewTitle(event.target.value);
  }

  const onNewContentChange = () => {
    event.preventDefault();
    setNewContent(event.target.value);
  }
  
  const addNew = () => {
    event.preventDefault();

    if(newTitle == "" || newContent == ""){
      return;
    }

    const createdNew = {
      id: new Date().getTime(),
      title: `${newTitle}`,
      content: `${newContent}`,
    }

    const action = {
      type: "ADD",
      payload: createdNew,
    }

    dispatch(action);
  }

  const deleteNew = ({ id }) => {
    const action = {
      type: 'DELETE',
      payload: id,
    }

    dispatch(action);
  }

  return (
    <>
      <h1 className="bg-linear-to-b from-red-400 to-red-500">Create your News</h1>

      <form action="create-news" className="flex justify-center align-baseline" onSubmit={addNew}>
        <input type="text" className="mt-10 h-12 w-[300px] p-2 text-xl border rounded-lg" 
        placeholder="Title" 
        value={newTitle} 
        onChange={onNewTitleChange}
        />
        
        <input type="text" className="mt-10 w-[300px] border rounded-lg p-3 text-xl absolute top-[300px]"
        placeholder="content" 
        value={newContent}
        onChange={onNewContentChange} 
        />

        <button onClick={addNew} className=" mt-10 ml-10 border border-red-300 bg-linear-to-br from-red-500 to-red-400 rounded-lg h-[50px] w-[50px] duration-300 hover:rounded-xl hover:from-red-400 hover:to-red-500">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </form>

      <ul className="" id="ul">
        {newState.map (createdNew => {
          return (
            <li key={createdNew.id} className="border rounded-xl w-[1000px] bg-linear-to-br from-gray-400 to-gray-500 h-[300px] mt-40 flex justify-center">
              <div>
                <span className='flex'>{createdNew.title}</span>
              </div>
            
              <div className="">
                <span>{createdNew.content}</span>
              </div>

              <button onClick={() => deleteNew(createdNew)} className="border rounded-sm h-6 w-6  border-red-300 bg-linear-to-br from-red-500 to-red-400">
                🗑️
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
