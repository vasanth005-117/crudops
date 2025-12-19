import { useState } from "react";
import {
  addStudent,
  getStudents,
  deleteStudent,
  updateStudent,
} from "../services/studentService";

export default function StudentCrud() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = async () => {
    if (!form.name || !form.email || !form.course) return;

    if (editId) {
      await updateStudent(editId, form);
      setEditId(null);
    } else {
      await addStudent(form);
    }

    setForm({ name: "", email: "", course: "" });
  };

  const loadStudents = async () => {
    setStudents(await getStudents());
  };

  const editStudent = (s) => {
    setForm({ name: s.name, email: s.email, course: s.course });
    setEditId(s.id);
  };

  return (
    <div className="container">
      <h3>Student Form</h3>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="course"
        value={form.course}
        onChange={handleChange}
        placeholder="Course"
      />

      <button onClick={handleAddOrUpdate}>
        {editId ? "Update" : "Add"}
      </button>

      <hr />

      <button onClick={loadStudents}>Get All Students</button>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} | {s.email} | {s.course}
            <span>
              <button onClick={() => editStudent(s)}>Edit</button>
              <button onClick={() => deleteStudent(s.id)}>
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
