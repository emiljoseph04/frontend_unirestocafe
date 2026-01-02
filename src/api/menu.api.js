export const fetchMenu = async () => {
  const res = await fetch(
    "https://zartek-task.vercel.app/api/resto-cafe"
  );
  const data = await res.json();
  return data.data[0].table_menu_list;
};
