async function editPostHandler(e) {
  e.preventDefault();
  console.log("clicked");
  const title = document
    .querySelector(".input[name='post-title']")
    .value.trim();
  const post_text = document
    .querySelector(".textarea[name='textarea']")
    .value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, post_text }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    window.location.redirect("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editPostHandler);
