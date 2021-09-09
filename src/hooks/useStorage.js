import { useState, useEffect } from "react";
const useStorage = () => {
  const [listStudent, setListStudent] = useState(["Huyen", "Hoa",
    "Hung",
    "Long",
  ]);
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    const listStudent1 = listStudent;
    for (let index = 0; index < listStudent.length; index++) {
      if (listStudent1[index] === name)
        listStudent1.splice(listStudent1.indexOf(name), 1);
    }

    setListStudent(listStudent1);
    setName("");
  };
  return [listStudent, name, onChange, onClick];
};

export default useStorage;