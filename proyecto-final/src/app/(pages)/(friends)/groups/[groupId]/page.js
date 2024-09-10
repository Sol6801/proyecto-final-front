import React from 'react';
import Head from 'next/head';

const group = () => {

  return (
    <section className='bg-red-600 grid place-items-center flex-1 rounded-lg'>
      <Head>
        <title>Groups List</title>
      </Head>

      {/* Groups Grid Section */}
      <article>
        <h2>Your groups</h2>

        {/* Grid of Groups */}
        {/* <div>
          {group.map((group) => (
            <div key={group.id}>
              <img
                src={group.image}
                alt={`Profile picture of ${group.name}`}
                style={{ width: '5rem', height: 'auto' }}
              />
              <h3>{group.name}</h3>
            </div>
          ))}
        </div> */}
      </article>
    </section>
  );
};

// Exportamos el componente groups como default
export default group;
