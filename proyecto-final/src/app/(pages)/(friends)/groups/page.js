import React from 'react';
import Head from 'next/head';

const groups = () => {
  // Simulamos datos de amigos
  const groups = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Michael Brown',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      id: 4,
      name: 'Emily Johnson',
      image: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
    {
      id: 5,
      name: 'Alice Cooper',
      image: 'https://randomuser.me/api/portraits/women/56.jpg',
    },
    {
      id: 6,
      name: 'Bob Martin',
      image: 'https://randomuser.me/api/portraits/men/68.jpg',
    },
  ];

  return (
    <div>
      <Head>
        <title>Groups List</title>
      </Head>

      {/* Groups Grid Section */}
      <section>
        <h2>Your groups</h2>

        {/* Grid of Groups */}
        <div>
          {groups.map((group) => (
            <div key={group.id}>
              <img
                src={group.image}
                alt={`Profile picture of ${group.name}`}
                style={{ width: '5rem', height: 'auto' }}
              />
              <h3>{group.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Exportamos el componente groups como default
export default groups;
