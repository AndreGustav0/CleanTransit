const links = document.querySelectorAll(".urlId")
const id = new URLSearchParams(window.location.search)

links.forEach((link) => {
    link.href = link.href+`?id=${id.get("id")}`
})

