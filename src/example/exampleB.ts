// Example 2
type InferGSSP<T> = T extends () => Promise<{ props: infer P }> ? P : never;
const getServerSideProps = async () => {
  // ...
  return {
    props: {
      name: 'John Doe',
      age: 99,
    },
  };
};
export type TProps = InferGSSP<typeof getServerSideProps>;
