
let products = {
    data: [
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "22",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "35",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "16",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "75",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "54",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "51",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "34",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "62",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "82",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "34",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "72",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "41",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            // active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "42",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            // active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "67",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            // active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "35",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "31",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            // active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "61",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            // active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "21",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            // active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "72",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            // active: "online"
        },
        {
            productName: "Cleaner",
            category: "Cleaning",
            price: "83",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            active: "online"
        },
        {
            productName: "Cleaner",
            category: "Dusting",
            price: "84",
            image: "../assets/card_img.png",
            a: "View product",
            href: "Location_Page.html",
            // active: "online"
        },
    ],
};

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //0Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container-para");
    //product name
    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //category name
    let category = document.createElement("h5");
    category.classList.add("category_name");
    category.innerText = i.category.toUpperCase();
    container.appendChild(category);
    //price
    let price = document.createElement("p");
    price.classList.add("price")
    price.innerText = "$" + i.price;
    container.appendChild(price);
    //button
    let btn = document.createElement("a");
    //   btn.innerText = "$" + i.price;
    btn.innerText = i.a;
    btn.setAttribute("href", i.href)
    btn.setAttribute("target", "_blank")
    container.appendChild(btn);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}
function prize() {
    // let array = int.concat(int)
    // console.log(array)
    let pr = document.querySelectorAll(".price")
    let array = []
    pr.forEach((ele) => {
        let prizelist = parseFloat(ele.innerText.replace("$", ""));
        array.push(prizelist)
    })
    array.sort((a, b) => a - b);
}
// document.addEventListener("DOMContentLoaded", () => {
const sortBtn = document.getElementById("sortbtn");
const sortBtn2 = document.getElementById("sortbtn2");
const cards = document.querySelectorAll(".card");
const load = document.querySelector(".loading")
const loads = document.querySelector(".loader")
// if(load.classList.contain = "load"){
//   console.log("Hello")
// }
load.classList.remove("load")
loads.classList.remove("loads")
sortBtn.addEventListener("click", () => {
    document.querySelector("#products").classList.remove("products_container")
    load.classList.add("load")
    loads.classList.add("loads")
    prize()
    setTimeout(function time() {
        sortBtn.classList.add("sortingbtn")
        sortBtn2.classList.remove("sortingbtn2")
        const container = cards[0].parentNode;
        container.classList.add("products_container")
        // document.querySelector('.none').classList.remove('none')
        // document.style.display = "none"
        // container.classList.add('hide')
        // Sort cards by ascending order based on price
        const sortedCards = Array.from(cards)
            .sort((a, b) => {
                // container.style.display = "block"
                const priceA = parseFloat(a.querySelector(".price").innerText.replace("$", ""));
                const priceB = parseFloat(b.querySelector(".price").innerText.replace("$", ""));
                return priceA - priceB;
            });

        // Remove the hide class from all cards
        cards.forEach(card => {
            card.classList.remove("hide");
        });

        // Clear the container and add sorted cards back
        // container = cards[0].parentNode;
        load.classList.remove("load")
        loads.classList.remove("loads")
        sortedCards.forEach(card => {
            container.appendChild(card);
        });
    }, 1000)
});
sortBtn2.addEventListener("click", () => {
    document.querySelector("#products").classList.remove("products_container")
    load.classList.add("load")
    loads.classList.add("loads")
    prize()
    setTimeout(function time() {
        sortBtn2.classList.add("sortingbtn2")
        sortBtn.classList.remove("sortingbtn")
        const container = cards[0].parentNode;
        container.classList.add("products_container")
        // document.querySelector('.none').classList.remove('none')
        // document.style.display = "none"
        // container.classList.add('hide')
        // Sort cards by ascending order based on price
        const sortedCards = Array.from(cards)
            .sort((a, b) => {
                // container.style.display = "block"
                const priceA = parseFloat(a.querySelector(".price").innerText.replace("$", ""));
                const priceB = parseFloat(b.querySelector(".price").innerText.replace("$", ""));
                return priceB - priceA;
            });

        // Remove the hide class from all cards
        cards.forEach(card => {
            card.classList.remove("hide");
        });

        // Clear the container and add sorted cards back
        // container = cards[0].parentNode;
        load.classList.remove("load")
        loads.classList.remove("loads")
        sortedCards.forEach(card => {
            container.appendChild(card);
        });
    }, 1000)
});

//Search button click
document.querySelector(".searchvalue").addEventListener("keyup", () => {
    let searchInput = document.getElementById("search-input").value;
    const search = document.getElementById("search-input")
    // console.log(search.placeholder == searchInput)
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    // prize(cards, searchInput)
    // prize(cards)
    let category = document.querySelectorAll(".category_name")
    elements.forEach((element, index1) => {
        category.forEach((cat, index) => {
            if (element.innerText.includes(searchInput.toUpperCase())) {
                cards[index1].classList.remove("hide");
            }
            else if (cat.innerText.includes(searchInput.toUpperCase())) {
                cards[index].classList.remove("hide")
            }
            else {
                //hide others
                cards[index1].classList.add("hide");
            }

        });
    });
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};



cards.forEach((card, index) => {
    const options = document.querySelector("select")
    options.addEventListener("click", (e) => {
        for (i = 0; i < cards.length; i++) {
            let length = products.data[i].category == e.target.value
            if (e.target.value == "All") {
                cards[index].classList.remove("hide")
            }
            else if (length) {
                cards[i].classList.remove('hide')
            }
            else {
                cards[i].classList.add('hide')
            }
        }
    })
})

const online = document.querySelector(".onlinebtn")
online.addEventListener("click", (e) => {
    for (i = 0; i < cards.length; i++) {
        if (e.target.value == products.data[i].active) {
            cards[i].classList.remove('hide')
        }
        else {
            cards[i].classList.add('hide')
        }
    }
})