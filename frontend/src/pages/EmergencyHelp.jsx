export default function EmergencyHelp() {
  const helplines = [
    { name: "Women Helpline (All India)", number: "1091" },
    { name: "National Commission for Women", number: "7827170170" },
    { name: "Police Emergency", number: "112" },
    { name: "Child Helpline", number: "1098" },
    { name: "Domestic Violence Helpline", number: "181" },
    { name: "Cyber Crime Helpline", number: "1930" }
  ];

  const ngos = [
    {
      name: "SNEHA (Society for Nutrition, Education and Health Action)",
      phone: "022-24388888",
      website: "https://snehamumbai.org/"
    },
    {
      name: "Shakti Shalini – Delhi",
      phone: "10920",
      website: "https://shaktishalini.org/"
    },
    {
      name: "Jagori – Delhi",
      phone: "011-26692700",
      website: "http://www.jagori.org/"
    },
    {
      name: "Majlis Legal Centre – Mumbai",
      phone: "022-26661252",
      website: "https://majlislaw.com/"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-xl shadow-lg emergency-section">
      <h2 className="text-3xl font-extrabold mb-6 text-emergency text-center">
        Emergency Help for Women
      </h2>

      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">24x7 National Helplines</h3>
        <p className="mb-4 text-gray-600">
          If you or someone you know is in danger, don't hesitate to call these verified national helpline numbers.
        </p>
        <ul className="space-y-3">
          {helplines.map(({ name, number }) => (
            <li key={number}>
              <a
                href={`tel:${number}`}
                className="block bg-red-50 text-red-800 px-4 py-3 rounded-lg border-l-4 border-red-500 hover:bg-red-100 transition font-semibold"
              >
                📞 {name}: {number}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Legal Aid & Support NGOs</h3>
        <p className="mb-4 text-gray-600">
          These organizations offer free legal assistance, shelter, emotional support, and counseling for women in distress.
        </p>
        <ul className="space-y-4">
          {ngos.map(({ name, phone, website }) => (
            <li key={phone}>
              <div className="p-4 bg-purple-50 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-lg font-semibold text-purple-800 mb-1">{name}</p>
                <p className="text-sm text-gray-700">📞 <a href={`tel:${phone}`}>{phone}</a></p>
                <p className="text-sm text-blue-600 underline">
                  🌐 <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
