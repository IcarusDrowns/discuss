import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore("projects");
  const handleClick = (e) => {
    deleteDocument(project.id);
  };
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              {user.displayName}
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>

      <button className="btn" onClick={handleClick}>
        Remove
      </button>
    </div>
  );
}
