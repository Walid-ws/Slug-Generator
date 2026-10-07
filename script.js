function slugify(text, removeStopWords = false) {
  const stopWords = ["the","and","of","in","on","at","to"];
  let slug = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  slug = slug.toLowerCase().trim();

  if (removeStopWords) {
    slug = slug.split(" ")
      .filter(word => !stopWords.includes(word))
      .join(" ");
  }

  slug = slug.replace(/[^a-z0-9\s-]/g, "")
             .replace(/\s+/g, "-")
             .replace(/-+/g, "-")
             .replace(/^-|-$/g, "");

  const maxLength = 50;
  if (slug.length > maxLength) {
    slug = slug.substring(0, slug.lastIndexOf("-", maxLength));
  }
  return slug;
}

function generateSlug() {
  const text = document.getElementById("titleInput").value;
  const removeStopWords = document.getElementById("stopWordsToggle").checked;
  document.getElementById("output").innerText = slugify(text, removeStopWords);
}
