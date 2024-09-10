'use client';
import { useRouter } from 'next/navigation';

const GroupPage = ({ params, children }) => {
  const router = useRouter();
  const { groupId } = params;

  const goToCategories = () => {
    router.push(`/groups/${groupId}/categories`);
  };

  return (
    <section className='bg-violet-400 grid flex-1 rounded-lg'>

      <article>
        <h2 className="text-3xl font-bold text-center mb-12">Group Id:{params.groupId} Page </h2>
        <section>
          <h1 className="text-3xl font-bold text-center mb-12">Miembros:</h1>

          <button onClick={goToCategories}>  
          <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
            Categorias
          </a>
          </button>
        </section>


      {children}
      </article>
    </section>
  );
};

export default GroupPage;
