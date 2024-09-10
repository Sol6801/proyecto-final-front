const GroupPage = ({ params, children }) => {

  return (
    <section className='bg-violet-400 grid place-items-center flex-1 rounded-lg'>

      <article>
        <h2>Group Id:{params.groupId} Page </h2>
        

      {children}
      </article>
    </section>
  );
};

export default GroupPage;
