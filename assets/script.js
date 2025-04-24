document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("togglePrice");
    const block1 = document.getElementById("pricing-table-id-1");
    const block2 = document.getElementById("pricing-table-id-2");

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            block1.classList.remove("active");
            block1.style.display = "none";
            block2.classList.add("active");
            block2.style.display = "block";
        } else {
            block2.classList.remove("active");
            block2.style.display = "none";
            block1.classList.add("active");
            block1.style.display = "block";
        }
    });

    // Initial State
    block1.style.display = "block";
    block2.style.display = "none";
});
