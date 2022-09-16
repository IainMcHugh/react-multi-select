import { z } from 'zod';

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
