import { useEffect, useState } from "react";
import "./ResolutionSubForm.css";
export default function ResolutionSubForm({
  student,
  setPriorityStudents,
  setIsShowingResolutionForm,
  setResolvedStudents,
  setUnclaimDisabled,
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
      setUnclaimDisabled(true);
    }
  }, [formText]);

  return (
    <div className="resolution-sub-form">
      <h2>{student.name}</h2>
      <textarea
        value={formTextTemp}
        onChange={(e) => {
          setFormTextTemp(e.target.value);
        }}
      ></textarea>
      <div className="sub-form-buttons">
        <button
          onClick={() => {
            setFormText(formTextTemp);
          }}
        >
          Submit
        </button>
        <button
          onClick={() => {
            setPriorityStudents((currentPriorityStudents) => {
              return [...currentPriorityStudents, student];
            });
            setIsShowingResolutionForm(false);
            setUnclaimDisabled(true);
          }}
        >
          Unclaim
        </button>
      </div>
    </div>
  );
}
