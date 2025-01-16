import { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  
    useEffect(() => {
      fetchUsers();
    }, []);
    

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Admin Dashboard
      </h1>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 text-sm font-medium text-gray-600">Name</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600">
                Social Media Handle
              </th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600">Images</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-gray-700">{user.name}</td>
                  <td className="px-4 py-3 text-gray-700">{user.socialHandle}</td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      {user.images.map((img, index) => (
                        <img
                          key={index}
                          src={`http://localhost:5000${img}`}
                          alt={`User ${user._id} image ${index + 1}`}
                          className="w-16 h-16 object-cover rounded-lg border"
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="px-4 py-6 text-center text-gray-500"
                >
                  No submissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
