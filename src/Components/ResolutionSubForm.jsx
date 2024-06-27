import { useEffect, useState } from "react";
export default function ResolutionSubForm({
  student,
  setPriorityStudents,
  setIsShowingResolutionForm,
  setResolvedStudents,
}) {
  const [formTextTemp, setFormTextTemp] = useState("");
  const [formText, setFormText] = useState("");

  useEffect(() => {
    if (formText) {
      setResolvedStudents((currentResolvedStudents) => {
        return [
          ...currentResolvedStudents,
          { student: student, comment: formText },
        ];
      });
      setPriorityStudents((currentPriorityStudents) => {
        return [
          ...currentPriorityStudents,
          { ...student, "last-seen": String(new Date()) },
        ];
      });
      setIsShowingResolutionForm(false);
    }
  }, [formText]);

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
          setFormText(formTextTemp);
        }}
      >
        Submit
      </button>
      <button>Unclaim {student.name}</button>
    </div>
  );
}
