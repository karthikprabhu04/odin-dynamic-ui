
// Create dropDown function
export function dropDown() {
    const menu = document.querySelector(".menu");
    const items = document.querySelectorAll(".item");
    
    menu.addEventListener("click", () => {
        items.forEach(item => {
            item.classList.toggle("hidden");
        })
    })
}
