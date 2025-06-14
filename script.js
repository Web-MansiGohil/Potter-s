async function potterData() {
    try {

        let res = await fetch("potter.json");
        let data_potter = await res.json();

        console.log(data_potter);

        let potter = "";

        data_potter.data.forEach(element => {
            potter +=
                `<div class=box>
                <img src="${element.attributes.cover}" alt="book1">
                    <div class=info>
                        <h3 style=margin-bottom:30px;font-size:1.2rem;>${element.attributes.title} </h3>
                        <h4><i class="fa-solid fa-calendar-days"></i> ${element.attributes.release_date}</h4>
                        <h4><i class="fa-solid fa-book"></i>${element.attributes.pages}</h4>
                        <h4><i class="fa-solid fa-feather"></i> ${element.attributes.author}</h4>
                        <button id="${element.id}" onclick="books()">View Book </button>
                    </div>
                </div>
               
                        `
        });
        document.getElementById("boxes").innerHTML = potter;
    } catch (error) {
        document.getElementById("boxes").innerHTML = error;
    }
}
potterData();
