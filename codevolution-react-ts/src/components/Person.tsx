import { PersonType } from "./Types";

export const Person = ({ person }: PersonType) => {
  return (
    <div>
      {person.map(individual => <p>{individual.firstName} {individual.lastName}</p>)}
    </div>
  );
};
