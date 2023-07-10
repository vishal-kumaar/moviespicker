const addSeo = (title, description) => {
  const metaTag = document.querySelector('meta[name="description"]');
  document.title = title;
  metaTag.setAttribute("content", description);
};

export default addSeo;