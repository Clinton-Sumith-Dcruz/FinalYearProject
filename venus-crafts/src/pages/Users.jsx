const [users, setUsers] = useState([]);

useEffect(() => {
  getUsers().then(res => setUsers(res.data));
}, []);

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {users.map(user => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>Delete</td>
      </tr>
    ))}
  </tbody>
</table>