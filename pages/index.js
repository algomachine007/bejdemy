import { getCourses } from "../utils/db";
import { useUser } from "@auth0/nextjs-auth0";
const Index = ({ courses }) => {
  const { error, user, loading } = useUser();
  console.log("USER", user);
  return (
    <div>
      <h1>Courses</h1>
      <pre>{JSON.stringify(courses, null, 2)}</pre>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getCourses();

  console.log(data);

  return {
    props: {
      // because of the createdAt field, we need to use JSON.parse(JSON.stringify())
      courses: JSON.parse(JSON.stringify(data)),
    },
  };
};

export default Index;
