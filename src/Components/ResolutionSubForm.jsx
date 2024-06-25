import fs from "fs/promises";
import { useEffect, useState } from "react";
export default function ResolutionSubForm({
  student,
  setPriorityStudents,
  setIsShowingResolutionForm,
}) {
  const [formTextTemp, setFormTextTemp] = useState("");
  const [formText, setFormText] = useState("");

  useEffect(() => {
    fs.readFile(`${__dirname}/../data/completedCheckins.json`, "utf8").then(
      (data) => {
        const completedCheckins = JSON.parse(data);
        completedCheckins.push({});
        return fs.writeFile(
          `${__dirname}/../data/completedCheckins.json`,
          JSON.stringify(completedCheckins, null, 2)
        );
      }
    );
  }, [formText]);
  //don't save comments or completed people just save in state.

  return (
    <div>
      <h2>{student.name}</h2>
      <textarea
        value={formTextTemp}
        onChange={(e) => {
          setFormTextTemp(e.target.value);
        }}
      ></textarea>
      <button
        onClick={() => {
          setPriorityStudents((currentPriorityStudents) => {
            return [...currentPriorityStudents, student];
          });
          setIsShowingResolutionForm(false);
          setFormText(formTextTemp);
        }}
      >
        Submit
      </button>
      <button>Unclaim {student.name}</button>
    </div>
  );
}
