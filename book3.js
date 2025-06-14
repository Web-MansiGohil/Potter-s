async function books() {
    try {
        let response = await axios.get("https://api.potterdb.com/v1/books/df29f64a-fdcc-4397-bea5-b1bae5267a74");
        console.log(response);
        let book = `
            <h1>${response.data.data.attributes.title}</h1>
            <div class=book1>
                <div class=book_info1>
                    <img src="${response.data.data.attributes.cover}" alt="book1">
                        <div class="infoBook">
                            <table>
                                <tbody>
                                    <tr>
                                        <th> Title </th>
                                        <td>${response.data.data.attributes.title}</td>
                                    </tr>
                                    <tr>
                                        <th> Author </th>
                                        <td>${response.data.data.attributes.author}</td>
                                    </tr>
                                    <tr>
                                        <th>Release Date</th>
                                        <td>${response.data.data.attributes.release_date}</td>
                                    </tr>
                                    <tr>
                                        <th>Dedication</th>
                                        <td>${response.data.data.attributes.dedication}</td>
                                    </tr>
                                    <tr>
                                        <th>Summary </th>
                                        <td>${response.data.data.attributes.summary}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
            <div class=box2 style="height:120vh;">
                <h2 style="text-align:left;margin-left:25px;padding-left:5px;color:white;"> Chapters </h2>
                    <div class=chapters>
                        <ul>
                            <li> 1. Owl Post</li>
                            <li>2. Aunt Marge's Big Mistake</li>
                            <li>3. The Knight Bus</li>
                            <li>4. The Leaky Cauldron</li>
                            <li>5. The Dementor</li>
                            <li>6. Talons and Tea Leaves</li>
                            <li>7. The Boggart in the Wardrobe</li>
                            <li>8. Flight of the Fat Lady</li>
                            <li>9. Grim Defeat</li>
                            <li>10. The Marauder's Map</li>
                            <li>11. The Firebolt</li>
                            <li>12. The Patronus</li>
                            <li>13. Gryffindor versus Ravenclaw</li>
                            <li>14. Snape's Grudge</li>
                            <li>15. The Quidditch Final</li>
                            <li>16. Professor Trelawney's Prediction</li>
                            <li>17. Cat, Rat and Dog</li>
                            <li>18. Moony, Wormtail, Padfoot and Prongs</li>
                            <li>19. The Servant of Lord Voldemort
                            <li>20. The Dementor's Kiss</li>
                            <li>21. Hermione's Secret</li>
                            <li>22. Owl Post Again</li>
                        <ul>
                    </div>
            <div>
        `;
        document.getElementById("main").innerHTML = book;

    } catch (error) {
        let er = document.getElementById("main");
        er.innerHTML = error;
        er.style.color = "white";
    }
}

books()