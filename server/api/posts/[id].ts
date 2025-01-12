export default defineEventHandler((event) => {
  const id = event.context.params?.id;
  return { id, title: `Post ${id}`, content: `This is content for post ${id}` };
});
