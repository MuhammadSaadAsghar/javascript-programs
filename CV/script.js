// Current Year (Optional)

const year = new Date().getFullYear();

console.log("Resume Loaded Successfully");

// Print Resume

function printResume() {
    window.print();
}

// Smooth Scroll (Future Use)

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {

            e.preventDefault();

            document.querySelector(target).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});