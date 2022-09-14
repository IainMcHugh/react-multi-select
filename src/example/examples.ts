import { z } from 'zod';

// Example 1
const a = ['a', 2, 'c'];
const b = a.filter((val) => val === 2)[0];
console.log(b);

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

// Example 3
const validator = z.object({
  name: z.string(),
  age: z.number().optional(),
});
const example: any = {
  age: 50,
  something: 'else',
};
const data = validator.safeParse(example);
if (data.success) {
  // now data exists
  console.log(data.data);
} else {
  // now error exists
  console.log(data.error);
}
export type TExample = z.infer<typeof validator>;

// good use cases
// 1. api calls
// 2. getServerSideProps -> context.params or context.query
