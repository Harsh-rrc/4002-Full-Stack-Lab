import { organization } from "../data/organization";

const Organization = () => {
  return (
    <main style={{ padding: "20px" }}>
      <h2>Organization</h2>

      <ul>
        {organization.map((person, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              {person.firstName} {person.lastName}
            </span>
            <span>{person.role}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Organization;