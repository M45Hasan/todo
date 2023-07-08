import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  let [dList, setList] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let todoList = async () => {
      let how = await axios.get("http://localhost:5000/todo/list");
      setList(how.data);
    };
    todoList();
  }, []);

  let handleOut = () => {
    navigate("/");
  };

  let handelDell = async (e) => {
    let how = await axios.post("http://localhost:5000/todo/del", {
      id: e._id,
    });
    console.log(e._id);
  };
  return (
    <div className="w-[350px]">


      <div className="container mx-auto px-4">
        <div className="w-full flex justify-between p-4 border border-gray-200 bg-gray-50 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
          <div className=" bg-gray-800 hover:bg-gray-700 text-[12px] font-bold px-1 border border-gray-600 hover:border-[#646cff]  rounded-sm shadow-lg cursor-pointer">Todo List</div>
        <button className="" onClick={handleOut}>
        Log out
      </button>
        </div>
        <div className="flex p-2  bg-white border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x dark:border-gray-600">
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {dList.map((todo, i) => (
              <>
                <li className="pb-3 sm:pb-4 ">
                  <div className="flex items-center w-[300px] space-x-4">
                    <div className="flex-shrink-0 shadow-lg rounded-full bg-cyan-400">
                      <img
                        className="w-7 h-7 rounded-full"
                        src="vite.svg"
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {todo.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {todo.email}
                      </p>
                    </div>
                  
                    <button
                      type="button"
                      onClick={()=>handelDell(todo)}
                      className="text-red-700 hover:text-white  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                      X
                    </button>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
