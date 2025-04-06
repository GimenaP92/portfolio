import Link from "next/link";

const RoleCards = () => {
  const roles = [
    { label: 'Cliente', path: '/projects/miPyme/cliente', emoji: '🛒' },
    { label: 'Vendedor', path: '/projects/miPyme/vendedor', emoji: '🛍️' },
    { label: 'Administrador', path: '/projects/miPyme/admin', emoji: '🛡️' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8">
      {roles.map((role) => (
        <Link
          key={role.label}
          href={role.path}
          className="bg-white rounded-2xl shadow-md p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="text-5xl mb-4">{role.emoji}</div>
          <h2 className="text-2xl font-bold text-gray-800">{role.label}</h2>
        </Link>
      ))}
    </div>
  );
};

export default RoleCards;
