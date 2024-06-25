import ResolutionSubForm from "./ResolutionSubForm";
import { useEffect, useState } from "react";

const ResolutionForm = ({ pair, setPriorityStudents, setClaimedStudents }) => {
  console.log(pair, "resolution form");
  const [student1, student2] = pair.students;
  const [isShowingResolutionForm1, setIsShowingResolutionForm1] =
    useState(true);
  const [isShowingResolutionForm2, setIsShowingResolutionForm2] = useState(
    !!student2.name
  );

  useEffect(() => {
    if (!isShowingResolutionForm1 && !isShowingResolutionForm2) {
      setClaimedStudents((currentClaimedStudents) => {
        return currentClaimedStudents.filter((claimedStudent) => {
          return (
            claimedStudent.students[0].name !== student1.name &&
            claimedStudent.students[1].name !== student2?.name
          );
        });
      });
    }
  }, [isShowingResolutionForm1, isShowingResolutionForm2]);

  return (
    <>
      {isShowingResolutionForm1 && (
        <ResolutionSubForm
          setIsShowingResolutionForm={setIsShowingResolutionForm1}
          student={student1}
          setPriorityStudents={setPriorityStudents}
        />
      )}
      {isShowingResolutionForm2 && (
        <ResolutionSubForm
          setIsShowingResolutionForm={setIsShowingResolutionForm2}
          student={student2}
          setPriorityStudents={setPriorityStudents}
        />
      )}
    </>
  );
};

export default ResolutionForm;
