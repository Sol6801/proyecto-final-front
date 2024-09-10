import React from 'react';
import Head from 'next/head';
import Friend from '@/app/components/friend';
import Navbar from '@/app/components/navbar';

const Friends = () => {
  // Simulamos datos de amigos
  const friends = [
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
      <Navbar/>
      <Head>
        <title>Friends List</title>
      </Head>

      {/* Friends Grid Section */}
      <section>
        <h1>Your Friends</h1>

        {/* Grid of Friends */}
        <div>
        {friends.map((friend) => (
            <Friend key={friend.id} name={friend.name} imageUrl={friend.imageUrl} />
          ))}
        </div>
      </section>
    </div>
  );
};

// Exportamos el componente Friends como default
export default Friends;
