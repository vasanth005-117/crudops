const BASE_URL = "http://localhost:8001";

export const getStudents = async () => {
  const res = await fetch(`${BASE_URL}/getstudents`);
  return res.json();
};

export const addStudent = async (student) => {
  await fetch(`${BASE_URL}/addstudent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
};

export const updateStudent = async (id, student) => {
  await fetch(`${BASE_URL}/upstudent/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
};

export const deleteStudent = async (id) => {
  await fetch(`${BASE_URL}/delstudent/${id}`, {
    method: "DELETE",
  });
};
