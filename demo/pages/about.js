import { useEffect, useState } from 'react';
export default function Home() {
  const [employee, setEmployee] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const id = 14
      // const URL =
      //   'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth';
      const URL = `/api/employees/${id}`
      const apiResponse = await fetch(URL);
      const employeeData = await apiResponse.json();
      setEmployee(employeeData);
};
    fetchData();
  }, []);
  return (
    <div>
      <h1>A simple page</h1>
      <p>But with state: {employee.name}</p>
    </div>
); }