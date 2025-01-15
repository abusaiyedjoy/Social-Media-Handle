
const Dashboard = () => {
  // Static Data
  const submissions = [
    {
      id: 1,
      name: "John Doe",
      socialHandle: "@john_doe",
      images: [
        "https://i.ibb.co.com/fHMDdq7/Whats-App-Image-2024-08-25-at-15-28-48-dae0f1e5-removebg-preview.png",
        "https://i.ibb.co.com/fHMDdq7/Whats-App-Image-2024-08-25-at-15-28-48-dae0f1e5-removebg-preview.png",
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      socialHandle: "@jane_smith",
      images: [
        "https://i.ibb.co.com/fHMDdq7/Whats-App-Image-2024-08-25-at-15-28-48-dae0f1e5-removebg-preview.png",
        "https://i.ibb.co.com/fHMDdq7/Whats-App-Image-2024-08-25-at-15-28-48-dae0f1e5-removebg-preview.png",
        "https://i.ibb.co.com/fHMDdq7/Whats-App-Image-2024-08-25-at-15-28-48-dae0f1e5-removebg-preview.png",
      ],
    },
  ];

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
              <th className="px-4 py-2 text-sm font-medium text-gray-600">Social Media Handle</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600">Images</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((user) => (
              <tr
                key={user.id}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-700">{user.name}</td>
                <td className="px-4 py-3 text-gray-700">{user.socialHandle}</td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    {user.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`User ${user.id} image ${index + 1}`}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
