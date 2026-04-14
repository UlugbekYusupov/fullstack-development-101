// document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent (capture)");
// }, true); // true = capturing

// document.getElementById("child").addEventListener("click", () => {
//     console.log("Child");
// });

// document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent");
// });

// document.getElementById("child").addEventListener("click", () => {
//     console.log("Child");
// });

document.getElementById("list").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log("Clicked:", e.target.textContent);
    }
});