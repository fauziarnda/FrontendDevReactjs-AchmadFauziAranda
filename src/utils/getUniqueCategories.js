export async function getUniqueCategories(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const categorySet = new Set();
    data.forEach((r) => {
      r.categories?.forEach((cat) => categorySet.add(cat));
    });

    return [...categorySet];
  } catch (err) {
    console.error('Error fetching unique categories:', err);
    return [];
  }
}
