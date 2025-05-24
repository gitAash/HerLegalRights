const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
