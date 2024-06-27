import ResolutionForm from "./ResolutionForm";
import { useState } from "react";
import "./ClaimedCard.css";

const ClaimedCard = ({
  pair,
  setClaimedStudents,
  setPriorityStudents,
  setStaffData,
  setResolvedStudents,
}) => {
  const [student1, student2] = pair.students;
  const [isShowingResolutionForm, setIsShowingResolutionForm] = useState(false);
  const [unclaimDisabled, setUnclaimDisabled] = useState(false);

  const staff = pair.staff;
  return (
    <div className="claimed-card">
      <div className="upper-claimed">
        {student2.name ? (
          <h1>
            {student1.name} and {student2.name} - {staff}
          </h1>
        ) : (
          <h1>
            {student1.name} - {staff}
          </h1>
        )}
      </div>
      <div className="lower-claimed">
        <button
          onClick={() => {
            setIsShowingResolutionForm(true);
          }}
        >
          Resolve
        </button>
        <button
          disabled={unclaimDisabled}
          onClick={() => {
            setPriorityStudents((currentPriorityStudents) => {
              if (student2.name) {
                return [...currentPriorityStudents, student1, student2];
              }
              return [...currentPriorityStudents, student1];
            });
            setClaimedStudents((currentClaimedStudents) => {
              return currentClaimedStudents.filter((claimedStudent) => {
                return (
                  claimedStudent.students[0].name !== student1.name &&
                  claimedStudent.students[1].name !== student2?.name
                );
              });
            });
            setStaffData((currentStaffData) => {
              return currentStaffData.map((staffMember) => {
                if (staffMember.name === staff) {
                  return {
                    ...staffMember,
                    students: staffMember.claimed_students.filter((student) => {
                      return (
                        student.name !== student1.name &&
                        student.name !== student2?.name
                      );
                    }),
                  };
                }
                return staffMember;
              });
            });
          }}
        >
          Unclaim
        </button>
      </div>
      <div>
        {isShowingResolutionForm && (
          <ResolutionForm
            setUnclaimDisabled={setUnclaimDisabled}
            setPriorityStudents={setPriorityStudents}
            pair={pair}
            setClaimedStudents={setClaimedStudents}
            setIsShowingResolutionForm={setIsShowingResolutionForm}
            setResolvedStudents={setResolvedStudents}
          />
        )}
      </div>
    </div>
  );
};

export default ClaimedCard;
